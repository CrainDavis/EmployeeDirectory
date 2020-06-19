import axios from "axios";

export default {
    // get 200 employees residing in the US
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};