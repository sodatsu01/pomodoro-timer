const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron')

describe('Window', function() {
  jest.setTimeout(3000)

  let app
  beforeAll(function() {
    app = new Application({
      path: electronPath,
      args: [`/${__dirname}/..`]
    })
    return app.start()
  })

  afterAll(function() {
    return app.stop()
  })

  it("shows a window when start the application", function() {
    app.client.getWindowCount().then((count) => assert.equal(count, 1))
  })
  //  it("shows count downtimer on center", function() {
  //})
})
