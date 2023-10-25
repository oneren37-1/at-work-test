import React from 'react';
import classNames from "classnames";
import style from './Text.module.scss'
import {usePlatform} from "../../../app/hooks";

export interface ITextProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: 'medium' | 'large';
    weight?: 'regular' | 'semi-bold';
}

const Text = (props: ITextProps) => {
    const platform = usePlatform()

    return (
        <span
            {...props}
            className={ classNames(
                props.className,
                style.text,
                props.size == 'large' ? style.large : style.medium,
                props.weight == 'semi-bold' ? style["semi-bold"] : style.regular,
                { [style.mobile]: platform == 'mobile' }
            )}
        >{ props.children }</span>
    )
}

export default Text
