import React from 'react'
import styles from './ValueElement.module.scss'
import { useInView } from "react-intersection-observer";
import classnames from 'classnames'
import {setRef} from '@/utilities/setRef'

type ValueElementProps = {
  value: string;
  handler: (hour: string) => void
}

const ValueElement = React.forwardRef<HTMLDivElement, ValueElementProps>(({value, handler}, ref) => {

  const handleChange = (inV:boolean) => {
    if(inV) handler(value)
  }

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.7,
    root: setRef(ref),
    rootMargin: '-55px 0px -55px 0px',
    onChange: handleChange
  });

  const clName = classnames(styles.hour, {
    [styles.selected] : inView,
    [styles['not-selected']]: !inView
  })

  return(
      <div className={clName} ref={inViewRef}>
        <p>
        {value.replace(/\D/,'')}
        </p>
      </div>
  )
})

ValueElement.displayName = 'ValueElement'

export default ValueElement