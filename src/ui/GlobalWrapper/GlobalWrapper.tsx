import { NextPage } from 'next'
import { memo, ReactNode } from 'react'
import style from './styles/GlobalWrapper.module.scss'

interface GlobalWrapperProps {
	children: ReactNode
}

const GlobalWrapper: NextPage<
	GlobalWrapperProps
> = props => {
	return (
		<div className={style.outerWrapper}>
			<div className={style.innerWrapper}>
				{props.children}
			</div>
		</div>
	)
}

GlobalWrapper.displayName = 'GlobalWrapper'
export default memo(GlobalWrapper)
