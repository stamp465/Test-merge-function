// sort input collections
// collection_1 & collection_3 is already sort min -> max
// collection_0 is already sort max -> min
function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let mergedArray: number[] = [];
  let i = 0,
    j = 0,
    k = 0;

  // reverse collection 2 to min -> max
  collection_2.reverse();

  while (
    i < collection_1.length ||
    j < collection_2.length ||
    k < collection_3.length
  ) {
    // find smallest number
    const check_smallest_number: number[] = [];
    if (i < collection_1.length) {
      check_smallest_number.push(collection_1[i]);
    }
    if (j < collection_2.length) {
      check_smallest_number.push(collection_2[j]);
    }
    if (k < collection_3.length) {
      check_smallest_number.push(collection_3[k]);
    }
    const smallest_number = Math.min(...check_smallest_number);

    // push smallest number
    if (smallest_number == collection_1[i]) {
      mergedArray.push(collection_1[i]);
      i++;
    }
    if (smallest_number == collection_2[j]) {
      mergedArray.push(collection_2[j]);
      j++;
    }
    if (smallest_number == collection_3[k]) {
      mergedArray.push(collection_3[k]);
      k++;
    }
  }

  return mergedArray;
}

export { merge };
