'use strict';
angular.module('angularPortfolioApp')
    .controller('headerController', function(){
    var headerList = this;
    headerList.data =[
        {icon:'fa-linkedin', link: 'https://www.linkedin.com/in/mlamont8'},
        {icon:'fa-twitter', link: 'http://twitter.com/MLamont8'},
        {icon:'fa-github', link: 'http://github.com/mlamont8'}
        
    ];
});