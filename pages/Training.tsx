import { NextPage } from 'next'
import { memo } from 'react'
import Header from '../src/components/Header/Header'
import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'
import style from '/styles/pages/Training.module.scss'
import {data} from "../src/components/data/programsData";
import { motion } from 'framer-motion'

const Training: NextPage = () => {
	return (
		<GlobalWrapper>
			<Header />
			<div className={style.listWrapper}>
				<motion.div layout={'size'} className={style.trainingsList}>
					{data.map((value, index) => {
						return (
							<motion.div layout={'size'}
								className={style.block} key={index}>
								{value.title}
								<span>{value.description}</span>
								<span>{value.steps}</span>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</GlobalWrapper>
	)
}

export default memo(Training)