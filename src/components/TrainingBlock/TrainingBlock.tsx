import { FC, memo } from 'react'
import style from './styles/TrainingBlock.module.scss'
import { programI } from '../data/programsData'

interface TrainingBlockProps {
	object: programI
}

const TrainingBlock: FC<TrainingBlockProps> = props => {
	return (
    <div className={style.block}>
      <h3>{props.object.title}</h3>
      <div className={style.description}>
        <span className={style.descriptionText}>
          {props.object.description}
        </span>
        <span className={style.descriptionStage}>
          {props.object.stage}
        </span>
        <span className={style.descriptionPurpose}>
          {props.object.purpose}
        </span>
        <span className={style.descriptionStepsLength}>
          Количество упражнений: {props.object.steps.length}
        </span>
      </div>
    </div>
  )
}

TrainingBlock.displayName = 'TrainingBlock'
export default memo(TrainingBlock)
