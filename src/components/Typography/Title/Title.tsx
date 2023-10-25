import React from 'react'
import style from './Title.module.scss'

export interface ITitleProps extends React.HTMLAttributes<HTMLHeadingElement>{
    text: string;
}

const Title = (props: ITitleProps) => {
    return (
        <h1
            className={style.title}
            {...props}
        >{ props.text }</h1>
    )
}

export default Title