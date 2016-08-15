'use strict';
angular
.module('angularPortfolioApp')

.controller('skillsController', function(){
    var skillsList = this;
    skillsList.data =[{
        skill:'html', icon:'fa-html5', subcats:['HTML5']
    },{
        skill:'css', icon:'fa-css3', subcats:['CSS3', 'Bootstrap', 'SASS']
    },{
        skill:'JavaScript', icon:'icon-javascript', subcats:['jQuery','Angularjs']
    },{
        skill:'tools', icon:'fa-cog', subcats:['Linux', 'GIT', 'Bower']
    },{
        skill:'studying', icon:'fa-book', subcats:['Nodejs']
    }
    ];
    
});