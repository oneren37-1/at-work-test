import React from 'react'
import classNames from "classnames";
import style from "./Caption.module.scss";
import {usePlatform} from "../../../app/hooks";

const Caption = (props: React.HTMLAttributes<HTMLSpanElement>) => {
    const platform = usePlatform();

    return (
        <span
            {...props}
            className={classNames(
                props.className,
                style.caption,
                { [style.mobile]: platform === 'mobile' }
            )}
        >{ props.children }</span>
    )
}

export default Caption
