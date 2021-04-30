import {Pokemon} from "../src/pokemon";

test("Pokemon B is the winner", () => {
    const PokeA = new Pokemon("Scorplack", 65, 2, 1, 100, 50);
    const PokeB = new Pokemon("Polaryu", 85, 2, 1, 75, 90);
    expect(PokeA.fight(PokeB)).toBe(PokeB);
});

test("Pokemon A is the winner", () => {
    const PokeA = new Pokemon("Letaligon", 100, 2, 1, 134, 115);
    const PokeB = new Pokemon("Polaryu", 85, 2, 1, 75, 90);
    expect(PokeA.fight(PokeB)).toBe(PokeA);
});