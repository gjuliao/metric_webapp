import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../Home';
import store from '../../../redux/store';

test('It should render element with title header', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const headingElement = screen.getByTestId('header');
  expect(headingElement).toBeInTheDocument();
});

test('It should render element with placeholder text', async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const headingElement = screen.getByText('Search stats by country.');
  expect(headingElement).toBeInTheDocument();
});
