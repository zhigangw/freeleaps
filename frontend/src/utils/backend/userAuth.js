import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class UserAuthApi {

    static checkUsernameAvailability(identity) {
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

    static sendUsernameToEmail(email) {
        const request = backendAxios.post(
            '/api/user/send-username-to-email',
            {
                email: email,
            },
            {
            }
        );
        return request;
    }

    static sendTempPasswordToEmail(email) {
        const request = backendAxios.post(
            '/api/user/send-temp-password-to-email',
            {
                email: email,
            },
            {
            }
        );
        return request;
    }

    static signin(username, password) {
        const request = backendAxios.post('/api/user/signin', {
            username: username,
            password: password
        });
        return request;
    }

    static signup(username, password, role) {
        const request = backendAxios.post('/api/user/signup', {
            username: username,
            password: password,
            role: role,
        });
        return request;
    }

    static signinByEmail(email, password) {
        const request = backendAxios.post('/api/user/email-signin', {
            email: email,
            password: password
        });
        return request;
    }

    static signupByEmail(email, password) {
        const request = backendAxios.post('/api/user/email-signup', {
            email: email,
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

    static updatePassword(password) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user/update-password',
            {
                password: password,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;

    }

    static updateUsername(identity) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user/update-username',
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