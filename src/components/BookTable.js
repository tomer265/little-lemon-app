import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Heading,
    Select,
    Button,
    Image,
    Flex,
} from '@chakra-ui/react'
import pasta from '../assets/pasta_big.jpg';
import { useState } from 'react'
import DatePicker from 'react-datepicker';
import './BookTable.css'
import 'react-datepicker/dist/react-datepicker.css';



const BookTable = () => {

    const [guests, setGuests] = useState(1)
    const handleNumberInputChange = (e) => {
        setGuests(e.target.value);
    }
    const isGuestsError = 10 < guests || guests < 1;

    const [date, setDate] = useState(new Date())
    const handleDateInputChange = (e) => {
        console.log(e)
        setDate(e);
    }
    const formattedDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(isGuestsError)
        if (isGuestsError) {
            return;
        }
        return;
    }

    return (
        <Box pl='12.5%' mt={20}>
            <Flex display={{ base: 'block', lg: 'flex' }}>
                <Box mb={5} display={{ base: 'block', lg: 'none' }}>
                    <Image src={pasta} borderRadius={30} />
                </Box>
                <Box maxW={{ base: '100%', lg: '50%' }}>
                    <Heading mb={10}>Book a table</Heading>
                    <form>
                        <FormControl mb={12} maxW={200}>
                            <FormLabel>Choose date</FormLabel>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                className='date-picker'
                                minDate={new Date()}
                                onChange={handleDateInputChange}
                                value={formattedDate}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                        </FormControl>
                        <FormControl mb={12} maxW={200}>
                            <FormLabel>Choose Time</FormLabel>
                            <Select id="res-time ">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={isGuestsError} mb={12} maxW={200}>
                            <FormLabel>Number of guests</FormLabel>
                            <Input type="number" placeholder="1" id="guests" onChange={handleNumberInputChange} />
                            <FormErrorMessage>Number of guests must be between 1 and 10.</FormErrorMessage>
                        </FormControl>
                        <FormControl mb={12} maxW={200}>
                            <FormLabel>Occasion</FormLabel>
                            <Select id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={12} maxW={200}>
                            <Button onClick={handleSubmit} backgroundColor='#F4CE14' type="submit">Make Your reservation</Button>
                        </FormControl>
                    </form>
                </Box>
                <Box h='80%' pl='12.5%' w='80%' display={{ base: 'none', lg: 'flex' }}>
                    <Image borderRadius={30} src={pasta} />
                </Box>
            </Flex>
        </Box>
    )
}

export default BookTable;