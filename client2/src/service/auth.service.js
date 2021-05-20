import axios from 'axios'

class ConvocationsService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
            withCredentials: true
        })
    }

    login = userDetails => this.app.post('/login', userDetails)
    signup = userDetails => this.app.post('/signup', userDetails)
    logout = () => this.app.get('/logout')
    isloggedin = () => this.app.post('/isloggedin')
    editUser = (user_id) => this.app.put(`/profile/${user_id}`)
    followGk = (goalkeeper_id, data) => this.app.put(`/favoriteGks/${goalkeeper_id}`, data)
    getAllGksFollowed = () => this.app.get('/favoritesGks')
}

export default ConvocationsService