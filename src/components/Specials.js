import { Box, Button, Heading, Stack, Flex, Spacer, Image, Text, Link } from "@chakra-ui/react";
import specials from "../services/specials";
import bikeIcon from '../assets/bike_icon.png';


const Specials = () => {
    return (
        <Box mt={{base: '10em', lg: '6em'}} pr={{ base: '0', lg: '10vw' }} pl={{ base: '0', lg: '10vw' }}>
            <Flex>
                <Heading size={{ base: 'md', lg: '2xl' }}>This week's specials!</Heading>
                <Spacer />
                <Button float='right' size='lg' backgroundColor='#F4CE14'>Order Online</Button>
            </Flex>
            <Stack direction={{ base: 'column', lg: 'row' }} mt='2em'>
                {specials.map((s, i) => {
                    return (
                        <Box w={{ base: '100%', lg: '33%' }} key={i}>
                            <Image h='280px' w='-webkit-fill-available' borderTopRadius={15} src={s.image} />
                            <Flex pt={4} pl={2} pr={2} backgroundColor='#C1C1C1'>
                                <Heading size='sm' fontWeight='bold'>{s.name}</Heading>
                                <Spacer />
                                <Heading size='sm' color='#FF5924' fontWeight='bold'>{s.price}</Heading>
                            </Flex>
                            <Box minH='200px' backgroundColor='#C1C1C1'>
                                <Text pt={2} pl={4} pr={4}>{s.desc}</Text>
                            </Box>
                            <Link>
                                <Flex pb={1} justifyContent='center' bottom={0} borderBottomRadius='15px' backgroundColor='#C1C1C1'>
                                    <Text fontWeight='bold'>Order a delivery</Text>
                                    <Image pl={2} src={bikeIcon} />
                                </Flex>
                            </Link>
                        </Box>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default Specials;