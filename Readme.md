## ember-numeral

Simple wrapper around the excellent [numeral.js](http://numeraljs.com/).

Assumes you are using [ember-app-kit](https://github.com/stefanpenner/ember-app-kit) (more specifically [ember-jj-abrams-resolver](https://github.com/stefanpenner/ember-jj-abrams-resolver))

## Installation

Require numeral.js however you like prior to requiring this script.

Import and register the helpers you want to use before you create your app, e.g.

```js
  import Resolver from 'ember/resolver';
  import {priceFormat, numeralFormat} from 'ember-numeral';
  Ember.Handlebars.registerBoundHelper('price-format', priceFormat);
  Ember.Handlebars.registerBoundHelper('numeral-format', numeralFormat);

  export default Ember.Application.extend({
    Resolver: Resolver['default']
  });
```

## Usage

```handlebars
  {{price-format priceInCents}}
  {{numeral-format number "(0.00)"}}
```

## TODO

Tests!!

## LICENSE

MIT
