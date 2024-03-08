import { fetchName } from "../model/modelTeks.js";

export async function getName() {
    const name = await fetchName();
    return name;
}
