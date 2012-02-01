## Titan Toolkit

A collection of presentations, code samples, and other materials for evnagelizing Titanium.

### Presentations

All presentations are free to be used by anyone. The presentations themselves are based on the 
[impress.js](https://github.com/bartaz/impress.js) web-based presentation framework. In addition, 
localization is achieved using the [l10n.js](https://github.com/eligrey/l10n.js/tree/) library.

Some basic rules to follow:

* If adding any fields that need to be localized, name them with a `l_` prefix to make them 
  easier to identify. For example, an element with the `id` of `myElementId` should be called
  `l_myElementId` if it needs to be localized.
* Localizations can be found in the `js/localizations.js` folder