import _users from './users.json'
import _interests from './interests.json'

export const getUsers = () => {
    _users.forEach((user) => {
        user.followerCount = _users.filter((item) => {
            return item.following.includes(user.id)
        }).length
    })



    const sortedList = _users.sort((firstUser, secondUser) => firstUser.followerCount - secondUser.followerCount)
    return {
        type: "USERS_LIST",
        payload: sortedList
    }
}

export const getInterests = () => {
    

    return {
        type: "INTERESTS_LIST",
        payload: _interests
    }
}

// export const deleteUser(i)

