import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const useUserPosts = (id: string) => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((res) => res.json())
            .then(setPosts)
    }, [])
    return posts
}

export const UserPosts = () => {

    const { userId } = useParams();
    const posts = useUserPosts(userId as string)

    const navigate = useNavigate();
    const handleClick = (id: number) => {
        navigate(`/post/${id}`)
    }

    return (
        <Box width="40%" margin="auto">
            {posts.map(({ title, id, userId }) =>
                <Box my="3" border="2px solid grey" padding='2' borderRadius="md" onClick={() => handleClick(id)}>
                    Post title: {title}
                    <Box>
                        <strong>Post №: {id}</strong>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" textDecoration="gold">
                        User ID: {userId}
                    </Box>
                </Box>
            )}
        </Box>
    )
} 