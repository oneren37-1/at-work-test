import React, {useEffect, useState} from 'react'
import PageLayout from "../../components/Layout/PageLayout";
import Headline from "../../components/Typography/Headline/Headline";
import Icon from "../../components/Icon/Icon";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import styles from './Edit.module.scss'
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import Category from "../../components/Category/Category";
import Text from "../../components/Typography/Text/Text";
import {useForm} from "react-hook-form";
import Title from "../../components/Typography/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useAppDispatch, useAppSelector, usePlatform} from "../../app/hooks";
import classNames from "classnames";
import {updatePersonalInfo} from "../../redux/UsersSlice";
import SavePopup from "../../components/SavePopup/SavePopup";

const Edit = (props: any) => {
    const location = useLocation()
    const platform = usePlatform()
    const navigate = useNavigate();

    const params = useParams();

    const user = useAppSelector((state) => {
        return state.users.users?.find(u => u.id.toString() === params.userId)
    })

    useEffect(() => {
        !user && navigate('/')
    }, [user, navigate])

    return (
        <PageLayout>
            <Link to={'/'} className={styles.back}>
                <Headline><Icon i={faArrowLeft}/> Назад</Headline>
            </Link>
            <div className={classNames(styles.main, { [styles.mobile]: platform === 'mobile' })}>
                <div className={styles.sidebar}>
                    <div className={styles.avatar}><img src={"https://thispersondoesnotexist.com/"} alt="avatar"/></div>
                    <nav>
                        <Link className={styles.cat} to={'profile/'+params.userId}>
                            <Category disabled={location.pathname!==`/edit/profile/${params.userId}`}><Text>Данные профиля</Text></Category>
                        </Link>
                        <Link className={styles.cat} to={'workspace/'+params.userId}>
                            <Category disabled={location.pathname!==`/edit/workspace/${params.userId}`}>
                                <Text>Рабочеее пространство</Text>
                            </Category>
                        </Link>
                        <Link className={styles.cat} to={'privacy/'+params.userId}>
                            <Category disabled={location.pathname!==`/edit/privacy/${params.userId}`}><Text>Приватность</Text></Category>
                        </Link>
                        <Link className={styles.cat} to={'security/'+params.userId}>
                            <Category disabled={location.pathname!==`/edit/security/${params.userId}`}><Text>Безопасность</Text></Category>
                        </Link>
                    </nav>
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </PageLayout>
    )
}

type FormData = {
    name: string;
    username: string;
    email: string;
    city: string;
    tel: string;
    company: string;
};

export const UserData = () => {
    const platform = usePlatform();
    const params = useParams();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => {
        return state.users.users?.find(u => u.id.toString() === params.userId)
    })

    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const onSubmit = (data: any) => {
        dispatch(updatePersonalInfo({id: params.userId, ...data}))
        setIsPopupShow(true)
    };

    const [isPopupShow, setIsPopupShow] = useState(false)

    if (!user) {
        return (<div>not found</div>);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classNames({ [styles.mobile]: platform === 'mobile' })}
        >
            <Category disabled={false}><Title>Данные профиля</Title></Category>
            <Input
                className={styles.formItem}
                label={'Имя'}
                {...register("name", { required: true, value: user.name })}
            />
            <Input
                className={styles.formItem}
                label={'Никнейм'}
                {...register("username", { required: true, value: user.username })}
            />
            <Input
                className={styles.formItem}
                label={'Почта'}
                {...register("email", { required: true, value: user.email })}
                type={'email'}
            />
            <Input
                className={styles.formItem}
                label={'Город'}
                {...register("city", { required: true, value: user.city })}
            />
            <Input
                className={styles.formItem}
                label={'Телефон'}
                {...register("tel", { required: true, value: user.phone })}
                type={'tel'}
            />
            <Input
                className={styles.formItem}
                label={'Название компании'}
                {...register("company", { required: true, value: user.company })}
            />

            <Button type={'submit'} className={styles.formSubmit}>Сохранить</Button>

            <SavePopup
                show={isPopupShow}
                onHide={() => setIsPopupShow(false)}
            />
        </form>
    )
}

export const Workspace = () => {
    return (
        <div>
            <h1>workspace пока не реализован</h1>
        </div>
    )
}

export const Privacy = () => {
    return (
        <div>
            <h1>Privacy пока не реализован</h1>
        </div>
    )
}

export const Security = () => {
    return (
        <div>
            <h1>Security пока не реализован</h1>
        </div>
    )
}

export default Edit