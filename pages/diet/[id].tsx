import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import {
    arrayOfTextStage,
    data,
} from '../../src/components/data/dietsData'
import { useRouter } from 'next/router'
import GlobalWrapper from '../../src/ui/GlobalWrapper/GlobalWrapper'
import Header from '../../src/components/Header/Header'
import style from '/styles/pages/Training.module.scss'
import Image from 'next/image'
import Accordion from '../../src/ui/Accordion/Accordion'
import AccordionItem from '../../src/ui/Accordion/AccordionItem'

export async function getStaticPaths() {
    const paths = data.map((post, index) => ({
        params: { id: index+'' },
    }))
    return { paths, fallback: false }
}

// @ts-ignore
export async function getStaticProps({ params }) {
    const post = data[+params.id]
    return { props: { post } }
}

const Diet: NextPage = () => {
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
								Количество приёмов пищи:{' '}
                                {currentObject.steps.length ||
                                    'stepsLength'}
							</span>
                            <span className={style.description}>
								Количество калорий:{' '}
                                {currentObject.calories ||
                                    'calories'}
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

Diet.displayName = 'Diet'
export default memo(Diet)
