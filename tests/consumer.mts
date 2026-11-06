import * as api from '@lp-labs/array-difference';
import { arrayDifference } from '@lp-labs/array-difference';
console.log(arrayDifference([1, 2, 2, 3], [2]));
// @ts-expect-error invalid argument must be rejected by declarations
api.arrayDifference([], 'right');
