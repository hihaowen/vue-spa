import jwtToken from './../../helpers/jwt'

export default {
    actions: {
        loginRequest({dispatch}, formData) {
            axios.post('/api/login', formData).then(response => {
                dispatch('loginSuccess', response.data)
            }).catch(error => {
                console.log(error.response.data)
            })
        },
        loginSuccess({dispatch}, tokenResponse) {
            jwtToken.setToken(tokenResponse.token);
            jwtToken.setAuthId(tokenResponse.auth_id);
            dispatch('setAuthUser');
        },
        logoutRequest({dispatch}) {
            axios.post('/api/logout').then(response => {
                jwtToken.removeToken();
                dispatch('unsetAuthUser');
            })
        }
    }
}