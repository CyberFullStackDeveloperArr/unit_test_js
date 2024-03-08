test("test toBe", () => {
    const name = "Ghost";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Ghost');
});

test("test toEqual", () => {
    let person = {id: "ghost"};
    Object.assign(person, {name: "Code"});

    expect(person).toEqual({id: "ghost", name : "Code"});
})