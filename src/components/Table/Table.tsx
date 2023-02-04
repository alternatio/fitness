import { NextPage } from 'next'
import { memo } from 'react'
import style from './styles/Table.module.scss'
import Accordion from "../../ui/Accordion/Accordion";
import AccordionItem from "../../ui/Accordion/AccordionItem";

interface TableProps {

}

const Table: NextPage<TableProps> = props => {
  return (
    <div className={style.table}>
      <Accordion>
        <AccordionItem title={'Почему вы должны выбрать наши программы?'}>
          Наши программы создаются мастерами спорта по всем видам спорта.
        </AccordionItem>
        <AccordionItem title={'Как начать пользоваться программами тренировок?'}>
          Заходите в раздел программ тренировок и выбирайте свой стаж.
        </AccordionItem>
      </Accordion>
    </div>
  )
}

Table.displayName = 'Table'
export default memo(Table)