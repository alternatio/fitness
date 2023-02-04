import {Variants} from "framer-motion";

export const contentVariants: Variants = {
  on: {
    height: 'auto',
    marginTop: '1rem'
  },
  off: {
    height: '0',
    marginTop: '0rem'
  }
}

export const borderVariants: Variants = {
  on: {
    width: '100%'
  },
  off: {
    width: '0%'
  }
}

export const contentWrapperVariants: Variants = {
  on: {
    gap: '1rem'
  },
  off: {
    gap: '0rem'
  }
}

export const buttonVariants: Variants = {
  on: {
    rotate: '0deg'
  },
  off: {
    rotate: '90deg'
  }
}