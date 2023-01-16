import { Card, Heading, Text } from "@chakra-ui/react";

const ThankYouBooking = (props) => {
    const formData = props.formData ?? JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        formData.date = new Date(formData.date)
    }
    return (
        <>
            {formData &&
                <Card mt={20}>
                    <Heading>Thank you for booking!</Heading>
                    <Text
                        fontSize={25}
                        mt={40}
                    >
                        Your table for {formData.guests} guests would be ready at {formData.time} on {formData.date.getDate()}/{formData.date.getMonth() + 1}/{formData.date.getFullYear()}
                    </Text>
                </Card>
            }
            {!formData &&
                <Card mt={20}>
                    <Heading>No booking info found</Heading>
                </Card>
            }
        </>
    )
}

export default ThankYouBooking;