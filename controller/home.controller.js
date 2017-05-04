(function(){
	'use strict';

	/**
     * HomeCtrl Controller
     * Created by: RAHUL G YADAV
     * Created On: 4-05-17
     */ 

	angular
	.module("spaApp")
	.controller("HomeCtrl", HomeCtrl);

	//Inject required stuff as parameters to home controller function
	HomeCtrl.$inject = ["CommonFactory", "$location"];

	/**
     * @name homeCtrl
     * @constructor
     */
	function HomeCtrl(CommonFactory, $location){
		var vm = this;
        vm.invalidNumber = false;
        vm.validateNumber = validateNumber;
        vm.home  = home;
        vm.validate = validate;

    // Defining various attributes used on the page
    	vm.data = {};

        vm.attributes = {
            numberField :  ''
        };

    /**
      * @name : home
      * @desc : function to load view for home
    */

		 function home(){
            CommonFactory.getHomeData()
						.then(function(){
							vm.data = CommonFactory.homeData;
						})
		}
		vm.home(); // calling function on page load

    /**
      * @name : validateNumber
      * @desc : function to validate the register form fields and take appropriate action
    */
        function validateNumber(isValid){
           if(isValid && !vm.invalidNumber) {
              $location.path('/register');
           }
        }

    /**
      * @name : validate
      * @desc : function to validate the register form fields and take appropriate action
    */
        function validate(){
            var value = parseInt(vm.attributes.numberField);
            if(value < 25 ||  value > 100 ){
                vm.invalidNumber = true;
            }else{
                vm.invalidNumber = false;
            }
        }

	}

})();