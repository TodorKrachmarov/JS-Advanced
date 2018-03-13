(function bookGenerator() {
    let id = 1;
    return function createBook(selector, title, author, isbn) {
        let container = $(selector);
        let div = $('<div>');
        div.attr('id','book' + id);
        let titlePar = $(`<p>${title}</p>`);
        titlePar.addClass('title');
        titlePar.appendTo(div);
        let authorPar = $(`<p>${author}</p>`);
        authorPar.addClass('author');
        authorPar.appendTo(div);
        let isbnPar = $(`<p>${isbn}</p>`);
        isbnPar.addClass('isbn');
        isbnPar.appendTo(div);
        let select = $('<button>Select</button>');
        let deselect = $('<button>Deselect</button>');
        $(select).on('click', function () {
            $(this).parents().css('border', '2px solid blue');
        });
        $(deselect).on('click', function () {
            $(this).parents().css('border', '');
        });
        select.appendTo(div);
        deselect.appendTo(div);
        div.appendTo(container)

       /* $(selector).append($('<div>').attr('id', 'book' + id)
            .append($('<p>').addClass('title').text(title))
            .append($('<p>').addClass('author').text(author))
            .append($('<p>').addClass('isbn').text(isbn))
            .append($('<button>').text('Select').on('click', function () {
                $(this).parent().css('border', '2px solid blue');
            }))
            .append($('<button>').text('Deselect').on('click', function () {
                $(this).parent().css('border', '');
            }))
        );*/
        id++;
    }
}());