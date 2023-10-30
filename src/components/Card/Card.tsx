import React, {useEffect, useRef, useState} from 'react'
import style from './Card.module.scss'
import Headline from "../Typography/Headline/Headline";
import Text from "../Typography/Text/Text";
import Caption from "../Typography/Caption/Caption";
import Icon from "../Icon/Icon";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";
import {Link} from "react-router-dom";

export interface ICardProps {
    id: string;
    username: string;
    avatar: string;
    company: string;
    location: string;
    status: string;
    disabled?: boolean;
    onChangeUserStatus?: (id: string, status: string) => void;
    onEdit?: (id: string) => void;
}

const Card = (props: ICardProps) => {
    const platform = usePlatform();
    const dropdownRef = useRef(null);
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const handleClickOutside = (event: Event) => {
        //@ts-ignore
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleStatusChange = (status: string) => {
        if (props.onChangeUserStatus) {
            props.onChangeUserStatus(props.id, status)
        }
        setDropdownIsOpen(false);
    }

    return (
        <div className={classNames(
            style.card,
            { [style.mobile]: platform === 'mobile' },
            { [style.disabled]: props.disabled }
        )}>
            <img className={style.avatar} src={props.avatar} alt={props.username} />
            <div className={style.contentWrapper}>
                <div className={style.info}>
                    <div className={style.content}>
                        <Headline className={style.username}>{props.username.replace(/_/, ' ')}</Headline>
                        <Text>{props.company}</Text>
                    </div>
                    <div className={style.footer}>
                        <Caption className={style.location}>{props.location}</Caption>
                    </div>
                </div>
                <div className={style.menu}>
                    <Icon i={faEllipsisVertical} onClick={() => setDropdownIsOpen(true)}/>
                    {dropdownIsOpen && (
                        <menu className={style.dropdown} ref={dropdownRef}>
                            <li
                                className={style.menuItem}
                                onClick={() => props.onEdit && props.onEdit(props.id)}
                            >
                                <Link to={`/edit/profile/${props.id}`} style={{textDecoration: "none"}}>
                                    <Text>Редактировать</Text>
                                </Link>
                            </li>
                            {props.status === 'active' && (
                                <li className={style.menuItem} onClick={() => handleStatusChange('archive')}>
                                    <Text>Архивировать</Text>
                                </li>
                            )}
                            {props.status === 'archive' && (
                                <li className={style.menuItem} onClick={() => handleStatusChange('active')}>
                                    <Text>Активировать</Text>
                                </li>
                            )}
                            <li className={style.menuItem} onClick={() => handleStatusChange('hidden')}>
                                <Text>Скрыть</Text>
                            </li>
                        </menu>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
