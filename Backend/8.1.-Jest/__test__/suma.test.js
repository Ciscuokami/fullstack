const suma = require('../suma');
//describe("Titulo", ()=>{})
//test("Titulo", ()=>{})
//toEqual()
//toBeNull()
//toBeUndefined()
//toBeDefined()
//toBeTruthy()
//toBeFalsy()
//not.toBeDefined() == toBeUndefined()

//toBeGreaterThan()
//toBeGreaterThanOrEqual()
//toBeLessThan()
//toBeLessThanOrEqual()

//STRING

//.not.toMatch()
//.toMatch()

//ARRAYS
//toContain()
//not.ToContain()

describe('prueba suma', ()=> {
    for(let i = 0; i < 5; i++){
        test('3+' + (5+i), ()=> {
            expect(suma(3,5+i)).toBe(8+i);
        });
    }
    test('8+7', ()=> {
        expect(suma(8,7)).toBe(15);
    });

    test('object assignment', ()=> {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1,two: 2});
    });
});
describe('prueba suma negativa', ()=> {
    test('-8+7', ()=> {
        expect(suma(-8,7)).toBe(-1);
    });
});

describe('Truthiness', ()=> {
    test('null-null', ()=> {
        expect(null).toBeNull();
        expect(null).toBeDefined();
        // expect(null).toBeUndefined();
        // expect(null).toBeTruthy();
        expect(null).toBeFalsy();
    });
});

describe('Truthiness', ()=> {
    test('zero', ()=> {
        // expect(0).toBeNull();
        expect(0).toBeDefined();
        // expect(0).toBeUndefined();
        // expect(0).toBeTruthy();
        expect(0).toBeFalsy();
    });
});
