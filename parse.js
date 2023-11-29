function parseURL(url) {
    var query = url.search;
    var pairs = query.substr(1).split("&");
    var returnValue = { };
    for (var i=0; i<pairs.length; i++) {
        var keyAndValue[0];
        var value = keyAndValue[1].replace(/\+g, " ");
        returnValue[key] = value;
    }
    return returnValue;
}
