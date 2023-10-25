import React from 'react'
import style from './Title.module.scss'

export interface ITitleProps {
    text: string;
}

const Title = (props: ITitleProps) => {
    return (
        <h1
            className={style.title}
        >{ props.text }</h1>
    )
}

export default Title