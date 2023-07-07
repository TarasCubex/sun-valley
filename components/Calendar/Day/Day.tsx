import React from 'react'
import styles from './Day.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import Badge from '../../Badge/Badge'

import type {IDayData} from '../../../types'

type DayProps = {
  value: IDayData;
  today: boolean;
  currentMonth: boolean;
  selectDay: React.Dispatch<React.SetStateAction<Date | null>>
}

const Day: React.FC<DayProps> = ({value, today, currentMonth, selectDay}) => {

  const dayClassName = classNames(styles.cell,{
    [styles.today]: today,
    [styles.thismonth]: currentMonth
  })

  const link = value.date.toLocaleDateString()

  return (
    <div className={dayClassName} onClick={() => selectDay(value.date)}>
      <Link href={`/${link}`}>
        <div className={styles.content}>
          {!!value.notes.length && <Badge notes={value.notes}/>}
          <p>
            {value.date.getDate()}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Day