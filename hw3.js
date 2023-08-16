Array.prototype.myFilter = function myFilter(cb, obj) {
  if (typeof cb !== 'function') {
    throw new Error('Callback is not a function');
  }

  if (typeof obj === 'object' && obj !== null) {
    cb = cb.bind(obj);
  }

  const result = [];
  const arrLength = this.length;

  for (let i = 0; i < arrLength; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

function createDebounceFunction(cb, delay) {
  let timeOutId = null;

  return () => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId);
      timeOutId = null;
    }

    timeOutId = setTimeout(cb, delay);
  };
}
