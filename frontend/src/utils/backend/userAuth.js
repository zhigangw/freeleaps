import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class UserAuthApi {
    static signup(username, password, role) {
        const request = backendAxios.post('/api/user/signup', {
            username: username,
            password: password,
            role: role,
        });
        return request;
    }

    static signin(username, password) {
        const request = backendAxios.post('/api/user/signin', {
            username: username,
            password: password
        });
        return request;
    }

    static signout(identity) {
        let jwt = userUtils.getJwtToken();
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

    static checkUsernameAvailability(identity) 
    {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user/check-username-availability',
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