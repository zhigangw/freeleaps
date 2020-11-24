import { backendAxios } from './axios'

class UserAuthApi {
    static signup(email, password, role) {
        const request = backendAxios.post('/api/user/signup', {
            email: email,
            password: password,
            role: role,
        });
        return request;
    }

    static signin(email, password) {
        const request = backendAxios.post('/api/user/signin', {
            email: email,
            password: password
        });
        return request;
    }

    static signout(identity, jwt) {
        const request = backendAxios.post(
            '/api/user/signout',
            {
                identity: identity,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

}

export { UserAuthApi }