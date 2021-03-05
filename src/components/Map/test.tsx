import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  it('should render whitout any maker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render with the maker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'Maranguape',
      slug: 'maranguape',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'Fortaleza',
      slug: 'fortaleza',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    render(<Map places={[placeOne, placeTwo]} />);

    expect(screen.getByTitle(/maranguape/i)).toBeInTheDocument();
  });
});
