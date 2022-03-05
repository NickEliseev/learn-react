import { Box, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { UserItem } from "../Components/UserItem"
import { useUsers } from "../Hooks/useUsers"

export const UsersPage = () => {

    const users = useUsers();

    console.log(users)
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
            {
                users.map((user) =>
                    <UserItem {...user} />)
            }
        </Grid>
    )
}