import React from 'react'
import style from './Title.module.scss'
import classNames from "classnames";

const Title = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1
            {...props}
            className={classNames(
                props.className,
                style.title
            )}
        >{ props.children }</h1>
    )
}

export default Title