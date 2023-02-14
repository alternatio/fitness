import { NextPage } from 'next'
import { memo, useState } from 'react'
import Header from '../src/components/Header/Header'
import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'
import style from '/styles/pages/Training.module.scss'
import { data } from '../src/components/data/programsData'
import TrainingBlock from '../src/components/TrainingBlock/TrainingBlock'
import InputText from '../src/ui/InputText/InputText'
import InputRadio from '../src/ui/InputRadio/InputRadio'

const Training: NextPage = () => {
	const [userYears, setUserYears] = useState<number>(0)
	const [userHeight, setUserHeight] = useState<string>('')
	const [userWeight, setUserWeight] = useState<string>('')
	const [search, setSearch] = useState()

	return (
		<GlobalWrapper>
			<Header />
			<div className={style.controller}>
				<div className={style.years}>
					<InputRadio
						name={'stage'}
						inputValue={0}
						value={userYears}
						setValue={setUserYears}>
						Без стажа (0 лет)
					</InputRadio>
					<InputRadio
						name={'stage'}
						inputValue={1}
						value={userYears}
						setValue={setUserYears}>
						Небольшой стаж (от 1 года)
					</InputRadio>
					<InputRadio
						name={'stage'}
						inputValue={2}
						value={userYears}
						setValue={setUserYears}>
						Приличный стаж (от 3 лет)
					</InputRadio>
					<InputRadio
						name={'stage'}
						inputValue={3}
						value={userYears}
						setValue={setUserYears}>
						Значительный стаж (от 7 лет)
					</InputRadio>
				</div>
				<div className={style.textInputs}>
					<InputText
						value={userHeight}
						setValue={setUserHeight}
						placeholder={'Рост (см)'}
					/>
					<InputText
						value={userWeight}
						setValue={setUserWeight}
						placeholder={'Масса'}
					/>
				</div>
				<button
					onClick={() => {}}
					className={style.button}>
					Найти
				</button>
			</div>

			<div className={style.trainingsList}>
				{data.map((value, index) => {
					return <TrainingBlock key={index} />
				})}
			</div>
		</GlobalWrapper>
	)
}

export default memo(Training)
