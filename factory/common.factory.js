(function() {
	'use strict';
	/**
     * common Factory
     * Created by: RAHUL G YADAV
     * Created On: 04-05-2017
     */
	angular
		.module('spaApp')
		.factory('CommonFactory', CommonFactory);

	CommonFactory.$inject = ['$http', 'CONST', '$rootScope', 'NotificationFactory'];

	function CommonFactory ($http, CONST, $rootScope, NotificationFactory){
            var notificationMsg = {
                'success_register': 'Record added successfully'
            };

			var resObj = {
				menuData:[],
				homeData : [],
            /**
             * @name getMenuData
             * @desc Methods for get data from Menu json file
             * @return {*}
             */
				getMenuData : function (){
				return $http.get("jsonfiles/menu.json")
							.success(function (response){								
								resObj.menuData = response;
							})
							.error(function (data, err) {
                        		console.log(data, err);
                            })
				},
				/**
				 * @name getHomeData
				 * @desc Methods for get data from home json file
				 * @return {*}
				 */
				getHomeData : function (){
				return $http.get("jsonfiles/home.json")
							.success(function (response){								
								resObj.homeData = response;

							})
							.error(function (data, err) {
                        		console.log(data, err); })
				},
                /**
                 * @name setRegisterData
                 * @desc Methods for setting registration data
                 * @return {*}
                 */
                setRegisterData : function (formData){
                    return $http.post("http://requestb.in/1g23nob1", formData)
                        .success(function (response){
                            if(response == 'ok'){
                                NotificationFactory.success(notificationMsg.success_register);
                            }else{
                                NotificationFactory.error();
                            }
                        })
                        .error(function (data, err) {
                            console.log(data, err); })
                }
			 };
			return resObj;
	}
})();