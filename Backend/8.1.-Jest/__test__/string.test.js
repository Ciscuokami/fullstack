describe('Strings', ()=> {
    test('there is no I in team', ()=> {
        expect('team').not.toMatch(/i/);
    });
    test('él es manuel', ()=> {
        expect('manuel').toMatch(/el/);
    });
});

const miArray = [8, 4, 5, 13, 9];

describe('ARRAY', ()=> {
    test('contiene', ()=> {
        expect(miArray).toContain(8);
    });
    test('contiene', ()=> {
        expect(miArray).not.toContain(8);
    });
});