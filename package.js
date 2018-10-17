/* global Package */

Package.describe({
  name: 'liberation:inject-raw-html',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Expose method Spacebars.SafeString as Blaze.injectRawHtml',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.6.0.1')
  api.use(['ecmascript', 'blaze', 'spacebars'])
  api.mainModule('meteor-inject-raw-html.js')
})

Package.onTest(function (api) {
  api.use(['ecmascript', 'tinytest', 'blaze'])
  api.use('liberation:meteor-inject-raw-html')
  api.mainModule('meteor-inject-raw-html-tests.js')
})
