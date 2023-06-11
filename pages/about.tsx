import { NextPage } from 'next'

import style from '/styles/pages/About.module.scss'

import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'

import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'

const About: NextPage = () => {
	const paragraphs = [
		`Наша команда заботится о каждом клиенте и наша
        цель - помочь вам достичь своего лучшего
        состояния. Мы предлагаем индивидуальные
        консультации, диетические рекомендации и
        непрерывную поддержку в течение всего вашего пути.`,
		`Мы верим, что фитнес - это не только об
        упражнениях и тренировках, но и о том, как вы
        чувствуете себя внутри и снаружи. Наш подход к
        фитнесу и здоровью в целом ориентирован на то,
        чтобы помочь вам найти баланс между физической
        активностью, питанием и отдыхом.`,
		`Поэтому приходите и присоединяйтесь к нашему сообществу! 
        Вместе мы сможем сделать ваш путь к здоровому образу жизни 
        не только достижимым, но и веселым и увлекательным.`,
		`Давайте вместе превратим ваши цели в реальность!`,
	]

	return (
		<GlobalWrapper>
			<Header />
			<main>
				<div className={style.intro}>
					<h1 className={style.heading}>О нас</h1>
					<p className={style.description}>
						Добро пожаловать в наше тренажерное сообщество!
						Мы команда поклонников здорового образа жизни,
						объединенных одной страстью.
					</p>
				</div>
				<div className={style.paragraphs}>
					{paragraphs.map((paragraph, index) => (
						<p key={index} className={style.paragraph}>
							{paragraph}
						</p>
					))}
				</div>
			</main>
			<Footer />
		</GlobalWrapper>
	)
}

export default About
