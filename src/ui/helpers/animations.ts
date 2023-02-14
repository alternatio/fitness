import {cubicBezier, Transition} from "framer-motion";

export const commonTransition = (duration: number = .4): Transition => {
  return {
    duration: duration,
    type: cubicBezier(0.35, 0.35, 0.2, 1)
  }
}

export const commonAnimations = {
  initial: 'off',
  animate: 'on',
  exit: 'off'
}