import { Blaze } from 'meteor/blaze'
import { Spacebars } from 'meteor/spacebars'

if (!(Blaze.injectRawHtml && Blaze.injectRawHtml.constructor === Function)) {
  Blaze.injectRawHtml = htmlString => Spacebars.SafeString(htmlString)
}
