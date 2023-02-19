import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])
    return (
        <div data-testid='user-page'>
            {users.map(user => <Link
                role='link'
                to={`/users/${user.id}`}
                key={user.id}
                data-testid={`user-item-${user.id}`}
            >
                {user.name}
            </Link>)}
        </div>
    );
};

export default Users;