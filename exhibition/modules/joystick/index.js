import { useState } from "react";
import throttle from 'lodash/throttle';

export class Joystick {
  constructor() {
    this.active = false;
    this.prevWheelDelta = 0;
    this._forwardListener = throttle(() => {
      this.onForward && this.onForward();
    }, 500, { trailing: false });
    this._backwardListener = throttle(() => {
      this.onBackward && this.onBackward();
    }, 500, { trailing: false });
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
    window.addEventListener('mousewheel', this.mousewheelHandler);
  }

  deactivate () {
    this.active = false;
    window.removeEventListener('wheel', this.mousewheelHandler);
    window.removeEventListener('mousewheel', this.mousewheelHandler);
  }

  mousewheelHandler = (e) => {
    if (Math.abs(e.wheelDelta) > 50) {
      if (e.wheelDelta < 0) {
        if (this.prevWheelDelta > e.wheelDelta) {
          this._forwardListener();
        }
        //scroll down
      } else {
        //scroll up
        if (this.prevWheelDelta < e.wheelDelta) {
          this._backwardListener();
        }
      }
    }

    this.prevWheelDelta = e.wheelDelta;
    
  }
}

export const joystick = new Joystick();