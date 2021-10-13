export default {
    actSigninSignUp({ commit }) {
        commit("changeSignInSignUp")
    },

    actIsInUpChange({ commit }) {
        commit("changeisInUp");
    },

    actInUpChange({ commit }) {
        commit("inUpChange");
        setTimeout(() => {
            commit("inUpNoChange");
        }, 500);
    },

    actInUpNoChange({ commit }) {
        commit("inUpNoChange");
    }
}