import { render } from '@testing-library/react';

import ConsoleMfe2 from './console-mfe-2';

describe('ConsoleMfe2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsoleMfe2 />);
    expect(baseElement).toBeTruthy();
  });
});
