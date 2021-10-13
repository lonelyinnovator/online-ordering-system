export default {
    changeSignInSignUp(state) {
        state.signin_signup === "in" ? state.signin_signup = "up" : state.signin_signup = "in";
    },

    changeIsInUp(state) {
        state.is_in_up_change = !state.is_in_up_change;
    },

    inUpChange(state) {
        state.is_in_up_change = true;
    },

    inUpNoChange(state) {
        state.is_in_up_change = false;
    }

}