'use strict';

angular
    .module('myApp')
    .component('menu', {
        templateUrl: 'Menu/Menu.template.html',
        controller: function MenuController($state) {
            this.state = $state;
        }
    });