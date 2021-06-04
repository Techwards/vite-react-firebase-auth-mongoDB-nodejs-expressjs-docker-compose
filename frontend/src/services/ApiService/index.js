import axios from "axios";

const ApiService = (
    function (){
        
        /**
         * e.g Make a request for a user (url) with a given ID axios.get('/user?ID=12345')
         * Optionally the request above could also be done as
         * axios.get('/user', {
         *   params: {
         *      ID: 12345
         *   }
         * })
         */
        function get(url, params) {
            return axios.get(url, { params })
        }

        function post(url, payload, headers) {
            return axios.post(url, payload, { headers });
        }

        return {
            post,
            get
        }
    }
)()

export default ApiService;