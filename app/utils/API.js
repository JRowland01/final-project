import axios from "axios";

const API = {
  register: function(formData) {
    return axios.post('/api/register', formData);
  },

  login: function(formData) {
    return axios.post('/api/login', formData);
  },

  getAllLessons: function() {
    return axios.get('/api/lessons');
  },

  getLessonDetails: function(lessonId) {
    return axios.get('/api/lesson/'+lessonId)
  },

  submitAnswers: function(formData) {
    return axios.post('/api/answer', formData, {headers: {'Authorization': localStorage.getItem('bibleApp')}});
  }
};

export default API;
