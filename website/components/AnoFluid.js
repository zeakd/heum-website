import React, { useRef, useMemo, useEffect } from 'react';

const genVector = (min, max) => {
  const xDirection = random(-1, 1);
  const yDirection = random(-1, 1);
  const magintude = random(min, max);
  const size = Math.sqrt(xDirection * xDirection + yDirection * yDirection);

  return {
    x: magintude * xDirection / size,
    y: magintude * yDirection / size,
    magintude,
  }
}

export default function Fluid ({
  render,
}) {
  const [distance, setDistance] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const elemRef = useRef();
  const velocityRef = useRef(genVector(0.01, 0.1));
  const accelerationRef = useRef(genVector(0, 0.000001));

  const rad = Math.atan2(velocityRef.current.y, velocityRef.current.x);

  const rendered = useMemo(() => render(), [])

  useEffect(() => {    
    const animate = () => {

    };

    const intervalId = setInterval(() => {

    }, 10);
    return () => clearInterval(intervalId);
  })

  return (
    <Base
      ref={elemRef}
    >
      <WorkWrapper>
        {rendered}
      </WorkWrapper>
    </Base>
  )
}

const WorkWrapper = styled.div`
  width: 40%;
  filter: ${({ hovered }) => hovered ? 'blur(0)' : 'blur(32px)'};
  transition: filter 0.3s; 
`