import { fetchName } from "../model/modelTeks.js";
import { getName } from "../controller/controllerTeks.js";

test("Test fetching and displaying name", async () => {
    const name = await fetchName();
    expect(name).toBe("Ghost Code Night");
});

test("Test getName function in Controller", async () => {
    const name = await getName();
    expect(name).toBe("Ghost Code Night");
})