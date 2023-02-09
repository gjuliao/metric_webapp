import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Nav from '../Nav';
import store from '../../../redux/store';

test('It should render element with text COUNTRYPEDIA', async () => {
  render(
    <Provider store={store}>
      <Nav />
    </Provider>,
  );
  const headingElement = screen.getByText('COUNTRYPEDIA');
  expect(headingElement).toBeInTheDocument();
});
