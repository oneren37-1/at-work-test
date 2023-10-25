import React from 'react'
import style from './Button.module.scss'
import {usePlatform} from "../../app/hooks";
import classNames from "classnames";

export interface ButtonProps {
    onClick?: () => void;
    text: string;
}

const Button = (props: ButtonProps) => {
    const platform = usePlatform();

    return (
        <button
            className={
                classNames(
                    style.button,
                    {[style.mobile]: platform === 'mobile'}
                )
            }
        >{props.text}</button>
    )
}

export default Button