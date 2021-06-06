import ApiService from '../ApiService/index'
export const userServices = (
    function (){
        const BASE_URL = 'http://localhost:3200'

        // current user
        function currentUser (payload) {
            const url = `/current-user`
            return ApiService.postWithAuth(url, payload)
        }

        return {
            currentUser
        }
    }
)()