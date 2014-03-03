define("ember-numeral", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var priceFormat = function(priceInCents) {
      if (priceInCents) {
        return numeral(parseInt(priceInCents, 10) / 100).format('$0,0.00');
      } else {
        return null;
      }
    };

    var numeralFormat = function(value, format) {
      if (value) {
        return numeral(value).format(format);
      } else {
        return null;
      }
    };

    __exports__.priceFormat = priceFormat;
    __exports__.numeralFormat = numeralFormat;
  });