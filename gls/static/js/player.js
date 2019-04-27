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

    //getting the json data
    _handleRequest () {
        this._createRequest()
        .then((result) => {
            this._dataupload(result);
        },
        (error) => {
            console.log(error);
        });
    }

    //updating the data in tool-tip
    _dataupload (result) {
        result.steps.forEach((step)=>{
            this.$element.find(step.selector).attr('title',step.content);
        });
    }
}

function attach(selector = ".guide") {
    document.querySelectorAll(selector).forEach(el => {
        return new Guide(el);
    });
}

attach();