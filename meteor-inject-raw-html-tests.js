import { Blaze } from 'meteor/blaze'
import { Tinytest } from 'meteor/tinytest'

Tinytest.add('meteor-inject-raw-html', function (test) {
  const htmlString = '<h1>test</h1>'
  test.equal(Blaze.injectRawHtml(htmlString).toString(), htmlString)
})
