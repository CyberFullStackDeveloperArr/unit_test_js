import { runTest } from "../controller/controller.js";

test(" Test calculateResult function ", () => {
    const result = runTest();
    expect(result).toBe(1990);
});
