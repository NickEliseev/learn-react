import { Box, Skeleton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { isTypeLiteralNode } from "typescript"
import { Comment } from "./Comment"
import "../styles/main.scss"



type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}


const useUserPost = (postId: string) => {
    const [post, setPost] = useState<Post>({} as Post)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then(setPost)
    }, [])
    return post
}

export const UserPost = () => {

    const { id: postId } = useParams();
    const { userId, title, body } = useUserPost(postId as string);

    const navigate = useNavigate();
    const handleClick = (userId: number) => {
        navigate(`/posts/${userId}`)
    }

    const commentClick = (postId: string) => {
        navigate(`/post/${postId}/comments`)
    }
    console.log(body, title)
    return (
        <Skeleton isLoaded={!!title} >
            <Box>
                <Box my="3" border="2px solid grey" padding='2' borderRadius="md" width='50%' marginLeft='25'>
                    <strong>About: </strong> {title}
                    <Box>
                        {body}
                        <Box display='flex' justifyContent='end' onClick={() => handleClick(userId)}>
                            Back to posts. Author ID: {userId}
                        </Box>
                    </Box>
                    <Box onClick={() => commentClick(postId as string)}>
                        Comments
                    </Box>
                </Box>
            </Box>
            <Comment />
        </Skeleton>
    )
}