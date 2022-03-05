import { Badge, Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export type UserHardCodeProps = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
}



export const UserItem = ({
    id,
    name,
    username,
    phone,
    email,
    website
}: UserHardCodeProps) => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={handleClick}>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {username}
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        Name: {name} &bull; id: {id}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {email}
                </Box>

                <Box>
                    {phone}
                </Box>
                <Box>
                    {website}
                </Box>
            </Box>
        </Box>
    )
}