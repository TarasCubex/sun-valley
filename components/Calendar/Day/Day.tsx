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
}

const Day: React.FC<DayProps> = ({value, today, currentMonth}) => {

  const dayClassName = classNames(styles.cell,{
    [styles.today]: today,
    [styles.thismonth]: currentMonth
  })

  const link = value.date.toLocaleDateString()

  return (
    <div className={dayClassName}>
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