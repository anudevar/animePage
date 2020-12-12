$(document).ready(function() {
let main = {
        "url": "https://api.jikan.moe/v3/anime/1",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let data;
    $.ajax(main).done(function(data) {
            console.log(data);
        });
});