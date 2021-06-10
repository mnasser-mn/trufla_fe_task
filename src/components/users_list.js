import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInterests, getUsers } from "../actions";
import User from "./user";

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)
    const [state, setState] = useState(0)
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getInterests())
    }, [])

    const deleteUser = (user) => {
        console.log(user)
        let index = users.list.indexOf(user)
        console.log(index)
        users.list.splice(index, 1)
        console.log(users.list)
        console.log(users.list)
        setState(users.list.length)
    }
    const renderUsers = (users) => {
        if (users.list) {
            if (users.list.length > 0) {
                return users.list.map((user) => {
                    if (user.interests)
                        user.interests = user.interests.map((interestId) => {
                            return users.userInterests.find((item) => item.id === interestId)
                        })
                    return <User userInfo={user} deleteUser={deleteUser} key={user.id} />
                })
            }
            return <p>
                Users is empty!
        </p>
        }
        return <p>
            Users is loading...
    </p>
    }

    return (
        <Fragment>
            <div className="col-12 ">
                <h2 className="text-center m-2 text-white" style={{ fontSize: '60px' }}>UsersList</h2>

                {renderUsers(users)}
            </div>
        </Fragment>
    )
}
export default UsersList;