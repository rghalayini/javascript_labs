function domSearch(select, isCaseSensitive) {
    let container = $(select)

    // add class to the main div #content, which is the container
    container.addClass("items_controls");

    //create new 3 divs: add, search, and result
    var add_controls = $('<div>');
    var search_controls = $('<div>');
    var result_controls = $('<div>');

    //add their respective classes
    add_controls.addClass("add_controls");
    search_controls.addClass("search_controls");
    result_controls.addClass("result_controls");



    //add the input to the add and search controls
    add_controls.append('<lable>Enter text: <input>');
    search_controls.append($('<lable>')
        .text('Search: ')
        .append($('<input>')
            .on('input', searchList)));

    //add the button to the add controls
    add_controls.append($('<a>')
        .addClass("button")
        .css("display", "inline-block")
        .text("Add")
        .on("click", addToList));

    // search_controls.append($('<a>')
    //     .addClass("button")
    //     .css("display", "inline-block")
    //     .text("Add")
    //     .on("click", searchList));


    //create the list <ul> to be appended to result-controls and create their class
    var items_list = $('<ul>');
    items_list.addClass("items-list");

    //append the list to result-controls
    result_controls.append(items_list)

    //append add, search and results to #content
    $('#content').append(add_controls);
    $('#content').append(search_controls);
    $('#content').append(result_controls);


    //entering text
    function addToList() {
        let text = $('.add_controls lable input').val();
        let list_item = $('<li>');

        list_item.addClass("list-item");
        list_item.append($('<a>')
            .addClass('button')
            .text('X')
            .on('click', deleteList));
        list_item.append(`<strong>${text}</strong>`);

        list_item.appendTo(items_list);
        $('.add_controls lable input').val("");
    }

    //delete function
    function deleteList() {
        $(this).parent().remove();
    }

    //search function
    function searchList() {
        let searchText = $('.search_controls lable input').val();

        if (isCaseSensitive) {
            $('.list-item strong')
                .toArray()
                .filter(item => item.textContent.indexOf(searchText) === -1)
                .forEach(item => item.parentNode.style.color = "red");
        } else {
            $('.list-item strong')
                .toArray()
                .filter(item => item.textContent.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
                .forEach(item => item.parentNode.style.color = "red");
        }
    };
};