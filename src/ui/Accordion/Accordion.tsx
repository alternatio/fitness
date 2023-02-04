import { NextPage } from 'next'
import { memo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import style from './styles/Accordion.module.scss'

interface AccordionProps {
	children?: ReactNode
}

const Accordion: NextPage<AccordionProps> = props => {
	return (
		<motion.div className={style.accordion}>
			{props.children}
		</motion.div>
	)
}

Accordion.displayName = 'Accordion'
export default memo(Accordion)
