'use strict';
angular
.module('angularPortfolioApp')
.controller('projectsController', function(){
    var projectsList = this;
    projectsList.data =[{
        title:'Movie/TV Entertainment search', image:'/images/projects/entsearch.png', github: 'https://github.com/mlamont8/entertainment-search', desc: 'Built using Yeoman Angularjs and customized using the ui-router.  Using the API from themoviedb.org, created multiple views showcasing popular movies and tv shows.  Each selection takes the user to an individual page which gives specified details pulled from the API.  Used materializecss framework for material design.', tech: 'HTML5 ,Angularjs, Materializecss'
    },{
        title:'current weather app', image:'/images/projects/weatherapp.png', github: 'https://github.com/mlamont8/local-weather', desc: 'Makes use of the API from OpenWeatherMap.com and uses geolocation information from the browser to output current weather conditions in user\'s location.  Includes a Celsius/Fahrenheit toggle, background images change based on current weather conditions.', tech:'HTML5, Bootstrap, CSS, jQuery'
    },{
        title:'WIKI-SEARCH', image:'/images/projects/wikisearch.png', github: 'https://github.com/mlamont8/wiki-search', desc: 'Uses the Wikipedia API to receive results based on local user inputs.  Includes autocomplete and a random result option based on search terms. Built using Bootstrap for responsiveness as well as jQuery and Javascript.', tech:'HTML5, Bootstrap, CSS, jQuery'
    },{
        title:'POMODORO TIMER', image:'/images/projects/pomodoroClock.png', github: 'https://github.com/mlamont8/Pomodoro-clock', desc: 'A Pomodoro Timer built with Javascript and jQuery.  Session and Reset lengths can be set by the user.  Also includes pause and reset buttons for the timer.', tech:'HTML5, Bootstrap, CSS, jQuery'
    },{
        title:'TWITCH USER STATUS', image:'/images/projects/twitchstatus.png', github: 'https://github.com/mlamont8/twitch-online-status', desc: 'Uses the API from Twitch.tv to pull the online status for predefined users.  Organizes users in Online, Offline and Deleted status.  Selecting a result takes you to the user page on Twitch.tv.  Made with Javascript, jQuery, HTML and Bootstrap for responsiveness.', tech:'HTML5, CSS, jQuery'
    },{
        title:'ONLINE CALCULATOR', image:'/images/projects/calculator.png', github: 'https://github.com/mlamont8/webculator', desc: 'An Online Calculator built with HTML, CSS, Javascript and jQuery.', tech:'HTML5, CSS, jQuery'
    }
    ];
    
});