import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SoloCountry from '../SoloCountry';
import store from '../../../redux/store';

test('It should render element with text Flag Meaning', async () => {
  render(
    <Provider store={store}>
      <SoloCountry />
    </Provider>,
  );
  const headingElement = screen.getByText('Flag Meaning');
  expect(headingElement).toBeInTheDocument();
});
