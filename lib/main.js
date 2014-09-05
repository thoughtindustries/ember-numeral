function isNumberLike(num) {
  var type = Ember.typeOf(num);
  return type === 'number' || type === 'string';
}

var priceFormat = function(priceInCents) {
  if (isNumberLike(priceInCents)) {
    return numeral(parseInt(priceInCents, 10) / 100).format('$0,0.00');
  } else {
    return null;
  }
};

var numeralFormat = function(value, format) {
  if (isNumberLike(value)) {
    return numeral(value).format(format);
  } else {
    return null;
  }
};

export {priceFormat, numeralFormat};
