import React from 'react'
import styles from './Icon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";

export interface IIconProps {
    i: IconDefinition
    size?: number
    onClick?: () => void
}

const Icon = (props: IIconProps) => {
    const platform = usePlatform()

    return (
        <FontAwesomeIcon
            onClick={props.onClick}
            className={classNames(
                styles.icon,
                { [styles.mobile]: platform === 'mobile' }
            )}
            icon={props.i}
            style={props.size ? {
                fontSize: `${props.size}px`,
                fontWeight: 100
            } : undefined}
        />
    )
}

export default Icon