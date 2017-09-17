'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function(MyAccountService) {

        var vm = this;
        vm.account = MyAccountService.getAccount();
        if(!('name' in vm.account)) {
            vm.isForm = true;
        }

        vm.saveAccount = function(account) {
            MyAccountService.saveAccount(account);
            vm.isForm = false;
            vm.account = MyAccountService.getAccount();
        }

    });