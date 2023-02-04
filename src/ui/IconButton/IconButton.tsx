import { NextPage } from 'next'
import { memo } from 'react'
import style from './styles/IconButton.module.scss'
import { multiClassNames } from '../helpers/multiClassNames'
import Image from "next/image";

interface IconButtonProps {
  image: string
	onClick?: CallableFunction
	className?: string
	disabled?: boolean
}

const IconButton: NextPage<IconButtonProps> = props => {
	const className = props.className ? props.className : ''

	return (
		<button
			onClick={() => props.onClick && props.onClick()}
			className={multiClassNames([style.button, className])}
			disabled={props.disabled}>
      <Image
        className='icon'
        src={props.image}
        alt={props.image}
      />
    </button>
	)
}

IconButton.displayName = 'IconButton'
export default memo(IconButton)
