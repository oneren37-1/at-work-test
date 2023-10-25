import React from 'react';
import classNames from "classnames";
import style from './Text.module.scss'
import {usePlatform} from "../../../app/hooks";

export interface ITextProps {
    text: string;
    size?: 'medium' | 'large';
    weight?: 'regular' | 'semi-bold';
}

const Text = (props: ITextProps) => {
    const platform = usePlatform()

    return (
        <p
            className={ classNames(
                style.text,
                props.size == 'large' ? style.large : style.medium,
                props.weight == 'semi-bold' ? style["semi-bold"] : style.regular,
                { [style.mobile]: platform == 'mobile' }
            )}
        >{ props.text }</p>
    )
}

export default Text
