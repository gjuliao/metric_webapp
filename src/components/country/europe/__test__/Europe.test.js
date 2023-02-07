import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Europe from '../Europe';

const Mock = () => (
  <BrowserRouter>
    <Europe />
  </BrowserRouter>
);

// test('It should render same numer', () => {
//   render(<Mock />);
//   const paraElement = screen.getByText(/Europe has./i);
//   expect(paraElement).toBeInTheDocument();
// });
