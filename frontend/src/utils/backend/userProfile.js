import { backendAxios } from './axios'
import { userUtils } from '../store/index'

class UserProfileApi {
    static fetchSettings() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-settings',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchAccount() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-account',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchWork() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-work',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static fetchPersonal() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-personal',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static choosePackage(service) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-work/choose-package',
            {
                package: service
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );

        return request;
    }


    static updateName(firstName, lastName) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/update-name',
            {
                firstName: firstName,
                lastName: lastName
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static updateMobile(mobile) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/update-mobile',
            {
                mobile: mobile,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static updateEmail(email, code) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/update-email',
            {
                email: email,
                code: code,
            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static updatePhoto(photo) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/update-photo',
            {
                photo: photo,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static updateLocation(location) {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/update-location',
            {
                location: location,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }
        );
        return request;
    }

    static fetchCareer() {
        let jwt = userUtils.getJwtToken();
        const request = backendAxios.post(
            '/api/user-profile/fetch-career',
            {

            },
            {
                headers: { Authorization: `Bearer ${jwt}` }
            }
        );
        return request;
    }

    static checkUserExistanceByEmail(email) {
        const request = backendAxios.post(
            '/api/user-profile/check-existance-by-email',
            {
                email:email
            },
            {
               
            }
        );
        return request;
    }

}

export { UserProfileApi }