import { render } from '@testing-library/react';

import ConsoleMfe1 from './console-mfe-1';

describe('ConsoleMfe1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsoleMfe1 />);
    expect(baseElement).toBeTruthy();
  });
});
