export default {
    methods: {
        mnx_backendErrorHandler(error){
          if (error.response) {
            // Request made and server responded
            if (error.response.status === 401) {
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