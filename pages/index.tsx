import style from '/styles/pages/Home.module.scss'
import { memo } from 'react'
import { NextPage } from 'next'
import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'
import CommonButton from '../src/ui/CommonButton/CommonButton'
import Accordion from '../src/ui/Accordion/Accordion'
import AccordionItem from "../src/ui/Accordion/AccordionItem";

const Home: NextPage = () => {
	return (
		<GlobalWrapper>
			<div className={style.buttons}>
				<CommonButton>button</CommonButton>
				<CommonButton disabled={true}>button disabled</CommonButton>
			</div>
			<Accordion>
				<AccordionItem title={'num1'}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, necessitatibus.
				</AccordionItem>
				<AccordionItem title={'num1'}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, necessitatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, necessitatibus.
				</AccordionItem>
				<AccordionItem title={'num1'}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, necessitatibus.
				</AccordionItem>
			</Accordion>
		</GlobalWrapper>
	)
}

Home.displayName = 'home page'
export default memo(Home)
