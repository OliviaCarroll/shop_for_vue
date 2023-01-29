import { RouteLocation } from "vue-router";

const haveAccessToken = (to: RouteLocation, from: RouteLocation, next: any) => {
    // can check instead to see if there is a token, if correct, navigate to next view
    // if not, then alert and redirect to the login page 
    const token = localStorage.getItem('access_token')
    if(token){
        // navigate to page 
        next();
    } else {
        alert('Please log in to access the shop')
        next({name: 'login'})
    }
}

export default haveAccessToken;