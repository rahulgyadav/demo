(function(){
	'use strict';

	/**
     * MenuCtrl Controller
     * Created by: RAHUL G YADAV
     * Created On: 04-05-17
     */

	angular
	.module("spaApp")
	.controller("menuCtrl", menuCtrl);

	//Inject required stuff as parameters to menu controller function
	menuCtrl.$inject = ["CommonFactory"];

	
    /**
     * @name menuCtrl
     * @constructor
     */
	function menuCtrl(CommonFactory){
		var vm = this;
		vm.menuItems = [];
		vm.menu = menu;
		function menu(){
			CommonFactory.getMenuData()
						.then(function(){
							vm.menuItems = CommonFactory.menuData.menu;
						})

		}
		vm.menu();
	}
})();