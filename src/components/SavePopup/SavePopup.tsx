import React from 'react'
import styles from "./SavePopup.module.scss";
import Icon from "../Icon/Icon";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import icon from './icon.svg'
import Text from '../Typography/Text/Text'
import classNames from "classnames";

export interface ISavePopupProps {
    show: boolean
    onHide: () => void
}

const SavePopup = (props: ISavePopupProps) => {
    return (
        <div className={classNames(
            styles.popupWrapper,
            { [styles.hidden]: !props.show }
        )}>
            <div className={styles.popup}>
                <div className={styles.close} onClick={() => props.onHide()}>
                    <Icon i={faXmark}></Icon>
                </div>
                <div className={styles.icom}><img src={icon} alt="ok"/></div>
                <Text>Изменения сохранены!</Text>
            </div>
        </div>
    )
}

export default SavePopup