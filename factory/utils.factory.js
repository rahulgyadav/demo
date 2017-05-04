(function() {
    'use strict';
    /**
     * Client Factory
     * Created On: 13-05-2016
     */

    //Inject required modules to factory method
    NotificationFactory.$inject = ['CONST', 'toaster', '$http'];

    /**
     * @name NotificationFactory
     * @desc Contains all notification methods to be used in whole application
     * @param notify
     * @constructor
     */
    function NotificationFactory(CONST, toaster, $http)
    {
        var ezNotification = {
            /**
             * @name success
             * @desc Show success message
             * @param message
             */
             success : function(message) {
                toaster.success('Success', message);
            },

            /**
             * @name error
             * @desc Show common error message
             */
            error : function(err) {
                if(!err || err == ''){
                    err = CONST.MSG.COMMON_ERROR;
                }
                toaster.error('Failed', err);
            },

            /**
             * @name warning
             * @desc Show warning message
             * @param message
             */
            warning : function(message) {
                toaster.clear();
                toaster.pop('warning', 'Info', message);
            },

            /**
             * @name waiting
             * @desc Show custom waiting message
             * @param message
             */
            waiting : function(message) {
                toaster.pop('wait', '', null, null);
            },

            /**
             * @name requestWaiting
             * @desc Show request waiting message
             * @param message
             */
            requestWaiting : function() {
                toaster.pop('wait', CONST.MSG.WAITING_REQUEST, null, null);
            },

            /**
             * @name dataRetrievalWaiting
             * @desc Show data retrieval waiting message
             * @param message
             */
            dataRetrievalWaiting : function() {
                toaster.pop('wait', CONST.MSG.WAITING_DATA_RETRIEVAL, null, null);
            },

            /**
             * for clear all toaster messages
             */
            clear : function() {
                toaster.clear();
            }
        };

        return ezNotification;
    }

    /**
     * Associate client factory with SPA module
     */
    angular
        .module('spaApp')
        .factory('NotificationFactory', NotificationFactory)
    })();
