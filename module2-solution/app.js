(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {

    var controller = this;
    controller.items = ShoppingListCheckOffService.getToBuyItems();

    controller.buyItem = function(index) {

      ShoppingListCheckOffService.buyItem(index)

    }

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var controller = this;
    controller.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {

    var service = this;

    var toBuyItems = [{ name: "cookies", quantity: 10 },
      { name: "apples", quantity: 13 },
      { name: "oranges", quantity: 15 },
      { name: "bananas", quantity: 12 },
      { name: "grapes", quantity: 20 }
    ];

    var boughtItems = [];

    service.getToBuyItems = function() {

      return toBuyItems;

    };

    service.buyItem = function(index) {

      boughtItems.push(toBuyItems.splice(index, 1)[0]);

    }

    service.getBoughtItems = function() {

      return boughtItems;

    };

  }

})();
