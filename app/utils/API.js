import axios from "axios";

const API = {
  register: function(formData) {
    axios.post('/api/register', formData).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    })
  },

  login: function(formData) {
    return axios.post('/api/login', formData);
  }
};

export default API;
