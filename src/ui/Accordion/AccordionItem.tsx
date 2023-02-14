import { AnimatePresence, motion } from 'framer-motion'
import { NextPage } from 'next'
import { memo, ReactNode, useState } from 'react'
import style from './styles/Accordion.module.scss'
import {
	borderVariants,
	buttonVariants,
	contentVariants,
	contentWrapperVariants,
} from './styles/variants'
import {
	commonAnimations,
	commonTransition,
} from '../helpers/animations'

interface AccordionItemProps {
	children?: ReactNode
	title?: string
}

const AccordionItem: NextPage<
	AccordionItemProps
> = props => {
	const [contentIsVisible, handleContentVisible] =
		useState<boolean>(false)

	return (
		<div className={style.accordionItem}>
			<div className={style.accordionHead}>
				<h2 className={style.accordionTitle}>
					{props.title}
				</h2>
				<button
					className={style.accordionCrossButton}
					onClick={() =>
						handleContentVisible(prev => !prev)
					}>
					<span className={style.crossButtonStick} />
					<motion.span
						animate={contentIsVisible ? 'on' : 'off'}
						transition={commonTransition()}
						variants={buttonVariants}
						className={style.crossButtonStick}
					/>
				</button>
			</div>
			<AnimatePresence>
				{contentIsVisible && (
					<motion.div
						{...commonAnimations}
						transition={commonTransition()}
						variants={contentWrapperVariants}
						className={style.accordionContentWrapper}>
						<motion.div
							{...commonAnimations}
							transition={commonTransition()}
							variants={contentVariants}
							className={style.accordionContent}>
							<div className={style.accordionInnerContent}>
								{props.children}
							</div>
						</motion.div>

						<motion.div
							{...commonAnimations}
							transition={commonTransition()}
							variants={borderVariants}
							className={style.accordionBorder}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

AccordionItem.displayName = 'AccordionItem'
export default memo(AccordionItem)
