import React, {ChangeEvent, useState} from "react";
import Text from "../Typography/Text/Text";
import styles from './Input.module.scss';
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = (props: IInputProps) => {
    const platform = usePlatform();

    const [value, setValue] = useState(props.value)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        const fakeEvent = {
            target: { value: newValue },
        } as ChangeEvent<HTMLInputElement>;
        props.onChange && props.onChange(fakeEvent);
    };

    const handleClearClick = () => {
        handleInputChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
    };

    return (
        <div>
            {props.label && (
                <Text weight={'semi-bold'} style={{ marginBottom: "10px" }}>{ props.label }</Text>
            )}
            <div className={styles.inputWrapper}>
                <input className={classNames(
                    styles.input,
                    { [styles.mobile]: platform === 'mobile' }
                )} { ...props } value={value} onChange={handleInputChange}/>
                <div
                    className={styles.clear}
                    onClick={handleClearClick}
                ><Icon i={faXmark} size={16}/></div>
            </div>
        </div>
    )
}

export default Input
