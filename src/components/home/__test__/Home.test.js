import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Home';

test('It should render element with title header', async () => {
  render(
    <Provider>
      <Home />
    </Provider>,
  );
  const headingElement = screen.getByTestId('header');
  expect(headingElement).toBeInTheDocument();
});
