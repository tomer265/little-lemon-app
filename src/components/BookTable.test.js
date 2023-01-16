import { render, screen } from "@testing-library/react";
import BookTable from './BookTable';

test('Renders the BookingForm heading', () => {
    render(<BookTable />);
    const headingElement = screen.getByText("Book a table");
    expect(headingElement).toBeInTheDocument();
})