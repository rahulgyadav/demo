/**
 * @name configRouter
 * @desc Set all the routes
 * @param $routeProvider
 */
 function configRouter($routeProvider) {
    // Optimize load start with remove binding information inside the DOM element   

    $routeProvider
        .when("/", {
            templateUrl : "view/home.html"
        }) 
     	.when("/home", {
        	templateUrl : "view/home.html"
    	})
        .when("/register", {
            templateUrl : "view/register.html"
        })
        .otherwise({
            redirectTo: '/' });
    }

    function commonHeaders($httpProvider) {
	    //Headers to detect ajax request
	   // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	}
	angular.module("spaApp")
	   .config(commonHeaders)
	   .config(configRouter)
       .constant("CONST", {
            CONFIG: {
                BASE_URL: 'http://'+location.host
            },
            MSG: {
                COMMON_ERROR: 'Something is wrong. Please try again later.',
                CONFIRM_RECORD_DELETE: 'Are you sure you want to delete this?',
                SUCCESS_RECORD_ADDED: 'The record has successfully added.',
                SUCCESS_RECORD_UPDATED: 'The record has been updated successfully.',
                SUCCESS_RECORD_DELETED: 'The record has been successfully deleted.',
                WAITING_REQUEST: 'Please wait, your request is being processed.',
                WAITING_DATA_RETRIEVAL: 'Please wait, data is being retrieved.'
            },
            validation: {
                pattern:{
                    name:   /^([a-zA-Z ]{1,30})$/,
                    number: /^[0-9]{1,3}$/
                },
                message:{
                    required:           'Required',
                    invalid:            'Invalid Input',
                    first_name:         'First name can have alphabets and space only and can be max 30 characters long',
                    last_name:          'Last name can have alphabets and space only and can be max 30 characters long'
                }
            }
        })
        .run(function($rootScope, CONST) {
            $rootScope.validation = CONST.validation;
        });