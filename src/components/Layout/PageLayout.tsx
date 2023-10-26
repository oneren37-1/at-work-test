import React, {ReactNode} from 'react'
import Header, {IHeaderProps} from "../Header/Header";
import styles from './PageLayout.module.scss'
import classNames from "classnames";

export interface IPageLayoutProps {
    header: IHeaderProps,
    children: ReactNode
}

const PageLayout = (props:IPageLayoutProps) => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header {...props.header}/>
                <main className={classNames('container', styles.main)}>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default PageLayout