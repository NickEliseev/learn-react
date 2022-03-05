import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router"


type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}



const usePostComment = (id: string) => {
    const [comments, setComments] = useState<Comment[]>([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => res.json())
            .then(setComments)
    }, [])
    return comments
}


export const Comment = () => {

    const { id } = useParams();
    const comments = usePostComment(id as string);

    return (
        <Box marginLeft="24px">
            {comments.map(({ postId, name, email, body, id }) =>
                <Box padding="6px" border="2px solid black" borderRadius="25px" marginTop="4" maxWidth="75%">
                    <Box fontWeight="bold">Comment №{id}</Box>
                    <Box fontStyle="italic">To post №: {postId}</Box>
                    <Box>{body}</Box>
                    <Box display="flex" justifyContent="flex-end" marginTop="4px">Author: {name}</Box>
                    <Box display="flex" justifyContent="flex-end">Email: {email}</Box>
                </Box>
            )}
        </Box>

    )
}