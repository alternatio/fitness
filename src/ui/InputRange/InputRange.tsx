import { motion } from 'framer-motion'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './styles/InputRange.module.scss'

interface InputRangeProps {
	minMaxArray: [number, number]
	value: number
	setValue: Dispatch<SetStateAction<number>>
}

// wow, I cool
const InputRange: FC<InputRangeProps> = props => {
	const arrayOfValues: number[] = []
	for (
		let i = props.minMaxArray[0];
		i <= props.minMaxArray[1];
		i++
	) {
		arrayOfValues.push(i)
	}

	console.log(arrayOfValues)

	return (
		<div className={style.wrapper}>
			<label className={style.label}>
				<input
					className={style.input}
					min={props.minMaxArray[0]}
					max={props.minMaxArray[1]}
					value={props.value}
					onChange={e => props.setValue(+e.target.value)}
					type='range'
					list={'tickMarks'}
				/>
				<motion.div
					animate={{
						x: '-.4rem',
						left:
							(100 / (arrayOfValues.length - 1)) *
							props.value +
							'%',
					}}
					className={style.thumb}
				/>
				{arrayOfValues.map(value => {
					return (
						<div
							style={{
								left:
									-4 +
									value * (100 / arrayOfValues.length + 8) +
									'%',
							}}
							className={style.tick}>
							{value}
						</div>
					)
				})}
			</label>
		</div>
	)
}

InputRange.displayName = 'InputRange'
export default memo(InputRange)
