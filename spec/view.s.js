/* eslint-env jest */
const { Application } = require('spectron');
const assert = require('assert');
const electronPath = require('electron');

describe('Window', () => {
  jest.setTimeout(30000);

  let app;
  beforeAll(() => {
    app = new Application({
      path: electronPath,
      args: [`/${__dirname}/..`],
    });
    return app.start();
  });

  afterAll(() => app.stop());

  it('shows a window when start the application', () => {
    app.client.getWindowCount().then((count) => assert.equal(count, 1));
  });
});
