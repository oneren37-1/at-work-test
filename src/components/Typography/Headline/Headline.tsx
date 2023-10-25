import React from 'react';
import style from './Headline.module.scss';
import classNames from "classnames";
import {usePlatform} from "../../../app/hooks";
export interface IHeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

const Headline = (props: IHeadlineProps) => {
    const platform = usePlatform()

    return (
        <h2
            className={classNames(
                style.headline,
                { [style.mobile]: platform == 'mobile' }
            )}
            {...props}
        >{ props.text }</h2>
    )
}

export default Headline