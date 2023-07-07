

import React from 'react'
import styles from './Wheel.module.scss'
import ValueElement from './ValueElement/ValueElement'

type WheelProps = {
  values: string[];
  handler: (arg: string) => void
}

const Wheel: React.FC<WheelProps> = ({values, handler}) => {

  const parentRef = React.useRef(null)

  return (
    <div ref={parentRef} className={styles.wrapper}>
      {values.map(value =>
        <ValueElement key={value} value={value} handler={handler} ref={parentRef.current} />
        )}
    </div>
  )
}

export default Wheel