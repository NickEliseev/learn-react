import { useEffect, useState } from "react"

export const useUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(requestedUsers => setUsers(requestedUsers))
    }, [])

    return users
}