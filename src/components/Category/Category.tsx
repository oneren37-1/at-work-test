import React, {ReactNode} from 'react'
import style from './Category.module.scss'
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";

export interface ICategoryProps extends React.HTMLAttributes<any>{
    children: ReactNode;
    disabled?: boolean
}

const Category = (props: ICategoryProps) => {
    const platform = usePlatform();

    return (
        <div
            {...props}
            className={classNames(
                props.className,
                style.category,
                { [style.mobile]: platform === 'mobile' },
                { [style.active]: !props.disabled },
            )}
        >{ props.children }</div>
    )
}

export default Category