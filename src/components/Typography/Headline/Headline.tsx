import React from 'react';
import style from './Headline.module.scss';
import classNames from "classnames";
import {usePlatform} from "../../../app/hooks";

const Headline = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const platform = usePlatform()

    return (
        <h2
            {...props}
            className={classNames(
                props.className,
                style.headline,
                { [style.mobile]: platform == 'mobile' }
            )}
        >{ props.children }</h2>
    )
}

export default Headline