import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge sorted with collections correctly", () => {
    const collection_1 = [1, 3, 5, 7, 9];
    const collection_2 = [10, 8, 6, 4, 2];
    const collection_3 = [0, 2, 4, 6, 8];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toStrictEqual([
      0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10,
    ]);
  });
});
