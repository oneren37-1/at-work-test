import React from 'react'
import style from './Card.module.scss'
import Headline from "../Typography/Headline/Headline";
import Text from "../Typography/Text/Text";
import Caption from "../Typography/Caption/Caption";
import Icon from "../Icon/Icon";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {usePlatform} from "../../app/hooks";

export interface ICardProps {
    username: string;
    avatar: string;
    company: string;
    location: string;
    disabled?: boolean;
}

const Card = (props: ICardProps) => {
    const platform = usePlatform();

    return (
        <div className={classNames(
            style.card,
            { [style.mobile]: ['mobile', 'pad'].includes(platform) },
            { [style.disabled]: props.disabled }
        )}>
            <img className={style.avatar} src={props.avatar} alt={props.username} />
            <div className={style.contentWrapper}>
                <div className={style.info}>
                    <div className={style.content}>
                        <Headline className={style.username}>{props.username}</Headline>
                        <Text>{props.company}</Text>
                    </div>
                    <div className={style.footer}>
                        <Caption className={style.location}>{props.location}</Caption>
                    </div>
                </div>
                <div className={style.menu}>
                    <Icon i={faEllipsisVertical}/>
                </div>
            </div>
        </div>
    )
}

export default Card
