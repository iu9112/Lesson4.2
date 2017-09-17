'use strict';

angular
    .module('myApp')
    .factory('MyAccountService', function() {

        var data = null;

        return {

            getAccount: function() {
                return data ? data : {};
            },

            saveAccount: function(account) {
                data = account;
            }

        }

    }

);