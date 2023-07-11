import React from 'react'
import styles from './Badge.module.scss'

import type {INote} from '../../types'

type BadgeProps = {
  notes: INote[]
}

const Badge: React.FC<BadgeProps> = ({notes}) => {
  return (
    <div className={styles.wrapper}>
      {notes.some(note => note.master === 'Катя') && <div className={styles['master-1']}></div>}
      {notes.some(note => note.master === 'Лена') && <div className={styles['master-2']}></div>}
    </div>
  )
}

export default Badge