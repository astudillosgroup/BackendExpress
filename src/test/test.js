const request = require("supertest");
const app = require("../../src/app");


describe('Test create user and response body', () => {
    test('Response', async (done) => {
        const response = await request(app)
            .post('/user/createuser')
            .send({
                username: 'test2',
                email: 'test2@gmail.com',
                password: '12345678'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({
            username: 'test2',
            email: 'test2@gmail.com',
            emailVerify: false,
            token: {}
        })
        done()
    })
})


describe('Test create user 400', () => {
    test('Response', async (done) => {
        const response = await request(app)
            .post('/user/createuser')
            .send({
                username: 'doblejmf',
                email: 'jorgejmaurera@gmail.com',
                password: null
            });
        expect(response.statusCode).toBe(400);
        done()
    })
})

describe('Test create user 401', () => {
    test('Response', async (done) => {
        const response = await request(app)
            .post('/user/createuser')
            .send({
                username: 'Ali',
                email: 'alisolorzano0001@gmail.com',
                password: '12345678'
            });
        expect(response.statusCode).toBe(401);
        done()
    })
})

describe('Test login user and response body', () => {
    test('Response', async (done) => {
        const response = await request(app)
            .post('/user/loginuser')
            .send({
                username: 'Ali',
                password: '12345678'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({
            username: 'Ali',
            verifyEmail: false,
            token: {}
        })
        done()
    })
})