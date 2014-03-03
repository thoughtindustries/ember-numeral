define("ember-numeral", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var priceFormat = function(priceInCents) {
      return numeral(priceInCents / 100).format('$0,0.00');
    };

    var numeralFormat = function(value, format) {
      return numeral(value).format(format);
    };

    __exports__.priceFormat = priceFormat;
    __exports__.numeralFormat = numeralFormat;
  });