function createBook(selector, bookTitle, authorName, isbn) {
    // TODO
    let bookGenerator = (function() {
        let id = 1;
        return function(selector, titleName, authorName, isbn) {
            var container = $(selector);
            var bookContainer = $('<div>');

            //add id and css of bookcontainer
            bookContainer.attr("id", `book${id}`);
            bookContainer.css("border", "none");

            //add all <p>
            bookContainer.append('<p class="title">', titleName, '</p>');
            bookContainer.append('<p class="author">', authorName, '</p>');
            bookContainer.append('<p class="isbn">', isbn, '</p>');

            var selectBtn = $("<button>Select</button>");
            var deselectBtn = $("<button>Deselect</button>");

            //add buttons
            bookContainer.append(selectBtn);
            bookContainer.append(deselectBtn);
            bookContainer.appendTo(container);

            //modify the button selection style functionality
            selectBtn.on("click", () => bookContainer.css("border", "2px solid blue"));
            deselectBtn.on("click", () => bookContainer.css("border", "none"));

            //increment id everytime we create a new book
            id++;
        };
    }());
    bookGenerator(selector, bookTitle, authorName, isbn);
    bookGenerator(selector, bookTitle, authorName, isbn);
    bookGenerator(selector, bookTitle, authorName, isbn);

};