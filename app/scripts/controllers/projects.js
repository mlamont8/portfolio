'use strict';
angular
.module('angularPortfolioApp')
.controller('projectsController', function(){
    var projectsList = this;
    projectsList.data =[{
        title:'Movie/TV Entertainment search', image:'/images/projects/entsearch.png', github: 'https://github.com/mlamont8/entertainment-search', desc: 'This Entertainment search app was created with Yeoman AngularJS using the ui-router.  It takes the API from themoviedb.org and showcases popular and upcoming movies and TV shows.  Inner pages feature a search option based on user input.  CSS is built with SASS using the Materializecss framework.', link: 'https://movie-and-tv-search.firebaseapp.com/',tech: 'HTML5 ,Angularjs, Materializecss'
    },{
        title:'current weather app', image:'/images/projects/weatherapp.png', github: 'https://github.com/mlamont8/local-weather', desc: 'This online weather app makes use of the API from OpenWeatherMap.com.  Built with vanilla Javascript and jQuery, it uses the browser\'s geolocation information to show weather conditions in the user\'s location.  The app features a Celsius/Fahrenheit toggle and the background image changes based on current weather conditions.', link: 'http://codepen.io/mlamont8/full/pjjvqB/', tech:'HTML5, Bootstrap, CSS, jQuery'
    },{
        title:'WIKI-SEARCH', image:'/images/projects/wikisearch.png', github: 'https://github.com/mlamont8/wiki-search', desc: 'Uses the Wikipedia API to receive results based on local user inputs.  Includes autocomplete and a random result option based on search terms. Built using Bootstrap for responsiveness as well as jQuery and Javascript.', link: 'https://wikisearch-acecd.firebaseapp.com/', tech:'HTML5, Bootstrap, CSS, jQuery'
    },{
        title:'POMODORO TIMER', image:'/images/projects/pomodoroClock.png', github: 'https://github.com/mlamont8/Pomodoro-clock', desc: 'A Pomodoro Timer built with Javascript and jQuery.  Session and Reset lengths can be set by the user.  Also includes pause and reset buttons for the timer.', link: 'http://codepen.io/mlamont8/full/meOmEy/', tech:'HTML5, Bootstrap, CSS, jQuery'
    },{
        title:'TWITCH USER STATUS', image:'/images/projects/twitchstatus.png', github: 'https://github.com/mlamont8/twitch-online-status', desc: 'Uses the API from Twitch.tv to pull the online status for predefined users.  Organizes users in Online, Offline and Deleted status.  Selecting a result takes you to the user page on Twitch.tv.  Made with Javascript, jQuery, HTML and Bootstrap for responsiveness.', link: 'http://codepen.io/mlamont8/full/bEQOQj/', tech:'HTML5, CSS, jQuery'
    },{
        title:'ONLINE CALCULATOR', image:'/images/projects/calculator.png', github: 'https://github.com/mlamont8/webculator', desc: 'An Online Calculator built with HTML, CSS, Javascript and jQuery.', link: 'http://codepen.io/mlamont8/full/yeedKq/', tech:'HTML5, CSS, jQuery'
    }
    ];
    
});