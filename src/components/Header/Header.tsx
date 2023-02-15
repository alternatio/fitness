import { NextPage } from 'next'
import { memo, useState } from 'react'
import style from './styles/Header.module.scss'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import {
	commonAnimations,
	commonTransition,
} from '../../ui/helpers/animations'
import { linkBackgroundVariants } from './styles/variants'

interface HeaderProps {}

interface link {
	title: string
	href: string
}

type hoverLinkT = number | null

const arrayOfLinks: link[] = [
	{
		title: 'Тренировки',
		href: '/trainings',
	},
	// {
	// 	title: 'Питание',
	// 	href: '#',
	// },
]

const Header: NextPage<HeaderProps> = props => {
	const [hoverLink, setHoverLink] =
		useState<hoverLinkT>(null)

	return (
		<header className={style.header}>
			<Link href={'/'} className={style.logo}>
				Bodybuilder
			</Link>
			<nav className={style.navigation}>
				{arrayOfLinks.map((link, index) => {
					return (
						<Link
							key={index}
							onMouseEnter={() => setHoverLink(index)}
							onMouseLeave={() => setHoverLink(null)}
							className={style.link}
							href={link.href}>
							<span className={style.linkText}>
								{link.title}
							</span>
							<AnimatePresence>
								{hoverLink === index && (
									<motion.div
										variants={linkBackgroundVariants}
										{...commonAnimations}
										transition={commonTransition(.2)}
										layoutId={'background'}
										className={style.linkHoverBackground}
									/>
								)}
							</AnimatePresence>
						</Link>
					)
				})}
			</nav>
		</header>
	)
}

Header.displayName = 'Header'
export default memo(Header)
