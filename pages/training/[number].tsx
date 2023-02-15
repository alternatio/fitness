import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import {arrayOfTextStage, data} from '../../src/components/data/programsData'
import { useRouter } from 'next/router'
import GlobalWrapper from "../../src/ui/GlobalWrapper/GlobalWrapper";
import Header from "../../src/components/Header/Header";
import style from '/styles/pages/Training.module.scss'
import Image from "next/image";
import Accordion from "../../src/ui/Accordion/Accordion";
import AccordionItem from "../../src/ui/Accordion/AccordionItem";

const Training: NextPage = () => {
	const router = useRouter()
	const currentPage = router.query.number as string
  const currentObject = data[+currentPage]
  const image = require(`/public/images/${currentObject.image}`)

	return (
		<>
			<Head>
				<title>{currentObject.title}</title>
			</Head>

			<GlobalWrapper>
				<Header />
				<div className={style.content}>
					<Image
						className={style.image}
						src={image}
						alt={'image'}
					/>
					<div className={style.shadow} />
					<div className={style.topText}>
						<h3 className={style.title}>
							{currentObject.title}
						</h3>
						<div className={style.descriptionBlock}>
							<span className={style.description}>
								{currentObject.description}
							</span>
							<span className={style.description}>
								{arrayOfTextStage[currentObject.stage]}
							</span>
							<span className={style.description}>
								Тип тренировки: {currentObject.purpose}
							</span>
							<span className={style.description}>
								Количество упражнений:{' '}
								{currentObject.steps.length}
							</span>
						</div>
					</div>
				</div>
        <main className={style.steps}>
          <Accordion>
            {currentObject.steps.map((value, index) => {
              return (
                <AccordionItem key={index} title={`Шаг ${index + 1}`}>
                  {value}
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
