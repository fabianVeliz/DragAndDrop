(function () {
  'use strict';

  angular.module('app', ['shapeshift'])
    .controller('AppController', ['$scope', '$timeout', function ($scope, $timeout, $rootScope) {
      var vm = this;

      // Settings
      vm.alertOpts = {
        dragWhitelistClass: 'draggable',
        enableCrossDrop: false,
        minColumns: 1,
        colWidth: 1,
        gutterX: 0,
        gutterY: 0,
        paddingX: 0,
        paddingY: 0,
        colWidth: 0,
        align: "left"
      };

      vm.chartOpts = {
        dragWhitelistClass: 'draggable',
        enableCrossDrop: false,
        minColumns: 5,
        colWidth: 5,
        gutterX: 0,
        gutterY: 0,
        paddingX: 0,
        paddingY: 0,
        colWidth: 0,
        align: "left"
      }; 


      // Fake data   

      vm.alerts = [
        {
          content: 'Alert wrapper 1',
          type: 'alert',
          position: [1, 1],
          fixed: false,
          id: '1'
        }, 
        {
          content: 'Alert wrapper 2',
          type: 'alert',
          position: [2, 1],
          fixed: false,
          id: '2'
        },
        {
          content: 'Alert wrapper 3',
          type: 'alert',
          position: [3, 1],
          fixed: false,
          id: '3'
        },
        {
          content: 'Alert wrapper 4',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '4'
        },
        {
          content: 'Alert wrapper 5',
          type: 'alert',
          position: [5, 1],
          fixed: false,
          id: '5'
        }, 
        {
          content: 'Alert wrapper 6',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '6'
        },  
        {
          content: 'Alert wrapper 7',
          type: 'alert',
          position: [1, 1],
          fixed: false,
          id: '7'
        }, 
        {
          content: 'Alert wrapper 8',
          type: 'alert',
          position: [2, 1],
          fixed: false,
          id: '8'
        },
        {
          content: 'Alert wrapper 9',
          type: 'alert',
          position: [3, 1],
          fixed: false,
          id: '9'
        },
        {
          content: 'Alert wrapper 10',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '10'
        },
        {
          content: 'Alert wrapper 11',
          type: 'alert',
          position: [5, 1],
          fixed: false,
          id: '11'
        }, 
        {
          content: 'Alert wrapper 12',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '12'
        },
        {
          content: 'Alert wrapper 13',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '13'
        },  

        {
          content: 'Alert wrapper 14',
          type: 'alert',
          position: [1, 1],
          fixed: false,
          id: '14'
        }, 
        {
          content: 'Alert wrapper 15',
          type: 'alert',
          position: [2, 1],
          fixed: false,
          id: '15'
        },
        {
          content: 'Alert wrapper 16',
          type: 'alert',
          position: [3, 1],
          fixed: false,
          id: '16'
        },
        {
          content: 'Alert wrapper 17',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '17'
        },
        {
          content: 'Alert wrapper 18',
          type: 'alert',
          position: [5, 1],
          fixed: false,
          id: '18'
        }, 
        {
          content: 'Alert wrapper 19',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '19'
        },     
        {
          content: 'Alert wrapper 20',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '20'
        },
      ];

      vm.charts = [  
        {
          content: 'Chart wrapper 1',
          type: 'chart',
          position: [1, 1],
          fixed: false,
          id: '1'
        },   
        {
          content: 'Widget wrapper 1',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '2'
        },                
        {
          content: 'Widget wrapper 2',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '4'
        },                
        {
          content: 'Widget wrapper 3',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '5'
        },                
        {
          content: 'Widget wrapper 4',
          type: 'alert',
          position: [6, 1],
          fixed: false,
          id: '6'
        },
        {
          content: 'Widget wrapper 5',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '7'
        },
        {
          content: 'Widget wrapper 6',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '8'
        },
        {
          content: 'Widget wrapper 7',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '9'
        },
        {
          content: 'Widget wrapper 8',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '10'
        },
        {
          content: 'Widget wrapper 9',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '11'
        },
        {
          content: 'Widget wrapper 10',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '12'
        },
        {
          content: 'Chart wrapper 2',
          type: 'chart',
          position: [1, 1],
          fixed: false,
          id: '3'
        },
        {
          content: 'Widget wrapper 11',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '13'
        },
        {
          content: 'Widget wrapper 12',
          type: 'alert',
          position: [4, 1],
          fixed: false,
          id: '14'
        } 
      ];               

    }]);
})();
