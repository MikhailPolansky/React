import { useEffect, useState } from "react"
import {getUsers} from '../../api/users.api'
import { useNavigate } from "react-router-dom"

export function AllUsers() {

    const [users, setUsers] = useState([])
    const [isLoad, setLoad] = useState(false)

    const navigation = useNavigate()

    useEffect (() =>{
        if (!users.length) {
            setLoad(true)
            getUsers().then(users => setUsers(users)).finally(() => setLoad(false))
        }
    },[])

    const userDatails = (id) => {
        navigation('/users/' + id)
    }

    return (
        <div>
        USERS
        <div>
            {(!!users.length && !isLoad) && <>
            {
                users.map(user => (
                    <div key = {user.id}>
                        <b>{user.id} </b> - {user.name} - {user.email}
                        <button onClick={() => userDatails(user.id)}>user details</button>
                    </div>
                ))
            }
            </>}
        </div>
            <h2>
                {isLoad && 'LOADING DATA'}
            </h2>
        </div>
    )
}