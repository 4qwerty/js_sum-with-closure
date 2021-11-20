'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function firstDigit(x) {
    return function secondDigit(y) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
