import axios from 'axios'

class ConvocationsService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/convocations`,
            withCredentials: true
        })
    }

    getAllConvocations = () => this.app.get('/getAllConvocations')
    getOwnerConvocations = () => this.app.get('/getOwnerConvocation')
    gkConvocations = () => this.app.get('/getGkConvocation')
    editOneConvocation = (convocation_id, data) => this.app.put(`/editConvocation/${convocation_id}`, data)
    createConvocation = convocationDetails => this.app.post(`/newConvocation`, convocationDetails)
}

export default ConvocationsService