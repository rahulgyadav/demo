(function(){
    'use strict';

    /**
     * RegisterCtrl Controller
     * Created by: RAHUL G YADAV
     * Created On: 4-05-17
     */

    angular
        .module("spaApp")
        .controller("RegisterCtrl", RegisterCtrl);

    //Inject required stuff as parameters to home controller function
    RegisterCtrl.$inject = ["CommonFactory", "$location", "NotificationFactory"];

    /**
     * @name homeCtrl
     * @constructor
     */
    function RegisterCtrl(CommonFactory, $location, NotificationFactory){
        var vm = this;

        vm.validate = validate;

      // Defining various attributes used on the page
        vm.attributes = {
            first_name :  '',
            last_name :  '',
            email :  '',
            password :  '',
            confirm_password :  ''
        };


        /**
         * @name : validate
         * @desc : function to validate the register form fields and take appropriate action
         */
        function validate(isValid, form){
            if(isValid && vm.attributes.password == vm.attributes.confirm_password) {
                NotificationFactory.success('User registered successfully.');
                vm.attributes = {
                    first_name :  '',
                    last_name :  '',
                    email :  '',
                    password :  '',
                    confirm_password :  ''
                };
                form.$submitted = false;
                CommonFactory.setRegisterData(vm.attributes)
                    .then(function(){
                        return true;
                    })
            }
        }
    }
})();