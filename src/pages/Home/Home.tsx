import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector, usePlatform} from '../../app/hooks'
import {changeUserStatus, fetchUsers} from "../../redux/UsersSlice";
import PageLayout from "../../components/Layout/PageLayout";
import Headline from "../../components/Typography/Headline/Headline";
import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import Text from "../../components/Typography/Text/Text"
import styles from './Home.module.scss'
import Title from "../../components/Typography/Title/Title";

const Home = () => {
    const users = useAppSelector((state) => state.users.users)
    const usersActive = useAppSelector(
        (state) => state.users.users?.filter(el => el.status === 'active'))
    const usersArchive = useAppSelector(
        (state) => state.users.users?.filter(el => el.status === 'archive'))

    const loadingStatus = useAppSelector((state) => state.users.status)
    const error =  useAppSelector((state) => state.users.error)

    const dispatch = useAppDispatch()

    const platform = usePlatform();
    const [
        gridColsCount,
        setGridColsCount
    ] = useState(platform === 'desktop' ? 3 : 2);
    const [
        gridGap,
        setGridGap
    ] = useState<[number, number]>(platform === 'desktop' ? [40, 32] : [20, 20])

    useEffect(() => {
        setGridColsCount(platform === 'desktop' ? 3 : 2)
        setGridGap(platform === 'desktop' ? [32, 40] : [20, 20])
    }, [platform])


    useEffect(() => {
        if (!users) dispatch(fetchUsers())
    }, [users])

    return (
        <PageLayout>
            {loadingStatus === 'loading' && (<Headline>Данные загружаются</Headline>)}
            {error && (<Headline>{error}</Headline>)}

            {loadingStatus === 'loaded' && (
                <>
                    <Category className={styles.category} disabled={!(usersActive && usersActive.length)}>
                        <Title>Активные</Title>
                    </Category>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridColsCount}, 1fr)`,
                        gap: `${gridGap[0]}px ${gridGap[1]}px`
                    }}>
                        {(usersActive && usersActive.length) ? usersActive.map((user, i) => (
                            <Card
                                key={i}
                                {...user}
                                location={user.city}
                                onChangeUserStatus={(id, status) => {
                                    dispatch(changeUserStatus({id, status}))
                                }}
                            />
                        )) : (<Text>Нет активных пользователей</Text>)}
                    </div>

                    <Category className={styles.category} disabled={!(usersArchive && usersArchive.length)}>
                        <Title>Архив</Title>
                    </Category>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${gridColsCount}, 1fr)`,
                        gap: `${gridGap[0]}px ${gridGap[1]}px`
                    }}>
                        {(usersArchive && usersArchive.length) ? usersArchive.map((user, i) => (
                            <Card
                                key={i}
                                {...user}
                                location={user.city}
                                disabled={true}
                                onChangeUserStatus={(id, status) => {
                                    dispatch(changeUserStatus({id, status}))
                                }}
                            />
                        )) : (<Text>Нет пользователей в архиве</Text>)}
                    </div>
                </>
            )}
        </PageLayout>
    )
}

export default Home