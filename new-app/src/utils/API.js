import axios from "axios";
const url = "http://localhost:3000"
const API = {
  register: function(formData) {
    return fetch(`http://localhost:3000/api/register`,{method: "POST", formData});
  },

  login: function(formData) {
    return axios.post(`${url}/api/login`, formData);
  },

  getAllLessons: function() {
    return axios.get(`${url}/api/lessons`);
  },

  getLessonDetails: function(lessonId) {
    return axios.get(`${url}/api/lesson/`+lessonId)
  },

  submitAnswers: function(formData) {
    return axios.post(`${url}/api/answer`, formData, {headers: {'Authorization': localStorage.getItem('bibleApp')}});
  },

  hasSubmittedAnswers: function(formData){
    return axios.post(`${url}/api/hassubmitted`, formData, {headers: {'Authorization': localStorage.getItem('bibleApp')}});
  }

};

export default API;
