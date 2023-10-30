import React, {ReactNode} from 'react'
import Header, {IHeaderProps} from "../Header/Header";
import styles from './PageLayout.module.scss'
import classNames from "classnames";

export interface IPageLayoutProps {
    header?: IHeaderProps,
    children: ReactNode
}

const PageLayout = (props:IPageLayoutProps) => {

    // Авторизация не подразумевается, поэтому в шапке просто литеральные значения
    const header = props.header ? props.header : {
        username: "Ivan1234",
        avatar: "https://s3-alpha-sig.figma.com/img/4d47/8bb4/c4df08734f93921230736e92b21788b4?Expires=1699228800&Signature=kLX9Bc5Nx4797G3wkRf1ANUssBLk7KBauB1Qgh~vlSRncgGbu7d2lkKMkHELvckNp4dv0hDwQraf2Gw1rC7UAXAFjWPS9JGGKAzXPdxL26xlFGOph94larjoBXAWqmjWi9k5WwAZC7DOAb7-npVco5u2VP83Xl6hxD~UndS9tnHPcF-hECMwoOKCafGMkTFRe7fmhHxqxtIeExl-7Xek~kpw4d8RxXDU~82JeMzP9L4IWR1q-7kdmLRxdEZ7zIB1-k70b07sGjVknYSlCjjGg3BBTccNui2Q5NE-njtOv7q62zlJk4YFvoKVrSJWRMuz9hI1XzqpO-rhFoaVOPHjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    }

    return (
        <>
            <div className={styles.wrapper}>
                <Header {...header}/>
                <main className={classNames('container', styles.main)}>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default PageLayout