import { backendAxios } from './axios'

class BackendApi {
    static signup(email, password, role) {
        const request = backendAxios.post('/api/user/signup', {
            email: email,
            password: password,
            role: role,
        });
        return request;
    }
}

export { BackendApi }