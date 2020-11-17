import { backendAxios } from './axios'

class BackendApi {
    static signup(email, passwoard, role) {
        const request = backendAxios.post('/api/user/signup', {
            email: email,
            passwoard: passwoard,
            role: role,
        });
        return request;
    }
}

export { BackendApi }