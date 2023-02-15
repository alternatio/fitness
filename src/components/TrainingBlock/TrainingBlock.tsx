import { FC, memo } from 'react'
import style from './styles/TrainingBlock.module.scss'
import {data, programI} from '../data/programsData'
import Image from "next/image";
import Link from "next/link";

interface TrainingBlockProps {
	object: programI
  arrayOfTextStage: string[]
  index: number
}

const TrainingBlock: FC<TrainingBlockProps> = props => {
  const image = require(`/public/images/${props.object.image}`)
  const currentIndex = data.indexOf(props.object)

	return (
    <Link href={`/training/${currentIndex}`} className={style.block}>
      <Image className={style.image} src={image} alt={'чел'} />
      <h3 className={style.title}>{props.object.title}</h3>
      <div className={style.description}>
        <span className={style.descriptionText}>
          {props.object.description}
        </span>
        <span className={style.descriptionStage}>
          {props.arrayOfTextStage[props.object.stage]}
        </span>
        <span className={style.descriptionPurpose}>
          Тип тренировки: {props.object.purpose}
        </span>
        <span className={style.descriptionStepsLength}>
          Количество упражнений: {props.object.steps.length}
        </span>
      </div>
    </Link>
  )
}

TrainingBlock.displayName = 'TrainingBlock'
export default memo(TrainingBlock)
