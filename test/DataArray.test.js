import { fetchData } from "../controller/controllerArray";
import { data } from "../model/modelArray";

test("Test fetchData function", () => {
    const result = fetchData();
    expect(result).toEqual(data);
})