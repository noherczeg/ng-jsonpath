describe('ng-jsonpath', function () {

    var json = {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99
                },
                {
                    "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99
                },
                {
                    "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8"
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95
            }
        }
    };

    beforeEach(module('ngJSONPath'));

    it('should have jsonPath as a constant defined', inject(function (jsonPath) {
        expect(jsonPath).toBeDefined();
    }));

    it('should be able to select a book by the ISBN id', inject(function (jsonPath) {
        var selected = jsonPath(json, '$..book[?(@.isbn=="0-395-19395-8")]');
        var expected = [{
            'category': 'fiction',
            'author': 'J. R. R. Tolkien',
            'title': 'The Lord of the Rings',
            'isbn': '0-395-19395-8'
        }];

        expect(selected).toEqual(expected);
    }));

    it('should be able to select the authors of all books in the store', inject(function (jsonPath) {
        var selected = jsonPath(json, '$.store.book[*].author');
        var expected = ['Nigel Rees', 'Evelyn Waugh', 'Herman Melville', 'J. R. R. Tolkien'];

        expect(selected).toEqual(expected);
    }));

    it('should be able to select all authors', inject(function (jsonPath) {
        var selected = jsonPath(json, '$..author');
        var expected = ['Nigel Rees', 'Evelyn Waugh', 'Herman Melville', 'J. R. R. Tolkien'];

        expect(selected).toEqual(expected);
    }));

    it('should be able to select the price of everything in the store', inject(function (jsonPath) {
        var selected = jsonPath(json, '$.store..price');
        var expected = [8.95, 12.99, 8.99, 19.95];

        expect(selected).toEqual(expected);
    }));

    it('should be able to select the third book', inject(function (jsonPath) {
        var selected = jsonPath(json, '$..book[2]');
        var expected = [{
            "category": "fiction",
            "author": "Herman Melville",
            "title": "Moby Dick",
            "isbn": "0-553-21311-3",
            "price": 8.99
        }];

        expect(selected).toEqual(expected);
    }));

    it('should be able to select all books with isbn number', inject(function (jsonPath) {
        var selected = jsonPath(json, '$..book[?(@.isbn)]');
        var expected = [{
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8"
            }
        ];

        expect(selected).toEqual(expected);
    }));

    it('should be able to select all books cheaper than 10', inject(function (jsonPath) {
        var selected = jsonPath(json, '$..book[?(@.price<10)]');
        var expected = [{
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99
            }
        ];

        expect(selected).toEqual(expected);
    }));

});
