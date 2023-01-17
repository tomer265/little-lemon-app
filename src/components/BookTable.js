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
import { useHistory } from 'react-router-dom';



const BookTable = (props) => {
    const history = useHistory();
    const [guests, setGuests] = useState(1);
    const handleNumberInputChange = (e) => {
        setGuests(e.target.value);
    }
    const isGuestsError = 10 < guests || guests < 1;


    const [date, setDate] = useState(new Date())
    const handleDateInputChange = (e) => {
        setDate(e);
    }
    const formattedDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    const [time, setTime] = useState(null)
    const [hasTimeFocused, setHasTimeFocused] = useState(false);
    let isTimeError = (time === 'Select a time' || time === null);
    let isTimeErrorDisplay = isTimeError && hasTimeFocused === true;
    const handleTimeChange = (e) => {
        setTime(e.target.value);
        props.dispatchForm({type: 'timeChange', payload: e.target.value})
    }
    const handleTimeFieldFocus = () => {
        setHasTimeFocused(true);
    }

    const [occasion, setOccasion] = useState('Anniversary')
    const handleOccasionChange = (e) =>{
        setOccasion(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isGuestsError || isTimeError) {
            alert('please make sure all fields are correctly filled.');
            return;
        }
        props.dispatchForm({type: 'submitForm', payload: {date, time, guests, occasion}})
        history.push('/thank-you-booking')
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
                        <FormControl isInvalid={isTimeErrorDisplay} mb={12} maxW={200}>
                            <FormLabel>Choose Time</FormLabel>
                            <Select aria-required="true" id="res-time" onFocus={handleTimeFieldFocus} onChange={handleTimeChange}>
                                <option>Select a time</option>
                                {props && props.availableTimes && props.availableTimes.map(t => {
                                    return <option key={t}>{t}</option>
                                })}
                            </Select>
                            <FormErrorMessage>Time selection is required.</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={isGuestsError} mb={12} maxW={200}>
                            <FormLabel>Number of guests</FormLabel>
                            <Input aria-valuemin="1" aria-valuemax="10" aria-required="true" type="number" placeholder="1" id="guests" onChange={handleNumberInputChange} />
                            <FormErrorMessage>Number of guests must be between 1 and 10.</FormErrorMessage>
                        </FormControl>
                        <FormControl mb={12} maxW={200}>
                            <FormLabel>Occasion</FormLabel>
                            <Select onChange={handleOccasionChange} id="occasion">
                                <option>Anniversary</option>
                                <option>Birthday</option>
                            </Select>
                        </FormControl>
                        <FormControl mb={12} maxW={200}>
                            <Button aria-label='Make Your reservation' onClick={(e) => handleSubmit(e)} backgroundColor='#F4CE14' type="submit">Make Your reservation</Button>
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