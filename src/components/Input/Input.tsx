import React from "react";
import Text from "../Typography/Text/Text";
import styles from './Input.module.scss';
import clear from './clear.svg'
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = (props: IInputProps) => {
    const platform = usePlatform();

    return (
        <div>
            {props.label && (
                <Text text={ props.label } weight={'semi-bold'} style={{ marginBottom: "10px" }}/>
            )}
            <div className={styles.inputWrapper}>
                <input className={classNames(
                    styles.input,
                    { [styles.mobile]: platform == 'mobile' }
                )} { ...props }/>
                <div className={styles.clear}><img src={clear}  alt={'clear'}/></div>
            </div>
        </div>
    )
}

export default Input
