[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/noherczeg/ng-jsonpath.svg?branch=master)](https://travis-ci.org/noherczeg/ng-jsonpath)

# ng-jsonpath

An angularjs module wrapper for jsonpath

## Installing
Install via bower

```bower install ng-jsonpath```

Require it into your application (after Angular)

```<script src="ng-jsonpath.min.js"></script>```

Add the module as a dependency to your app

```js
var app = angular.module('youOwnApp', ['ngJSONPath']);
```

And inject it into your controller like so!

```js
(function () {
    'use strict';

    angular
        .module('app.module')
        .controller('myController', myController);

    myController.$inject = ['jsonPath'];

    function myController(jsonPath) {
        /*jshint validthis:true */
        var vm = this;
        var json = {/**/};

        vm.cheapBooks = jsonPath(json, '$..book[?(@.price<10)]');
    }

})();
```

For additional examples please check the test folder!
