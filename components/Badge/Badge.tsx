import React from 'react'
import styles from './Badge.module.scss'

import type {INote} from '../../types'

type BadgeProps = {
  notes: INote[]
}

const Badge: React.FC<BadgeProps> = ({notes}) => {
  return (
    <div className={styles.wrapper}>
      {notes.some(note => note.master === 'Катя') && <div></div>}
      {notes.some(note => note.master === 'Лена') && <div></div>}
    </div>
  )
}

export default Badge