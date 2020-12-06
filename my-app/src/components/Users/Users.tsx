import React, {useEffect} from "react";
import User from "./User/User";
import classes from "./Users.module.scss"
import Pagination from "../common/Pagination/Pagination";
import {usersType} from "../../types/types";
import UsersSearchForm from "./Search-form/Search-form";
import {filterType, getFollow, getUnfollow, requestUsers} from "../../redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFilterObj,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getPortionSize,
    getTotalCount, getUsers
} from "../../redux/selectors/users-selector";
import Preloader from "../common/Preloader/Preloader";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";


const Users: React.FC<PropsType> = () => {

    const totalItemsCount = useSelector(getTotalCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const followingInProgress = useSelector(getFollowingInProgress)
    const portionSize = useSelector(getPortionSize)
    const users = useSelector(getUsers)
    const filter = useSelector(getFilterObj)
    const isFetching = useSelector(getIsFetching)

    const history = useHistory();
    const dispatch = useDispatch();



    useEffect(() => {

        const parsed = queryString.parse(history.location.search.substr(1)) as {term: string, page: string, friend: string}

        let actualPage = currentPage
        let actualFilter = filter

        if (parsed.page) actualPage = +parsed.page
        if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string}
        if (parsed.friend) actualFilter = { ...actualFilter, friend: parsed.friend === "null" ? null : parsed.friend === "true" ? true : false}

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
       history.push({
               pathname: "/users",
               search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
           }
       )
   }, [filter, currentPage])

    const pageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const filterChanged = (filter: filterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const handleGetFollow = (userId: number) => {
        dispatch(getFollow(userId))
    }
    const handleGetUnfollow = (userId: number) => {
        dispatch(getUnfollow(userId))
    }

    let usersArray = users.map((user: usersType) => {
        return (
            <User
                key={user.id}
                user={user}
                getFollow={handleGetFollow}
                getUnfollow={handleGetUnfollow}
                followingInProgress={followingInProgress}
            />
        )
    })

    return (
        <div className={classes.usersComponent}>
            <UsersSearchForm
                filterChanged={filterChanged}
            />
            <Pagination
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}
                pageChanged={pageChanged}
                currentPage={currentPage}
                portionSize={portionSize}
            />
            {
                isFetching
                    ? <Preloader/>
                    : <ul className={classes.users__list}>
                        {usersArray}
                    </ul>
            }

        </div>
    )
}

export default Users


type PropsType = {}
