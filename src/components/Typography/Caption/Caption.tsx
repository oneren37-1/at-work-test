import React from 'react'
import classNames from "classnames";
import style from "./Caption.module.scss";
import {usePlatform} from "../../../app/hooks";

export interface ICaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string
}

const Caption = (props: ICaptionProps) => {
    const platform = usePlatform();

    return (
        <p
            className={classNames(
                style.caption,
                { [style.mobile]: platform == 'mobile' }
            )}
            {...props}
        >{ props.text }</p>
    )
}

export default Caption
