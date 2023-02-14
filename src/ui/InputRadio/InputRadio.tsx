import {Dispatch, FC, memo, ReactNode, SetStateAction} from 'react'
import style from './styles/InputRadio.module.scss'

interface InputRadioProps {
	name: string
	children?: ReactNode
	value: any
	setValue: Dispatch<SetStateAction<any>>
	inputValue: any
	withBackground?: boolean
}

const InputRadio: FC<InputRadioProps> = props => {
	return (
		<label className={style.label}>
			<input
				className={style.input}
				name={props.name}
				value={props.inputValue}
				onChange={(e) => {props.setValue(+e.target.value)}}
				checked={props.value === props.inputValue}
				type='radio'
			/>
			{props.children}
		</label>
	)
}

InputRadio.displayName = 'InputRadio'
export default memo(InputRadio)
