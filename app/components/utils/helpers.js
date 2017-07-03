
var axios = require("axios");

// NYT API
var nytAPI = "48f07899a4484453af0434f40c4660df";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to NYT
  runQuery: function(searchTerm, startDate, endDate) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + nytAPI;

    return axios.get(queryURL).then(function(response) {
      // If result return response array
      if (response.data.response.docs[0]) {
        return response.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },
  getArticles: function(){
    return axios.get('/api');
  },
  postArticle: function(title, date, url){
    return axios.post('/api', {title: title, date: date, url: url});
  }

};

// We export the API helper
module.exports = helper;
