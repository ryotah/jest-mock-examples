import fs from 'fs';
import path from 'path';
import { render } from '.';

describe('navigator', () => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
  let userAgent: jest.SpyInstance;

  beforeEach(() => {
    userAgent = jest.spyOn(global.navigator, 'userAgent', 'get');
    // Render HTML
    document.documentElement.innerHTML = html;
  });

  it('should render "Hello world!"', () => {
    render();
    const title = document.getElementById('title');
    expect(title?.textContent).toBe('Hello world!');
  });

  it('should render "Hello Android!" if Android', () => {
    userAgent.mockReturnValue(
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012)'
    );
    render();
    const title = document.getElementById('title');
    expect(title?.textContent).toBe('Hello Android!');
  });
});
