import axios from 'axios'

class ConvocationsService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/convocations',
            withCredentials: true
        })
    }

    getAllConvocations = () => this.app.get('/getAllConvocations')
    getOneConvocation = convocation_id => this.app.get(`/getOneConvocation/${convocation_id}`)
    createConvocation = convocationDetails => this.app.post(`/newConvocation`, convocationDetails)
}

export default ConvocationsService