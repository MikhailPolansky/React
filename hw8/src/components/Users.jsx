import { useEffect, useState } from 'react'
import {getUsers, getUserById} from '../api/users.api'


export function Users () {

    const [users, setUsers] = useState([])
    const [isLoad, setLoad] = useState(false)

    const [selectedUserId, setSelectedUserId] = useState(null); 
    const [selectedUserDetails, setSelectedUserDetails] = useState(null); 

    

    useEffect(() => {
        if (!users.length) {
            setLoad(true)
            getUsers().then(data => setUsers(data)).finally(() => setLoad(false))
        }
    },[users])

    const handleUserClick = (id) => {
        if (id === selectedUserId) {
            setSelectedUserId(null);
            setSelectedUserDetails(null);
        } else {
            setLoad(true);
            getUserById(id).then(data => {
                setSelectedUserId(id);
                setSelectedUserDetails(data);
            }).finally(() => setLoad(false));
        }
    };

return (
    <div>
        <h2>Users</h2>
        <div>
            {
                !!users.length && users.map(user => (
                    <div key={user.id}>
                        <div onClick={() => handleUserClick(user.id)} className='cursor'>
                            <b>{user.id}</b> - {user.name}
                        </div>

                        {selectedUserId === user.id && selectedUserDetails && (
                            <div>
                                <p>
                                    id: {selectedUserDetails.id};
                                    <br />
                                    name: {selectedUserDetails.name};
                                    <br />
                                    email: {selectedUserDetails.email};
                                    <br />
                                    phone: {selectedUserDetails.phone}
                                </p>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    </div>
);
}



 