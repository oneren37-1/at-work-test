import React from 'react'
import style from './Category.module.scss'
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";

export interface ICategoryProps {
    name: string;
}

const Category = (props: ICategoryProps) => {
    const platform = usePlatform();

    return (
        <h3
            className={classNames(
                style.category,
                { [style.mobile]: platform == 'mobile' },
            )}
        >{ props.name }</h3>
    )
}

export default Category