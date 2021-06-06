import axios from "axios";
import { auth } from '../../firebase'

const ApiService = (
    function (){
        const axiosAuth = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL
        })

        const axiosPublic = axios.create({
            baseURL: import.meta.env.VITE_BASE_URL
        })
        
        axiosAuth.interceptors.request.use(
            async (config) => {
                let user = await auth.currentUser
                config.headers.token = user ? await user.getIdToken(true): ''

                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        /**
         * e.g Make a request for a user (url) with a given ID axios.get('/user?ID=12345')
         * Optionally the request above could also be done as
         * axios.get('/user', {
         *   params: {
         *      ID: 12345
         *   }
         * })
         */
        function getWithAuth(url, params) {
            return axiosAuth.get(url, { params })
        }

        function postWithAuth(url, payload, headers) {
            return axiosAuth.post(url, payload, { headers });
        }

        return {
            postWithAuth,
            getWithAuth
        }
    }
)()

export default ApiService;