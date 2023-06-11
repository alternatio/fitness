import { NextPage } from 'next'
import { memo, useState } from 'react'
import Header from '../src/components/Header/Header'
import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'
import style from '/styles/pages/Trainings.module.scss'
import {
	arrayOfTextStage,
	data,
	purposeT,
	stageT,
	genderT,
} from '../src/components/data/programsData'
import TrainingBlock from '../src/components/TrainingBlock/TrainingBlock'
import InputText from '../src/ui/InputText/InputText'
import InputRadio from '../src/ui/InputRadio/InputRadio'
import Head from 'next/head'
import Footer from '../src/components/Footer/Footer'
import { motion } from 'framer-motion'
import { arrayOfTextGender } from '../src/components/data/dietsData'

interface searchI {
	stage: stageT
	purpose: purposeT[]
	gender: genderT
}

const Trainings: NextPage = () => {
	const [userStage, setUserStage] = useState<number>(0)
	const [userHeight, setUserHeight] = useState<string>('')
	const [userWeight, setUserWeight] = useState<string>('')
	const [userGender, setUserGender] = useState<number>(0)
	const [search, setSearch] = useState<searchI>()

	const getBodyMassIndex = () => {
		const height: number = +userHeight
		const weight: number = +userWeight
		return weight / height ** 2
	}

	const getTrainings = (): searchI => {
		const massIndex = getBodyMassIndex()
		let purpose: purposeT[] = []
		if (massIndex <= 18.5) {
			purpose = ['Набор массы']
		} else if (massIndex <= 25) {
			purpose = [
				'Увеличение силы',
				'Увеличение выносливости',
				'Набор массы',
			]
		} else if (massIndex <= 30) {
			purpose = [
				'Увеличение силы',
				'Увеличение выносливости',
			]
		} else if (massIndex <= 40) {
			purpose = [
				'Увеличение силы',
				'Увеличение выносливости',
				'Жиросжигание',
			]
		} else if (massIndex > 40) {
			purpose = ['Жиросжигание']
		} else {
			purpose = [
				'Жиросжигание',
				'Набор массы',
				'Увеличение силы',
				'Увеличение выносливости',
			]
		}

		return {
			stage: userStage as stageT,
			gender: userGender as genderT,
			purpose,
		}
	}

	return (
		<>
			<Head>
				<title>Тренировки</title>
			</Head>

			<GlobalWrapper>
				<Header />
				<div className={style.controller}>
					<div className={style.years}>
						{arrayOfTextStage.map((text, index) => {
							return (
								<InputRadio
									key={index}
									name={'stage'}
									inputValue={index}
									value={userStage}
									setValue={setUserStage}>
									{text}
								</InputRadio>
							)
						})}
					</div>
					<div className={style.years}>
						{arrayOfTextGender.map((text, index) => {
							return (
								<InputRadio
									key={index}
									name={'gender'}
									inputValue={index}
									value={userGender}
									setValue={setUserGender}>
									{text}
								</InputRadio>
							)
						})}
					</div>
					<div className={style.textInputs}>
						<InputText
							value={userHeight}
							setValue={setUserHeight}
							placeholder={'Рост (м, например - 1.79) '}
							type={'number'}
							max={5}
						/>
						<InputText
							value={userWeight}
							setValue={setUserWeight}
							placeholder={'Масса (кг, например - 69)'}
							type={'number'}
							max={1000}
							maxLength={4}
						/>
					</div>
					<button
						onClick={() => {
							setSearch(getTrainings())
						}}
						className={style.button}>
						Подобрать
					</button>
				</div>

				<div className={style.trainingListWrapper}>
					<motion.div
						layout={true}
						className={style.trainingsList}>
						{!search &&
							data.map((value, index) => {
								return (
									<TrainingBlock
										key={index}
										object={value}
										arrayOfTextStage={arrayOfTextStage}
										index={index}
									/>
								)
							})}
						{search &&
							data.filter(obj => {
								console.log(obj.purpose, search.purpose)

								return (
									obj.gender ===
										arrayOfTextGender[search.gender] &&
									obj.stage === search.stage &&
									search.purpose.find(
										el => el === obj.purpose
									)
								)
							}).length === 0 &&
							'Ничего не найдено'}
						{search &&
							data
								.filter(
									obj =>
										obj.gender ===
											arrayOfTextGender[search.gender] &&
										obj.stage === search.stage &&
										search.purpose.find(
											el => el === obj.purpose
										)
								)
								.map((value, index) => {
									console.log(value)

									return (
										<TrainingBlock
											key={index}
											object={value}
											arrayOfTextStage={arrayOfTextStage}
											index={index}
										/>
									)
								})}
					</motion.div>
				</div>

				<Footer />
			</GlobalWrapper>
		</>
	)
}

export default memo(Trainings)
