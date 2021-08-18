function wikiParser(selector) {
    let InitialText = $(selector).text();

    //replace text
    InitialText = replace(InitialText, /=(.+?)=/, 'h1'); // Heading 1
    InitialText = replace(InitialText, /==(.+?)==/, 'h2'); // Heading 2
    InitialText = replace(InitialText, /===(.+?)===/, 'h3'); // Heading 3
    InitialText = replace(InitialText, /''(.+?)''/, 'i'); // Italics
    InitialText = replace(InitialText, /'''(.+?)'''/, 'b'); // Bold
    // replace links
    InitialText = replaceLinks(InitialText);


    $(selector)[0].innerHTML = InitialText;

    //functions
    function replace(input, pattern, tag) {
        let regex = new RegExp(pattern);
        while (input.search(regex) > -1) {
            input = input.replace(regex, '<' + tag + '>' + input.match(regex)[1] + '</' + tag + '>');
        }
        return input;
    }

    function replaceLinks(input) {
        let regex = new RegExp(/\[\[([^\[\]]+?)\|(.+?)\]\]/);
        while (input.search(regex) > -1) {
            let link = input.match(regex)[1];
            let desc = input.match(regex)[2];
            input = input.replace(regex, '<a href="/wiki/' + link + '">' + desc + '</a>');
        }
        regex = new RegExp(/\[\[([^\[\]]+?)\]\]/);
        while (input.search(regex) > -1) {
            let group = input.match(regex)[1];
            input = input.replace(regex, '<a href="/wiki/' + group + '">' + group + '</a>');
        }
        return input;
    }
}