let count = 0;

const inc = () => ++count;
const dec = () => --count;

// how to return count!!
const getCount = () => count;

module.exports = {
  inc,
  dec,
  getCount
};
