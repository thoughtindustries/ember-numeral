var priceFormat = function(priceInCents) {
  return numeral(priceInCents / 100).format('$0,0.00');
};

var numeralFormat = function(value, format) {
  return numeral(value).format(format);
};

export {priceFormat, numeralFormat};
