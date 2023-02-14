import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './styles/Input.module.scss'

interface InputProps {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	placeholder?: string
	width?: string
	maxLength?: number
	type?: string
	min?: number
	max?: number
}

const InputText: FC<InputProps> = props => {
	return (
		<label className={style.label}>
			<input
				className={style.input}
				value={props.value}
				onChange={e => props.setValue(e.target.value)}
				style={{ width: props.width }}
				placeholder={props.placeholder}
				maxLength={props.maxLength}
				type={props.type ? props.type : 'text'}
				min={props.min}
				max={props.max}
			/>
		</label>
	)
}

InputText.displayName = 'InputText'
export default memo(InputText)
