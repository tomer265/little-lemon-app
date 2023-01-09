import testimonials from '../services/testimonials';
import { Box, Card, Image, Text, Button, Spacer, Center, Flex } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';


const CustomersSay = () => {

    return (
        <>
            <Card mt={20} backgroundColor='white'>
                <Center><Text fontWeight={700} fontSize='3xl'> Testimonials</Text></Center>
                <Flex pt='3vh' pb='5vh' pr='10vw' pl='10vw' h='375px'>
                    {testimonials.map(t => {
                        return (
                            <Box textAlign='center' justifyContent='center' w='25%'>
                                <Text>Rating: {t.rating} <StarIcon></StarIcon></Text>
                                <Center>
                                    <Image src={t.userImage} w='30%' />
                                    <Text>{t.userName}</Text>
                                </Center>
                                <Text maxW='75%'>{t.review}</Text>
                            </Box>
                        )
                    })}
                </Flex>
            </Card>
        </>
    );
}

export default CustomersSay;