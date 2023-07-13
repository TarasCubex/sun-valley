

import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Loading.module.scss'

const loading = () => {
  return (
    <div className={styles.loading}>
      <Image src='/page-loading.gif' alt='loading' width={400} height={300} />
    </div>
  )
}

export default loading