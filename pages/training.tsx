import { NextPage } from 'next'
import { memo } from 'react';
import Header from "../src/components/Header/Header";
import GlobalWrapper from '../src/ui/GlobalWrapper/GlobalWrapper'


const Training: NextPage = () => {
    return (
        <GlobalWrapper>
        <Header />
        </GlobalWrapper>
    )
}

export default memo(Training)