describe('Document.cookie', () => {
  it('spyOn', () => {
    // Create spy
    const write = jest.spyOn(global.document, 'cookie', 'set');

    // Write
    global.document.cookie = 'test1=Hello';
    global.document.cookie = 'test2=World';

    expect(write).toHaveBeenCalledWith('test1=Hello');
    expect(write).toHaveBeenCalledWith('test2=World');

    // The original function remains.
    expect(global.document.cookie).toBe('test1=Hello; test2=World');

    // Clear cookies as the state will remain ...
    document.cookie = 'test1=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'test2=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });

  it('spyOn and mockImplementation', () => {
    // Create spy
    const write = jest
      .spyOn(global.document, 'cookie', 'set')
      .mockImplementation(() => '');

    // Write
    global.document.cookie = 'test1=foo';
    global.document.cookie = 'test2=bar';

    expect(write).toHaveBeenCalledWith('test1=foo');
    expect(write).toHaveBeenCalledWith('test2=bar');

    // The original function remains.
    expect(global.document.cookie).toBe('');
  });
});
