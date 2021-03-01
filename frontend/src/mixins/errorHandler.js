export default {
    methods: {
        mnx_backendErrorHandler(error) {
            if (error.response) {
                var authFailedErrors = [401, 403, 422];
                // Request made and server responded
                if (authFailedErrors.includes(error.response.status)) {
                    this.mnx_unauthenticatedUser();
                    this.mnx_navToFrontDoor();
                } else {
                    console.error(error);
                }
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
        }
    },
}