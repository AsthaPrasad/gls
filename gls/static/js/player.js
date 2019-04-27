//ADD YOUR CODE HERE.

class Guide {
    constructor(element) {
        this.$element = $(element);
        this._init();
    }

    _init() {
        this._handleRequest();
    }

    _createRequest () {
        const ajaxOptions = {
        method:'GET',
        url: this.$element.data('url'),
        data: '',
        dataType: 'json'
        };
        return $.ajax(ajaxOptions);
    }

    _handleRequest () {
        this._createRequest()
        .then((result) => {
           console.log(result);
        },
        (error) => {
            console.log(error);
        });
    }

}

function attach(selector = ".guide") {
    document.querySelectorAll(selector).forEach(el => {
        return new Guide(el);
    });
}

attach();