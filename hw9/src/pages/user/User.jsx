import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../../api/users.api"

export function User () {

    const [user, setUser] = useState({})
    const obj = useParams()

    useEffect(() => {
        console.log(obj);
        if (!user.id) {
            getUserById(obj.id).then(user => setUser(user)).finally(() => console.log(user)
            )
        }
    },[]) 

    return (
        <div>
            USER

            <div>
                {user && <div>{ JSON.stringify(user)}</div>}
            </div>
        </div>
    )
}