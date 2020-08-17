import React, { useLayoutEffect, useEffect, useState, useRef, useMemo, createElement } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';

const random = (from, to) => (to - from) * Math.random() + from;

const getMagnitude = ({ x, y }) => Math.sqrt(x * x + y * y);

const genVector = (from, to) => {
  const xDirection = random(-1, 1);
  const yDirection = random(-1, 1);
  const magintude = random(from, to);
  const size = Math.sqrt(xDirection * xDirection + yDirection * yDirection);

  return {
    x: magintude * xDirection / size,
    y: magintude * yDirection / size,
    magintude,
  }
}

const Fluid = ({
  className,
  render = () => {},
  id,
  defaultTranslate = { x: 0, y: 500, z: 0 },
}) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const velocityRef = useRef(genVector(0.01, 0.1));
  const accelerationRef = useRef(genVector(0, 0.000001));
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({});
  const frictionRef = useRef(0.01);

  const elemRef = useRef();
  const imageElemRef = useRef();
  
  // y speed
  // rotateZ vector
  // 

  useEffect(() => {
    if (!hovered) return;

    const handleMouseMove = throttle((e) => {
      console.log('mousemove');
      const rect = imageElemRef.current.getBoundingClientRect();
      

      const diffX = e.clientX - (rect.left + rect.width / 2);
      const diffY = e.clientY - (rect.top + rect.height / 2);
      console.log(e.clientX, rect.left, diffX, diffY)

      setPos(prev => ({
        x: prev.x + diffX / 10,
        y: prev.y + diffY / 10,
      }))
    }, 100)

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hovered])

  useEffect(() => {
    if (hovered) return;
    const intervalId = setInterval(() => {
      setPos({
        x: random(-window.innerWidth / 2, window.innerWidth / 2),
        y: random(-window.innerHeight / 2, window.innerHeight / 2),
      })
    }, 10 * 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [hovered])


  
  useEffect(() => {
    if (!hovered) return;
    const intervalId = setInterval(() => {
      const nextAddedAcc = genVector(0, 0.000001);
      const nextAcc = {
        x: accelerationRef.current.x + nextAddedAcc.x,
        y: accelerationRef.current.y + nextAddedAcc.y,
      }

      // console.log(nextAcc)

      accelerationRef.current = {
        ...nextAcc,
        // power: Math.sqrt(nextAcc.x * nextAcc.x + nextAcc.y * nextAcc.y),
      }
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [hovered])
  
  useEffect(() => {
    if (!visible) return; 

    const time = 10;

    const intervalId = setInterval(() => {
      const velocity = velocityRef.current;
      const magintude = getMagnitude(velocityRef.current);
      if (hovered && magintude < 0.01) {
        accelerationRef.current = { x: 0, y: 0 };
      }

      const distance = magintude * time;

      setTranslate(prev => {
        if (prev.y < - elemRef.current.offsetHeight / 2) {
          return ({ ...prev, y: - distance });
        }

        return ({ ...prev, y: prev.y - distance });
      })

      const acc = accelerationRef.current;
      const nextVelocity = {
        x: velocity.x + acc.x * time,
        y: velocity.y + acc.y * time,
      };

      velocityRef.current = nextVelocity;
    }, time)
    return () => {
      clearInterval(intervalId)
    }
  }, [visible, hovered])

  useEffect(() => {
    if (!visible || !hovered) return; 

    const velocity = velocityRef.current;
    const magintude = getMagnitude(velocity);
    const friction = 0.0001;
    accelerationRef.current = {
      x: -velocity.x / magintude * friction,
      y: -velocity.y / magintude * friction,
    }

    return () => {
      // clearInterval(intervalId)
      const velocity = velocityRef.current;
      const size = getMagnitude(velocity);
      const mag = random(0, 0.000001);
      accelerationRef.current = { x: velocity.x / size * mag, y: velocity.y / size * mag };
    }
  }, [visible, hovered])

  const run = () => {
    setVisible(true);
    
    setTranslate(prev => ({ ...prev, y: prev.y }))
    setPos({
      x: random(-window.innerWidth / 2, window.innerWidth / 2),
      y: random(-window.innerHeight / 2, window.innerHeight / 2),
    })
  }

  useLayoutEffect(() => {
    if (!loaded) return;
    run();
  }, [loaded])

  const rad = Math.atan2(velocityRef.current.y, velocityRef.current.x);

  const work = (
    <WorkWrapper
      hovered={hovered}
    >
      <Image 
        ref={imageElemRef}
        src={`https://source.unsplash.com/random?${id}`}
        onLoad={() => setLoaded(true)}
        style={{
          transform: visible && `rotateZ(${-rad}rad)`,
        }}
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => setHovered(false)}
        
      />
    </WorkWrapper>
  )

  return (
    <Base 
      ref={elemRef}
      className={className}
      style={{
        transform: pos && `translate(${pos.x}px, ${pos.y}px)`,
        transition: hovered ? 'transform 10s' : 'transform 40s',
      }}
    >
      <DirectionWrapper
        style={{
          transform: visible && `rotateZ(${rad}rad)`,
        }}
      >
        <SpeedWrapper
          style={{
            transform: `translate3d(0, ${translate.y}px, 0)`,
          }}
        >
          <Distance>
            {work}
          </Distance>
          {/* <Distance>
            {work}
          </Distance> */}
        </SpeedWrapper>
      </DirectionWrapper>
    </Base>
  )
};

const Base = styled.div`
  position: relative;
`;

const DirectionWrapper = styled.div``;
const SpeedWrapper = styled.div``;

const Distance = styled.div`
  min-height: 4000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WorkWrapper = styled.div`
  width: 40%;
  filter: ${({ hovered }) => hovered ? 'blur(0)' : 'blur(8px)'};
  transition: filter 0.3s;
  /* :hover {
    filter: blur(0);
  } */
`

const Image = styled.img`
  pointer-events: auto;
  max-width: 100%;
  /* transform: rotate3d(0, 1, 1, -30deg); */
`;

export default Fluid;
