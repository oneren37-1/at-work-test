import React from 'react'
import styles from './Header.module.scss'
import classNames from "classnames";
import logo from './logo.svg'
import Icon from "../Icon/Icon";
import {faBell, faHeart} from "@fortawesome/free-solid-svg-icons";
import Text from '../Typography/Text/Text'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePlatform} from "../../app/hooks";

export interface IHeaderProps {
    avatar: string
    username: string
}

const Header = (props: IHeaderProps) => {
    const platform = usePlatform();

    return (
        <div className={styles.wrapper}>
            <header className={classNames(
                'container',
                styles.header,
                { [styles.mobile]: platform === 'mobile' }
            )}>
                <a className={styles.logo}><img src={logo} alt="logo" /></a>
                <nav className={styles.nav}>
                    <div className={styles.icons}>
                        <Icon i={faHeart} size={16} />
                        <Icon i={faBell} size={16} />
                    </div>
                    <div className={styles.user}>
                        <img className={styles.avatar} src={props.avatar} alt="avatar"/>
                        <Text className={styles.username}>{props.username}</Text>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
