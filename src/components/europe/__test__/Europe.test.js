import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Europe from '../Europe';
import store from '../../../redux/store';

const Mock = () => (
  <Provider store={store}>
    <Europe />
  </Provider>
);

test('It should render same text', () => {
  render(<Mock />);
  const paraElement = screen.getByText(/COUNTRIES IN EUROPE./i);
  expect(paraElement).toBeInTheDocument();
});
