import { useState } from "react";
import throttle from 'lodash/throttle';

export class Joystick {
  constructor() {
    this.active = false;
    this.prevDelta = 0;
    this.prevTouchY = 0;
    this.throttledForwardListener = throttle(() => {
      this._forwardListener();
    }, 500, { trailing: false });
    this.throttledBackwardListener = throttle(() => {
      this._backwardListener();
    }, 500, { trailing: false });


    this._forwardListener = () => {
      this.onForward && this.onForward();
    };
    this._backwardListener = () => {
      this.onBackward && this.onBackward();
    };
  }

  // onForward (cb) {
  //   this.forwardListener = throttle(cb, 1000, { trailing: false });
  // }

  // onBackward (cb) {
  //   this.backwardListener = throttle(cb, 1000, { trailing: false });
  // }

  activate () {
    this.active = true;


    window.addEventListener('wheel', this.mousewheelHandler);
    // window.addEventListener('mousewheel', this.mousewheelHandler);
    // window.addEventListener('DOMMouseScroll', this.mousewheelHandler);

    window.addEventListener('touchstart', this.touchstartHandler)
    window.addEventListener('touchend', this.touchendHandler)
    document.addEventListener('keydown', this.keydownHandler);
  }
  
  deactivate () {
    this.active = false;
    window.removeEventListener('wheel', this.mousewheelHandler);
    // window.removeEventListener('mousewheel', this.mousewheelHandler);
    // window.removeEventListener('DOMMouseScroll', this.mousewheelHandler);
    
    window.removeEventListener('touchstart', this.touchstartHandler)
    window.removeEventListener('touchend', this.touchendHandler)
    document.removeEventListener('keydown', this.keydownHandler);
  }

  mousewheelHandler = (e) => {
    // console.log('wheel', e.deltaY)
    const { deltaY } = e;
    if (Math.abs(deltaY) > 50) {
      if (deltaY < 0) {
        if (this.prevDelta > deltaY) {
          this.throttledBackwardListener();
        }
        //scroll down
      } else {
        //scroll up
        if (this.prevDelta < deltaY) {
          this.throttledForwardListener();
        }
      }
    }

    this.prevDelta = deltaY;
    
  }

  touchstartHandler = e => {
    // console.log('start', e.changedTouches[0])
    // console.log('start', e.touches[0])
    // console.log('start', e)
    this.prevTouchY = e.changedTouches[0] && e.changedTouches[0].pageY

  }

  touchendHandler = e => {
    // console.log('end', e.changedTouches[0])
    // console.log('end', e.touches[0])
    const touchY = e.changedTouches[0].pageY
    if (this.prevTouchY > touchY) {
      this.throttledForwardListener();
    } else {
      this.throttledBackwardListener();
    }
  }

  keydownHandler = event => {
    if (event.key) {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          this._backwardListener();
          break;
        case "ArrowDown":
        case "ArrowRight":
          this._forwardListener();
          break;
      }
    }
  }
}

export const joystick = new Joystick();