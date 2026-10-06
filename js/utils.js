//Вспомогательные функции
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const getNumber = function() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
};

const getCount = getNumber();

export {randomInt, getCount};
