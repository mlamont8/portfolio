"use strict";
angular
.module('angularPortfolioApp')

.controller('skillsController', function(){
    var skillsList = this;
    skillsList.data =[{
        skill:'html', icon:'fa-html5', subcats:['html5', 'Bootstrap','Angularjs']
    },{
        skill:'css', icon:'fa-css3', subcats:['CSS3', 'SASS']
    },{
        skill:'JavaScript', icon:'icon-javascript-alt', subcats:['jQuery']
    },{
        skill:'tools', icon:'fa-cog', subcats:['Linux', 'GIT', 'Bower']
    },{
        skill:'studying', icon:'fa-book', subcats:['Nodejs']
    }
    ];
    
});