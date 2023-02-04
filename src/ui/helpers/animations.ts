import {cubicBezier, Transition} from "framer-motion";

export const commonTransition: Transition = {
  duration: .4,
  type: cubicBezier(0.35, 0.35, 0.2, 1)
}

export const commonAnimations = {
  initial: 'off',
  animate: 'on',
  exit: 'off'
}