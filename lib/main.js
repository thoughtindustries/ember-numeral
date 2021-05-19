function isNumberLike(num) {
  var type = Ember.typeOf(num);
  return type === "number" || type === "string";
}

const priceFormat = function (priceInCents, currencyCode) {
  let currencySymbol = "$U";

  if (
    currencyCode &&
    typeof currencyCode === "string" &&
    currencyCode !== "USD"
  ) {
    if (symbols[currencyCode]) {
      currencySymbol = symbols[currencyCode];
    } else {
      currencySymbol = currencyCode.toUpperCase();
    }
  }

  if (isNumberLike(priceInCents)) {
    console.log(
      "numeral(parseInt(priceInpriceInCentspriceInCents",
      numeral(parseInt(priceInCents, 10) / 100).format("0.00")
    );

    const formattedNumber = numeral(parseInt(priceInCents, 10) / 100).format(
      "0.00"
    );
    return `${currencySymbol}${formattedNumber}`;
  } else {
    return null;
  }
};

const numeralFormat = function (value, format) {
  if (isNumberLike(value)) {
    return numeral(value).format(format);
  } else {
    return null;
  }
};
const symbols = {
  all: "L",
  afn: "؋",
  ars: "$",
  awg: "ƒ",
  aud: "$",
  azn: "₼",
  bsd: "$",
  bbd: "$",
  byr: "p.",
  bzd: "BZ$",
  bmd: "$",
  bob: "Bs.",
  bam: "KM",
  bwp: "P",
  bgn: "лв",
  brl: "R$",
  bnd: "$",
  khr: "៛",
  cad: "$",
  kyd: "$",
  clp: "$",
  cny: "¥",
  cop: "$",
  crc: "₡",
  hrk: "kn",
  cup: "₱",
  czk: "Kč",
  dkk: "kr",
  dop: "RD$",
  xcd: "$",
  egp: "£",
  svc: "$",
  eek: "kr",
  eur: "€",
  fkp: "£",
  fjd: "$",
  ghc: "₵",
  gip: "£",
  gtq: "Q",
  ggp: "£",
  gyd: "$",
  hnl: "L",
  hkd: "$",
  huf: "Ft",
  isk: "kr",
  inr: "₹",
  idr: "Rp",
  irr: "﷼",
  imp: "£",
  ils: "₪",
  jmd: "J$",
  jpy: "¥",
  jep: "£",
  kes: "KSh",
  kzt: "лв",
  kpw: "₩",
  krw: "₩",
  kgs: "лв",
  lak: "₭",
  lvl: "Ls",
  lbp: "£",
  lrd: "$",
  ltl: "Lt",
  mkd: "ден",
  myr: "RM",
  mur: "₨",
  mxn: "$",
  mnt: "₮",
  mzn: "MT",
  nad: "$",
  npr: "₨",
  ang: "ƒ",
  nzd: "$",
  nio: "C$",
  ngn: "₦",
  nok: "kr",
  omr: "﷼",
  pkr: "₨",
  pab: "B/.",
  pyg: "Gs",
  pen: "S/.",
  php: "₱",
  pln: "zł",
  qar: "﷼",
  ron: "lei",
  rub: "₽",
  rmb: "￥",
  shp: "£",
  sar: "﷼",
  rsd: "Дин.",
  scr: "₨",
  sgd: "$",
  sbd: "$",
  sos: "S",
  zar: "R",
  lkr: "₨",
  sek: "kr",
  chf: "CHF",
  srd: "$",
  syp: "£",
  tzs: "TSh",
  twd: "NT$",
  thb: "฿",
  ttd: "TT$",
  try: "₺",
  trl: "₤",
  tvd: "$",
  ugx: "USh",
  uah: "₴",
  gbp: "£",
  usd: "$",
  uyu: "$U",
  uzs: "лв",
  vef: "Bs",
  vnd: "₫",
  yer: "﷼",
  zwd: "Z$",
};

export { priceFormat, numeralFormat };
