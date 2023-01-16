import { render, screen } from '@testing-library/react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

test('Check that there is a call to local storage', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
    Object.setPrototypeOf(window.localStorage.getItem, jest.fn());
    render(
        <BrowserRouter>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    );
    expect(localStorage.getItem).toBeCalledWith('formData');
})