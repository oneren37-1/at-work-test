import React, {forwardRef, useRef} from "react";
import Text from "../Typography/Text/Text";
import styles from './Input.module.scss';
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef((props: IInputProps, ref) => {
    const platform = usePlatform();
    const inpRef = useRef<HTMLInputElement|null>(null)

    return (
        <div
            className={props.className}
            onMouseDownCapture={(e) => {
                inpRef.current?.focus()
            }}
        >
            {props.label && (
                <Text className={styles.label} weight={'semi-bold'}>{ props.label }</Text>
            )}
            <div className={styles.inputWrapper}>
                <input
                   { ...props }
                   className={classNames(
                       styles.input,
                       { [styles.mobile]: platform === 'mobile' }
                   )}
                   ref={(el: HTMLInputElement) => {
                       // @ts-ignore
                       ref(el);
                       inpRef.current = el
                   }}
                />
                <div
                    className={styles.clear}
                    onMouseDown={() => {
                        if (inpRef.current) {
                            inpRef.current.value = ""
                            inpRef.current.focus()
                        }
                    }}
                ><Icon i={faXmark} size={16}/></div>
            </div>
        </div>
    )
})

export default Input
