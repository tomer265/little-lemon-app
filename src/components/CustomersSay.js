import testimonials from '../services/testimonials';
import { Box, Card, Image, Text, Center } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';


const CustomersSay = () => {

    return (
        <>
            <Card mt={20} backgroundColor='white'>
                <Center><Text fontWeight={700} fontSize='3xl'> Testimonials</Text></Center>
                <Box display={{ base: 'block', lg: 'flex' }} pt='3vh' pb='5vh' pr='10vw' pl='10vw'>
                    {testimonials.map(t => {
                        return (
                            <Box key={t.userName} p={2} m={2} maxH='210px' borderRadius={15} backgroundColor='papayawhip' textAlign='center' justifyContent='center' w={{ base: '100%', lg: '25%' }}>
                                <Text>Rating: {t.rating} <StarIcon color='#F4CE14'></StarIcon></Text>
                                <Center>
                                    <Image borderRadius={30} src={t.userImage} w='30%' />
                                    <Text ml={2} fontWeight='bold'>{t.userName}</Text>
                                </Center>
                                <Center>
                                    <Text>{t.review}</Text>
                                </Center>
                            </Box>
                        )
                    })}
                </Box>
            </Card>
        </>
    );
}

export default CustomersSay;