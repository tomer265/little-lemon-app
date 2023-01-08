import { Box, Button, Heading, Stack, Flex, Spacer, Image, Text } from "@chakra-ui/react";
import specials from "../services/specials";


const Specials = () => {
    return (
        <Box mt='2em' pr={{ base: '0', lg: '10vw' }} pl={{ base: '0', lg: '10vw' }}>
            <Flex>
                <Heading size={{ base: 'md', lg: '2xl' }}>This week's specials!</Heading>
                <Spacer />
                <Button float='right' size='lg' backgroundColor='#F4CE14'>Order Online</Button>
            </Flex>
            <Stack direction={{ base: 'column', lg: 'row' }}>
                {specials.map((s, i) => {
                    return (
                        <Box w='33%' key={i}>
                            <Image borderTopRadius={15} src={s.image} />
                            <Flex backgroundColor='#C1C1C1'>
                                <Heading size='sm' fontWeight='bold'>{s.name}</Heading>
                                <Spacer />
                                <Heading size='sm' color='#FF5924' fontWeight='bold'>{s.price}</Heading>
                            </Flex>
                            <Text backgroundColor='#C1C1C1'>{s.desc}</Text>
                        </Box>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default Specials;