import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from 'react-router';
import CountryCard from '../CountryCard';
import store from '../../../redux/store';

test('It should contain table title', async () => {
  render(
    <MemoryRouter>
      <CountryCard />
    </MemoryRouter>,
  );
  const headingElement = screen.getByTitle('table');
  expect(headingElement).toBeInTheDocument();
});

test('It should render get by test id', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CountryCard />
      </MemoryRouter>
    </Provider>,
  );
  const headingElement = screen.getByTestId('table');
  expect(headingElement).toBeInTheDocument();
});
