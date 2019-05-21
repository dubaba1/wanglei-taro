const isTrue = (str) => {
  return str === '1' || str === 1;
};

const isFalse = (str) => {
  return str === '0' || str === 0;
}

const isNotBlack = (str) => {
  return !(str == null || str === '');
};

const isBlack = (str) => {
  return !isNotBlack(str);
};

module.exports = {
  isPhone: str => /^1[3|4|5|7|8][0-9]{9}$/.test(str),
  isISBN: str => /^[0-9]{13}$/.test(str), // ISBN
  isTrue,
  isFalse,
  isNotBlack,
  isBlack,
};

