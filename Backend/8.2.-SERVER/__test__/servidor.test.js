const app = require('../server.js');
const supertest = require('supertest');
const request = supertest(app);

it('get al endpoint test', async done =>{
    const res = await request.get('/test');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('pass!');
    done();
})