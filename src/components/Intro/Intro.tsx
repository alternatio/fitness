import { NextPage } from 'next'
import { memo } from 'react'
import style from './styles/Intro.module.scss'

interface IntroProps {}

const Intro: NextPage<IntroProps> = props => {
	return (
		<div className={style.intro}>
			<h3 className={style.title}>
				<span>Мы создаём для вас силу.</span>
				<span>We create power for you.</span>
				<span>Nous créons la force pour vous.</span>
				<span>Nos enim potentia creare.</span>
			</h3>
			<p className={style.description}>
				Создаём вместе программы тренировок и питания, чтобы
				быть сильнее. С помощью наших программ вы точно
				сможете покорить Олимп!
			</p>
		</div>
	)
}

Intro.displayName = 'Intro'
export default memo(Intro)
