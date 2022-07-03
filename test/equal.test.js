test("test toBe", () =>{
    const name = "Alvin";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Alvin');
})

// jika mau ngecek array
test("test toEquals", () =>{
    let person = {
        id: "Alvin",
    }

    Object.assign(person, {name: "Richard"})

    expect(person).toEqual({id: "Alvin", name: "Richard"})
})