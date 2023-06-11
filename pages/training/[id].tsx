import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import {
	arrayOfTextStage,
	data,
} from '../../src/components/data/programsData'
import { useRouter } from 'next/router'
import GlobalWrapper from '../../src/ui/GlobalWrapper/GlobalWrapper'
import Header from '../../src/components/Header/Header'
import style from '/styles/pages/Training.module.scss'
import Image from 'next/image'
import Accordion from '../../src/ui/Accordion/Accordion'
import AccordionItem from '../../src/ui/Accordion/AccordionItem'

export async function getStaticPaths() {
	const paths = data.map((post, index) => ({
		params: { id: index + '' },
	}))
	return { paths, fallback: false }
}

// @ts-ignore
export async function getStaticProps({ params }) {
	const post = data[+params.id]
	return { props: { post } }
}

const Training: NextPage = () => {
	const router = useRouter()
	const currentPage = router.query.id as string
	const currentObject = data[+currentPage]
	const image =
		require(`/public/images/${currentObject.image}`) || ''

	return (
		<>
			<Head>
				<title>{currentObject.title || 'Тренировка'}</title>
			</Head>

			<GlobalWrapper>
				<Header />
				<div className={style.content}>
					<Image
						className={style.image}
						src={image || ''}
						alt={'image'}
					/>
					<div className={style.shadow} />
					<div className={style.topText}>
						<h3 className={style.title}>
							{currentObject.title || 'title'}
						</h3>
						<div className={style.descriptionBlock}>
							<span className={style.description}>
								{currentObject.description || 'description'}
							</span>
							<span className={style.description}>
								{arrayOfTextStage[currentObject.stage] ||
									'stage'}
							</span>
							<span className={style.description}>
								Тип тренировки:{' '}
								{currentObject.purpose || 'purpose'}
							</span>
							<span className={style.description}>
								Количество упражнений:{' '}
								{currentObject.steps.length ||
									'stepsLength'}
							</span>
						</div>
					</div>
				</div>
				<main className={style.steps}>
					<Accordion>
						{currentObject.steps &&
							currentObject.steps.map((value, index) => {
								return (
									<AccordionItem
										key={index}
										title={`Шаг ${index + 1}`}>
										<p>value.title</p>
										{value.src && (
											<Image
												src={value.src}
												alt=''
												width={50}
												height={50}
											/>
										)}
									</AccordionItem>
								)
							})}
					</Accordion>
				</main>
			</GlobalWrapper>
		</>
	)
}

Training.displayName = 'Training'
export default memo(Training)
