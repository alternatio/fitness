import { NextPage } from 'next'
import { memo, ReactNode } from 'react'
import style from './styles/CommonButton.module.scss'
import { multiClassNames } from '../helpers/multiClassNames'

interface CommonButtonProps {
	children?: ReactNode
	onClick?: CallableFunction
	className?: string
	disabled?: boolean
}

const CommonButton: NextPage<CommonButtonProps> = props => {
	const className = props.className ? props.className : ''

	return (
		<button
			onClick={() => props.onClick && props.onClick()}
			className={multiClassNames([style.button, className])}
			disabled={props.disabled}>
			{props.children}
		</button>
	)
}

CommonButton.displayName = 'CommonButton'
export default memo(CommonButton)
