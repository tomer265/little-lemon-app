import { Box, Card, Image, Text, Button, Spacer } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import eclare from '../assets/fish_eclair_big.png'

const Hero = () => {

    const history = useHistory();
    const handleReserveATable = () => {
        history.push("/booking");
    }

    return (
        <Card mt={20} backgroundColor='#495E57'>
            <Box pt='3vh' pb='5vh' pr='10vw' pl='10vw' h='375px'>
                <Box display={{ base: 'block', lg: 'flex' }}>
                    <Box w={{ base: '100%', lg: '50%' }} pr='0.5em'>
                        <Text textColor='#F4CE14' fontSize={{ lg: '64px', base: '26px' }}>Little Lemon</Text>
                        <Text textColor='white' fontSize={{ lg: '32px', base: '13px' }}>Chicago</Text>
                        <Text textColor='white' pt='0.2em' fontSize={{ lg: '29px', base: '13px' }}>We offer fresh and light dishes,
                            using ingredients from mediterranean cuisins.</Text>
                        <Button onClick={handleReserveATable} size='lg' backgroundColor='#F4CE14' mt='2em'>Reserve A Table</Button>
                    </Box>
                    <Spacer />
                    <Box w={{ base: '100%', lg: '50%' }} pl={{ base: '0', lg: '11em' }} pt={{ base: '1em', lg: '0' }}>
                        <Image src={eclare} />
                    </Box>
                </Box>
            </Box>
        </Card >
    )
}

export default Hero;