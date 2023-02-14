import { memo } from 'react'
import { NextPage } from 'next'
import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'
import Header from "../src/components/Header/Header";
import Intro from "../src/components/Intro/Intro";
import Table from "../src/components/Table/Table";
import Footer from "../src/components/Footer/Footer";

const Home: NextPage = () => {
	return (
		<GlobalWrapper>
			<Header />
			<Intro />
			<Table />
			<Footer />
		</GlobalWrapper>
	)
}

Home.displayName = 'home page'
export default memo(Home)
