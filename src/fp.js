import { curry } from "lodash-es";

export const isEqual = curry((a, b) => a === b);

export const isLess = curry((a, b) => a < b);

export const isGreater = curry((a, b) => a > b);

export const isLessOrEqual = curry((a, b) => isLess(a, b) || isEqual(a, b));

export const isGreaterOrEqual = curry((a, b) => isGreater(a, b) || isEqual(a, b));

export const isNull = (val) => val === null;

export const isUndefined = (val) => val === undefined;

export const isNil = (val) => isNull(val) || isUndefined(val);

export const isTrue = (a) => a === true;

export const isFalse = (a) => a === false;

export const isTruthy = (a) => !!a;

export const isFalsy = (a) => !a;

export const isEven = (num) => num % 2 === 0;

export const isOdd = (num) => !isEven(num);

export const isSameLength = curry((a, b) => a.length === b.length);

export const getByKey = curry((key, obj) => obj[key]);

export const getByIndex = curry((index, arr) => arr[index]);

export const identity = (val) => val;

export const asFunction = (arg) => typeof arg === 'function' ? arg : () => arg;

export const isEmpty = (val) => (
    Array.isArray(val) ? val.length === 0 : Object.keys(val).length === 0
);

export const flow = (...fns) => (
    (...args) => fns.reduce((acc, fn) => fn(acc), args)
);
