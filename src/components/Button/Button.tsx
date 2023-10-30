import React from 'react'
import style from './Button.module.scss'
import {usePlatform} from "../../app/hooks";
import classNames from "classnames";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const platform = usePlatform();

    return (
        <button
            {...props}
            className={
                classNames(
                    props.className,
                    style.button,
                    {[style.mobile]: platform === 'mobile'}
                )
            }
        >{props.children}</button>
    )
}

export default Button