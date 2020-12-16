$(document).ready(function () {
    TopAnimeList();
    seasonAnime();
    videosAnime();
});
function videosAnime(){
    videoAnime();
    $('#videos').on('click', function () {
        $('#videoDiv').empty();
       videoAnime();
    });
    $('#episodes').on('click', function () {
        $('#videoDiv').empty();
        episodeAnime();
    });
}
function videoAnime() {
    let main = {
        "url": "https://api.jikan.moe/v3/anime/1/videos",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['promo'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let imageSource = value["image_url"];
        let videoSource = value["video_url"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <br>
                <video controls width="250">

    <source src="` + videoSource + `"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
        </div>
</article>`);
        $("#videoDiv").append(html);
    });
}
function episodeAnime() {
    let main = {
        "url": "https://api.jikan.moe/v3/anime/1/episodes",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['episodes'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let japaneseTitle = value["title_japanese"];
        let romanTitle = value["title_romanji"];
        let AiredFrom = value["aired"];
        let videoSource = value["video_url"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  <br></h3>
                <p> Japanese Title: ` + japaneseTitle + `  <br>
                 Roman Title:  ` + romanTitle+ `  <br>
                 Aired From:  ` + AiredFrom + `  <br></p>
                 <br>
                <video controls width="250">

    <source src="` + videoSource + `"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>
        </div>
</article>`);
        $("#videoDiv").append(html);
    });
}


function TopAnimeList() {
    topAnime();
    $('#allTopAnimeList').on('click', function () {
        $('#topDiv').empty();
        topAnime();
    });
    $('#allTopAiringList').on('click', function () {
        $('#topDiv').empty();
        topAiringAnime();
    });
    $('#allTopUpcomingList').on('click', function () {
        $('#topDiv').empty();
        topUpcomingAnime();
    });
    $('#allTopTVList').on('click', function () {
        $('#topDiv').empty();
        topTVAnime();
    });
    $('#allTopMovieList').on('click', function () {
        $('#topDiv').empty();
        topMovieAnime();
    });
    $('#AllTopOvaList').on('click', function () {
        $('#topDiv').empty();
        topOVAsAnime();
    });
    $('#AllTopSpecialsList').on('click', function () {
        $('#topDiv').empty();
        topSpecialAnime();
    });
    $('#AllTopPopularList').on('click', function () {
        $('#topDiv').empty();
        topPopularAnime();
    });
    $('#AllTopFavoriteList').on('click', function () {
        $('#topDiv').empty();
        topFavoritesAnime();
    });
}

function topAnime() {
    let main = {
        "url": "https://api.jikan.moe/v3/top/anime",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['top'];
        });
    $.each(top, function (key, value) {
        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="allTopAnime">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topAiringAnime() {
    let airing = {
        "url": "https://api.jikan.moe/v3/top/anime/1/airing",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topAiring;
    $.ajax(airing)
        .done(function (response) {
            topAiring = response['top'];
        });
    $.each(topAiring, function (key, value) {
        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="allTopAiring">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topUpcomingAnime() {
    let upcoming = {
        "url": "https://api.jikan.moe/v3/top/anime/1/upcoming",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topUpcoming;
    $.ajax(upcoming)
        .done(function (response) {
            topUpcoming = response['top'];
        });
    $.each(topUpcoming, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="allTopUpcoming">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topTVAnime() {
    let tv = {
        "url": "https://api.jikan.moe/v3/top/anime/1/tv",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topTV;
    $.ajax(tv)
        .done(function (response) {
            topTV = response['top'];
        });
    $.each(topTV, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="allTopTV">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topMovieAnime() {
    let movie = {
        "url": "https://api.jikan.moe/v3/top/anime/1/movie",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topMovie;
    $.ajax(movie)
        .done(function (response) {
            topMovie = response['top'];
        });
    $.each(topMovie, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="allTopMovie">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topOVAsAnime() {
    let ova = {
        "url": "https://api.jikan.moe/v3/top/anime/1/ova",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topOva;
    $.ajax(ova)
        .done(function (response) {
            topOva = response['top'];
        });
    $.each(topOva, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="AllTopOva">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topSpecialAnime() {
    let special = {
        "url": "https://api.jikan.moe/v3/top/anime/1/special",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topSpecial;
    $.ajax(special)
        .done(function (response) {
            topSpecial = response['top'];
        });
    $.each(topSpecial, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="AllTopSpecials">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topPopularAnime() {
    let popular = {
        "url": "https://api.jikan.moe/v3/top/anime/1/bypopularity",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topPopular;
    $.ajax(popular)
        .done(function (response) {
            topPopular = response['top'];
        });
    $.each(topPopular, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="AllTopPopular">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}

function topFavoritesAnime() {
    let favorite = {
        "url": "https://api.jikan.moe/v3/top/anime/1/favorite",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topFavorite;
    $.ajax(favorite)
        .done(function (response) {
            topFavorite = response['top'];
        });
    $.each(topFavorite, function (key, value) {

        let rank = value["rank"];
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["start_date"];
        let endDate = value["end_date"];
        let rating = value["score"];
        let html = (`<article id="AllTopFavorite">
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#topDiv").append(html);
    });
}


function seasonAnime() {
    Summer2020();
    $('#Summer').on('click', function () {
        $('#seasonAnimeDiv').empty();
        Summer2020();
    });
    $('#fall').on('click', function () {
        $('#seasonAnimeDiv').empty();
        Fall2020();
    });
    $('#winter').on('click', function () {
        $('#seasonAnimeDiv').empty();
        winter2020();
    });
    $('#spring').on('click', function () {
        $('#seasonAnimeDiv').empty();
        spring2020();
    });
    $('#archive').on('click', function () {
        $('#seasonAnimeDiv').empty();
        SeaasonArchive();
    });
    $('#later').on('click', function () {
        $('#seasonAnimeDiv').empty();
        SeaasonLater();
    });
    $('#schedule').on('click', function () {
        $('#seasonAnimeDiv').empty();
        SeaasonSchedule();
    });
}

function Summer2020() {
    let season = {
        "url": "https://api.jikan.moe/v3/season/2020/summer",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['anime'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["airing_start"];
        let details = value["synopsis"];
        let rating = value["score"];
        let source = value["source"]
        let producers = value["producers"]["name"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                Source : ` + source + ` <br>
                 Rating: ` + rating + ` <br>
                 Producers: ` + producers + ` <br>
             </h5>
             <p>` + details + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

function Fall2020() {
    let season = {
        "url": "https://api.jikan.moe/v3/season/2020/fall",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['anime'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["airing_start"];
        let details = value["synopsis"];
        let rating = value["score"];
        let source = value["source"]
        let producers = value["producers"]["name"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                Source : ` + source + ` <br>
                 Rating: ` + rating + ` <br>
                 Producers: ` + producers + ` <br>
             </h5>
             <p>` + details + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

function winter2020() {
    let season = {
        "url": "https://api.jikan.moe/v3/season/2020/winter",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['anime'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["airing_start"];
        let details = value["synopsis"];
        let rating = value["score"];
        let source = value["source"]
        let producers = value["producers"]["name"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                Source : ` + source + ` <br>
                 Rating: ` + rating + ` <br>
                 Producers: ` + producers + ` <br>
             </h5>
             <p>` + details + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

function spring2020() {
    let season = {
        "url": "https://api.jikan.moe/v3/season/2020/spring",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['anime'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["year"];
        let moreDetails = value["seasons"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["airing_start"];
        let details = value["synopsis"];
        let rating = value["score"];
        let source = value["source"]
        let producers = value["producers"]["name"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                Source : ` + source + ` <br>
                 Rating: ` + rating + ` <br>
                 Producers: ` + producers + ` <br>
             </h5>
             <p>` + details + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

function SeaasonArchive() {
    let season = {
        "url": "https://api.jikan.moe/v3/season/archive",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['archive'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["year"];
        let moreDetails = value["seasons"];
        let html = (`<article>
<div>
                <h3>year: ` + title + `  </h3>
                <h5> 
                seasons :` + moreDetails + ` <br>
             </h5>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

function SeaasonSchedule() {
    let season = {
        "url": "https://api.jikan.moe/v3/schedule/monday",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['monday'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["airing_start"];
        let details = value["synopsis"];
        let rating = value["score"];
        let source = value["source"]
        let producers = value["producers"]["name"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                Source : ` + source + ` <br>
                 Rating: ` + rating + ` <br>
                 Producers: ` + producers + ` <br>
             </h5>
             <p>` + details + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

function SeaasonLater() {
    let season = {
        "url": "https://api.jikan.moe/v3/season/later",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let seasonSelected;
    $.ajax(season)
        .done(function (response) {
            seasonSelected = response['anime'];
        });
    $.each(seasonSelected, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes"];
        let startDate = value["airing_start"];
        let details = value["synopsis"];
        let rating = value["score"];
        let source = value["source"]
        let producers = value["producers"]["name"];
        let html = (`<article>
<div>
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                Source : ` + source + ` <br>
                 Rating: ` + rating + ` <br>
                 Producers: ` + producers + ` <br>
             </h5>
             <p>` + details + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#seasonAnimeDiv").append(html);
    });
}

//sample variable takking
//let takeData = x['producers']['name'];