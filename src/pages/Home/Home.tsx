import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {fetchUsers} from "../../redux/UsersSlice";
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

    useEffect(() => {
        if (!users) dispatch(fetchUsers())
    }, [users])

    // Авторизация не подразумевается, поэтому в шапке просто литеральные значения
    const loggedInUser = {
        username: "Ivan1234",
        avatar: "https://s3-alpha-sig.figma.com/img/4d47/8bb4/c4df08734f93921230736e92b21788b4?Expires=1699228800&Signature=kLX9Bc5Nx4797G3wkRf1ANUssBLk7KBauB1Qgh~vlSRncgGbu7d2lkKMkHELvckNp4dv0hDwQraf2Gw1rC7UAXAFjWPS9JGGKAzXPdxL26xlFGOph94larjoBXAWqmjWi9k5WwAZC7DOAb7-npVco5u2VP83Xl6hxD~UndS9tnHPcF-hECMwoOKCafGMkTFRe7fmhHxqxtIeExl-7Xek~kpw4d8RxXDU~82JeMzP9L4IWR1q-7kdmLRxdEZ7zIB1-k70b07sGjVknYSlCjjGg3BBTccNui2Q5NE-njtOv7q62zlJk4YFvoKVrSJWRMuz9hI1XzqpO-rhFoaVOPHjIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    }

    return (
        <PageLayout header={loggedInUser}>
            {loadingStatus === 'loading' && (<Headline>Данные загружаются</Headline>)}
            {error && (<Headline>{error}</Headline>)}

            {loadingStatus === 'loaded' && (
                <>
                    <Category className={styles.category} disabled={!(usersActive && usersActive.length)}>
                        <Title>Активные</Title>
                    </Category>

                    <div className={styles.grid}>
                        {(usersActive && usersActive.length)
                            ? usersActive.map(user => (<Card {...user} location={user.city} />))
                            : <Text>Нет активных пользователей</Text> }
                    </div>

                    <Category className={styles.category} disabled={!(usersArchive && usersArchive.length)}>
                        <Title>Архив</Title>
                    </Category>
                    {(usersArchive && usersArchive.length)
                        ? usersArchive.map(user => (<Card {...user} location={user.city} disabled={true}/>))
                        : <Text>Нет пользователей в архиве</Text> }
                </>
            )}
        </PageLayout>
    )
}

export default Home