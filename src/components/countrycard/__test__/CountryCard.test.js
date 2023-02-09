import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CountryCard from '../CountryCard';
import store from '../../../redux/store';

test('It should render element with text Learn More', async () => {
  render(
    <Provider store={store}>
      <CountryCard />
    </Provider>,
  );
  const headingElement = screen.getByText('Learn More');
  expect(headingElement).toBeInTheDocument();
});

test('It should render props text', async () => {
  render(
    <Provider store={store}>
      <CountryCard name="Spain" />
    </Provider>,
  );
  const headingElement = screen.getByText('Spain');
  expect(headingElement).toBeInTheDocument();
});
