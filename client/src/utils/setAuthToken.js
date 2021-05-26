import api from './api'

const setAuthToken = token => {
    console.log([token, api.main, api.main.defaults])
    if(token) {
        api.main.defaults.headers.common['x-auth-token'] = token
        localStorage.setItem('token', token)
    } else {
        delete api.main.defaults.headers.common['x-auth-token']
        localStorage.removeItem('token')
    }
}

export default setAuthToken