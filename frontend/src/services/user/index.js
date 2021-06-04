import ApiService from '../ApiService/index'
export const userServices = (
    function (){
        const BASE_URL = 'http://localhost:3200'

        // current user
        function currentUser (payload, token) {
            const url = `${BASE_URL}/current-user`
            const headers = {
                    token: token
                }
            return ApiService.post(url, payload, headers)
        }

        return {
            currentUser
        }
    }
)()