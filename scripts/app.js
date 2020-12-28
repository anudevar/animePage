$(document).ready(function () {
    TopAnimeList();
    seasonAnime();
    videosAnime();
    review();
    recommendations();
    topAllManga();
    magnaPictures();
    forum();
    club();
    charecter();
    person();
    news();
    magazine();
    allUsers();
});

function users() {
}
function allUsers() {
    let main = {
        "url": "https://api.jikan.moe/v3/anime/1/userupdates",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['users'];
        });
    $.each(top, function (key, value) {
        let title = value["username"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes_total"];
        let Date = value["date"];
        let seen = value["episodes_seen"];
        let rating = value["score"];
        let status = value["status"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>User Name: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                Episodes seen: ` + seen + ` <br>
                Status: ` + status + ` <br>
                Date: ` + Date + ` <br>
                 Score: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#userDiv").append(html);
    });
}
function mangaReading() {
    let main = {
        "url": "https://api.jikan.moe/v3/anime/1/userupdates",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['users'];
        });
    $.each(top, function (key, value) {
        let title = value["username"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let episodes = value["episodes_total"];
        let Date = value["date"];
        let seen = value["episodes_seen"];
        let rating = value["score"];
        let status = value["status"];
        let html = (`<article id="allTopAnime">
<div>
                <h3>User Name: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> 
                Episodes available:` + episodes + ` <br>
                Episodes seen: ` + seen + ` <br>
                Status: ` + status + ` <br>
                Date: ` + Date + ` <br>
                 Score: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>
</article>`);
        $("#userDiv").append(html);
    });
}

function magazine() {
    let main = {
        "url": "https://api.jikan.moe/v3/magazine/1",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['manga'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let Date = value["publishing_start"];
        let about = value["synopsis"];
        let score= value["score"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `</h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5>
                Date:` + Date + ` <br>
                Score:` + score + ` <br>
             </h5>
             <p>` + about + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#magazineDiv").append(html);
    });
}

function news(){
    animeNews();
    $('#animeNews').on('click', function () {
        $('#newsDiv').empty();
        animeNews();
    });
    $('#mangaNews').on('click', function () {
        $('#newsDiv').empty();
        mangaNews();
    });
}
function animeNews() {
    let main = {
        "url": "https://api.jikan.moe/v3/anime/1/news",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['articles'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let Author = value["author_name"]
        let Date = value["date"];
        let about = value["intro"];
        let comments= value["comments"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img height="400" width="200" alt="" src="` + imageSource + ` "/>
                <h5> Author:` + Author + ` <br>
                Date:` + Date + ` <br>
             </h5>
             <p>` + about + `</p>
             <p> comments: ` + comments + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#newsDiv").append(html);
    });
}
function mangaNews() {
    let main = {
        "url": "https://api.jikan.moe/v3/manga/1/news",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['articles'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let Author = value["author_name"]
        let Date = value["date"];
        let about = value["intro"];
        let comments= value["comments"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img height="400" width="200" alt="" src="` + imageSource + ` "/>
                <h5> Author:` + Author + ` <br>
                Date:` + Date + ` <br>
             </h5>
             <p>` + about + `</p>
             <p> comments: ` + comments + `</p>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#newsDiv").append(html);
    });
}

function recommendations(){
    recommendationsAnime();
    $('#Animerecommendations').on('click', function () {
        $('#recommendationDiv').empty();
        recommendationsAnime();
    });
    $('#recommendationsManga').on('click', function () {
        $('#recommendationDiv').empty();
       recommendationsManga();
    });
}
function recommendationsAnime() {
    let favorite = {
        "url": "https://api.jikan.moe/v3/anime/1/recommendations",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topFavorite;
    $.ajax(favorite)
        .done(function (response) {
            topFavorite = response['recommendations'];
        });
    $.each(topFavorite, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let recommendationCount = value["recommendation_count"];
        let imageSource = value["image_url"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + ` <br> </h3>
                <img src="` + imageSource + `">
                <h5>
                Recommendation Count: ` + recommendationCount + ` <br>
             </h5>
             <a href="` + moreDetails + `">more details</a>
        </div>`);
        $("#recommendationDiv").append(html);
    });
}
function recommendationsManga() {
    let favorite = {
        "url": "https://api.jikan.moe/v3/manga/1/recommendations",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topFavorite;
    $.ajax(favorite)
        .done(function (response) {
            topFavorite = response['recommendations'];
        });
    $.each(topFavorite, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let recommendationCount = value["recommendation_count"];
        let imageSource = value["image_url"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + ` <br> </h3>
                <img src="` + imageSource + `">
                <h5>
                Recommendation Count: ` + recommendationCount + ` <br>
             </h5>
             <a href="` + moreDetails + `">more details</a>
        </div>`);
        $("#recommendationDiv").append(html);
    });
}

function review(){
    reviewAnime();
    function animeReview(){
        $('#animeReview').on('click', function () {
            $('#reviewDiv').empty();
            reviewAnime();
        });
    }
    function mangaReview(){
        $('#mangaReview').on('click', function () {
            $('#reviewDiv').empty();
            reviewManga();
        });
    }

}
function reviewAnime(number) {
    let favorite = {
        "url": "https://api.jikan.moe/v3/anime/"+number+"/reviews",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topFavorite;
    $.ajax(favorite)
        .done(function (response) {
            topFavorite = response['reviews'];
        });
    $.each(topFavorite, function (key, value) {
        let moreDetails = value["content"];
        let startDate = value["date"];
        let userName = value["reviewer"]["username"];
        let imageSource = value["reviewer"]["image_url"];
        let Scores = value["reviewer"]["scores"]["overall"];
        let StoryScores = value["reviewer"]["scores"]["story"];
        let animationScores = value["reviewer"]["scores"]["animation"];
        let soundScores = value["reviewer"]["scores"]["sound"];
        let characterScores = value["reviewer"]["scores"]["character"];
        let enjoymentScores = value["reviewer"]["scores"]["enjoyment"];
        let html = (`<div class="col-12 float-left" style="width: fit-content; height: auto">
                <h3>User Name: ` + userName + ` <br> </h3>
                <img src="` + imageSource + `">
                <h5>
                Date: ` + startDate + ` <br>
                Scores:<br>
                 Over All:` + Scores + ` , <br>
                 Story:` + StoryScores + ` ,<br>
                 animation: ` + animationScores + `, <br>
            sound : ` + soundScores + `, <br>
            character: ` + characterScores + ` , <br>
            enjoyment: ` + enjoymentScores + ` <br>
             </h5>
             <p>` + moreDetails + `</p>
        </div>`);
        $("#reviewDiv").append(html);
    });
}
function reviewManga(number) {
    let favorite = {
        "url": "https://api.jikan.moe/v3/manga/"+number+"/reviews",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let topFavorite;
    $.ajax(favorite)
        .done(function (response) {
            topFavorite = response['reviews'];
        });
    $.each(topFavorite, function (key, value) {
        let moreDetails = value["content"];
        let startDate = value["date"];
        let userName = value["reviewer"]["username"];
        let imageSource = value["reviewer"]["image_url"];
        let Scores = value["reviewer"]["scores"]["overall"];
        let StoryScores = value["reviewer"]["scores"]["story"];
        let animationScores = value["reviewer"]["scores"]["animation"];
        let soundScores = value["reviewer"]["scores"]["sound"];
        let characterScores = value["reviewer"]["scores"]["character"];
        let enjoymentScores = value["reviewer"]["scores"]["enjoyment"];
        let html = (`<div class="col-12 float-left" style="width: fit-content; height: auto">
                <h3>User Name: ` + userName + ` <br> </h3>
                <img src="` + imageSource + `">
                <h5>
                Date: ` + startDate + ` <br>
                Scores:<br>
                 Over All:` + Scores + ` , <br>
                 Story:` + StoryScores + ` ,<br>
                 animation: ` + animationScores + `, <br>
            sound : ` + soundScores + `, <br>
            character: ` + characterScores + ` , <br>
            enjoyment: ` + enjoymentScores + ` <br>
             </h5>
             <p>` + moreDetails + `</p>
        </div>`);
        $("#reviewDiv").append(html);
    });
}

function videosAnime(){
    videoAnime(1);
    videos();
    episodes();
}
function videoAnime(number) {
    let url = "https://api.jikan.moe/v3/anime/"+number+"/videos";
    let main = {
        "url": url,
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
        let html = (`<div class=" col-12 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <br>
                <img alt="" src="` + imageSource + ` "/>
                <br>
                <br>
                <iframe width="640" height="520" src="` + videoSource + ` ">
</iframe>  
        </div>`);
        $("#videoDiv").append(html);
    });
}
function videos(){
    $('#videos').on('click', function () {
        $('#videoDiv').empty();
        videoAnime(1);
    });
    $('#1').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(1);
    });
    $('#2').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(2);
    });
    $('#3').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(3);
    });
    $('#4').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(4);
    });
    $('#5').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(5);
    });
    $('#6').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(6);
    });
    $('#7').on('click', function () {
        $("#videoDiv").empty();
        videoAnime(7);
    });
    $('#8').on('click', function () {
        $("#videoDiv").empty();
        $("#videoDiv").append("nothing to display");
    });
    $('#9').on('click', function () {
        $("#videoDiv").empty();
        $("#videoDiv").append("nothing to display");
    });
    $('#10').on('click', function () {
        $("#videoDiv").empty();
        $("#videoDiv").append("nothing to display");
    });
}
function episodeAnime(number){
    let main = {
        "url": "https://api.jikan.moe/v3/anime/"+number+"/episodes",
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
        let html = (`<div class="col-12 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  <br></h3>
                <p> Japanese Title: ` + japaneseTitle + `  <br>
                 Roman Title:  ` + romanTitle+ `  <br>
                 Aired From:  ` + AiredFrom + `  <br></p>
                 <br>
                <a href="`+videoSource +`">
                <video  width="800" height="400" controls="controls" src="`+videoSource+`" type="video/mp4">
</video></a>
        </div>`);
        $("#videoDiv").append(html);
    });
}
function episodes(){
    $('#episodes').on('click', function () {
        $('#videoDiv').empty();
        episodeAnime(1);
    });
    $('#1').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(1);
    });
    $('#2').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(2);
    });
    $('#3').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(3);
    });
    $('#4').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(4);
    });
    $('#5').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(5);
    });
    $('#6').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(6);
    });
    $('#7').on('click', function () {
        $("#videoDiv").empty();
        episodeAnime(7);
    });
    $('#8').on('click', function () {
        $("#videoDiv").empty();
        $("#videoDiv").append("nothing to display");
    });
    $('#9').on('click', function () {
        $("#videoDiv").empty();
        $("#videoDiv").append("nothing to display");
    });
    $('#10').on('click', function () {
        $("#videoDiv").empty();
        $("#videoDiv").append("nothing to display");
    });
}


function TopAnimeList() {
    topAnime(1);
    allTopAnimelist();
    allTopAiringList();
    allTopUpcomingList();
    allTopTVList();
    allTopMovieList();
    AllTopOvaList();
    AllTopSpecialsList();
    AllTopPopularList();
    AllTopFavoriteList();
}
function topAnime(number) {
    let url ="https://api.jikan.moe/v3/top/anime/"+number;
    let main = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function allTopAnimelist(){
    $('#allTopAnimeList').on('click', function () {
        $("#topDiv").empty();
        topAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topAnime(10);
        });
}
function topAiringAnime(number) {
let url = "https://api.jikan.moe/v3/top/anime/"+number+"/airing";
    let airing = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function allTopAiringList(){
    $('#allTopAiringList').on('click', function () {
        $("#topDiv").empty();
        topAiringAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topAiringAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            let noDisplayText = (`<p> nothing to display</p>`);
            $('#topDiv').append(noDisplayText);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            let noDisplayText = (`<p> nothing to display</p>`);
            $('#topDiv').append(noDisplayText);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            let noDisplayText = (`<p> nothing to display</p>`);
            $('#topDiv').append(noDisplayText);
        });
}
function topUpcomingAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/upcoming";
    let upcoming = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function allTopUpcomingList(){
    $('#allTopUpcomingList').on('click', function () {
        $('#topDiv').empty();
        topUpcomingAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topUpcomingAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            let noDisplayText = (`<p> nothing to display</p>`);
            $('#topDiv').append(noDisplayText);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            let noDisplayText = (`<p> nothing to display</p>`);
            $('#topDiv').append(noDisplayText);
        });
}
function topTVAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/tv";
    let tv = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function allTopTVList(){
    $('#allTopTVList').on('click', function () {
        $('#topDiv').empty();
        topTVAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topTVAnime(10);
        });
}
function topMovieAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/movie";
    let movie = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function allTopMovieList(){
    $('#allTopMovieList').on('click', function () {
        $('#topDiv').empty();
        topMovieAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(10);
        });
}
function topOVAsAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/ova";
    let ova = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function AllTopOvaList(){
    $('#AllTopOvaList').on('click', function () {
        $('#topDiv').empty();
        topOVAsAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topMovieAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topOVAsAnime(10);
        });
}
function topSpecialAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/special";
    let special = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function AllTopSpecialsList(){
    $('#AllTopSpecialsList').on('click', function () {
        $('#topDiv').empty();
        topSpecialAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topSpecialAnime(10);
        });
}
function topPopularAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/bypopularity";
    let popular = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function AllTopPopularList(){
    $('#AllTopPopularList').on('click', function () {
        $('#topDiv').empty();
        topPopularAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topPopularAnime(10);
        });
}
function topFavoritesAnime(number) {
    let url = "https://api.jikan.moe/v3/top/anime/"+number+"/favorite";
    let favorite = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topDiv").append(html);
    });
}
function AllTopFavoriteList(){
    $('#AllTopFavoriteList').on('click', function () {
        $('#topDiv').empty();
        topFavoritesAnime(1);
    });
        $('#1').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(1);
        });
        $('#2').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(2);
        });
        $('#3').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(3);
        });
        $('#4').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(4);
        });
        $('#5').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(5);
        });
        $('#6').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(7);
        });
        $('#8').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(8);
        });
        $('#9').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(9);
        });
        $('#10').on('click', function () {
            $("#topDiv").empty();
            topFavoritesAnime(10);
        });
}


function topAllManga() {
    topManga(1);
    $('#allManga').on('click', function(){
            $('#allManga').on('click', function () {
                $('#topMagnaDiv').empty();
                topManga(1);
            });
            $('#1').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(1);
            });
            $('#2').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(2);
            });
            $('#3').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(3);
            });
            $('#4').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(4);
            });
            $('#5').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(5);
            });
            $('#6').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(6);
            });
            $('#7').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(7);
            });
            $('#8').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(8);
            });
            $('#9').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(9);
            });
            $('#10').on('click', function () {
                $("#topMagnaDiv").empty();
                topManga(10);
            });
    });

    allTopNovels();
allTopOneshots();
allTopDoujin();
allTopManhwa();
allTopManhua();
allTopPopularManga();
allTopFavoriteManga();
}
/*function loop (i) {
    $.get("https://api.jikan.moe/v3/top/manga/"+i+"/novels", function (response) {
        let top = response['top'];
        if (top.length > 0) {
            loop(i + 1);
        }
        console.log(i);
    });
}
loop(1);*/
function topManga(number) {
   let url = "https://api.jikan.moe/v3/top/manga/"+number;
        let main = {
            "url": url,
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
            let episodes = value["volumes"];
            let startDate = value["start_date"];
            let endDate = value["end_date"];
            let rating = value["score"];
            let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + `">moredetails</a>
        </div>`);
            $("#topMagnaDiv").append(html);
        });
    }
function topNovelsManga(number) {
    let url = "https://api.jikan.moe/v3/top/manga/"+number+"/novels";
    let main = {
        "url": url,
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
        let members = value["members"];
        let type = value["type"];
        let html = (` <table border="1" cellpadding="0" cellspacing="0" width="100%" class="top-ranking-table" id="table"><tbody><tr class="table-header"><td class="rank">Rank</td><td class="title">Title</td><td class="score">Score</td><td class="status">Status</td></tr>
    <tr class="ranking-list">
    <td class="rank" valign="top">
    <span class="rank">` + rank + `</span>
  </td>
    <td class="title word-break">
    <a href="#"style="position: relative;">
      <img width="50" height="70" alt="" border="0" src="` + imageSource + `">
    </a>
    <div class="detail">
            <h3 class="manga_h3"><a href="#" style="position: relative;">` + title + `</a></h3>
      <div class="information">
        ` + type + ` (` + episodes + ` vols)<br>
        ` + startDate + `  - ` + endDate + `<br>
        ` + members + ` members
      </div>
  </td>
    <td class="score"><div><span class="text on score-label score-8">` + rating + `</span></div>
  </td>
   <td>      <a href="` + moreDetails + `">moredetails</a>
</td>
</tr>
</tbody></table>
`);
        $("#topMagnaDiv").append(html);
    });

}
function allTopNovels(){
    $('#allTopNovels').on('click', function () {
        $('#topMagnaDiv').empty();
        topNovelsManga(1);
    });
        $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topNovelsManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topNovelsManga(10);
        });
}
function topOneshotsManga(number) {
    let url = "https://api.jikan.moe/v3/top/manga/"+number+"/oneshots";
    let main = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topMagnaDiv").append(html);
    });
}
function allTopOneshots(){
    $('#allTopOneshots').on('click', function () {
        $('#topMagnaDiv').empty();
        topOneshotsManga(1);
    });
        $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topOneshotsManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topOneshotsManga(10);
    });
}
function topDoujinManga(number) {
    let url = "https://api.jikan.moe/v3/top/manga/"+number+"/doujin"
    let main = {
        "url": url,
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topMagnaDiv").append(html);
    });
}
function allTopDoujin(){
    $('#allTopDoujin').on('click', function () {
        $('#topMagnaDiv').empty();
        topDoujinManga(1);
    });
    $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topDoujinManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topDoujinManga(10);
        });

}
function topManhwaManga(number) {
    let main = {
        "url": "https://api.jikan.moe/v3/top/manga/"+number+"/manhwa",
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topMagnaDiv").append(html);
    });
}
function allTopManhwa(){
    $('#allTopManhwa').on('click', function () {
        $('#topMagnaDiv').empty();
        topManhwaManga(1);
    });
        $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topManhwaManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhwaManga(10);
        });
}
function topManhuaManga(number) {
    let main = {
        "url": "https://api.jikan.moe/v3/top/manga/"+number+"/manhua",
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topMagnaDiv").append(html);
    });
}
function allTopManhua(){
    $('#allTopManhua').on('click', function () {
        $('#topMagnaDiv').empty();
        topManhuaManga(1);
    });
        $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topManhuaManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topManhuaManga(10);
        });
}
function topPopularManga(number) {
    let main = {
        "url": "https://api.jikan.moe/v3/top/manga/"+number+"/bypopularity",
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topMagnaDiv").append(html);
    });
}
function allTopPopularManga(){
    $('#allTopPopular').on('click', function () {
        $('#topMagnaDiv').empty();
        topPopularManga(1);
    });
    $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topPopularManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topPopularManga(10);
        });
}
function topfavoriteManga(number) {
    let main = {
        "url": "https://api.jikan.moe/v3/top/manga/"+number+"/favorite",
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Episodes available:` + episodes + ` <br>
                start date: ` + startDate + ` <br>
                end date: ` + endDate + ` <br>
                 Rating: ` + rating + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#topMagnaDiv").append(html);
    });
}
function allTopFavoriteManga(){
    $('#allTopFavorite').on('click', function () {
        $('#topMagnaDiv').empty();
        topfavoriteManga(1);
    });
    $('#1').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(1);
        });
        $('#2').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(2);
        });
        $('#3').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(3);
        });
        $('#4').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(4);
        });
        $('#5').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(5);
        });
        $('#6').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(6);
        });
        $('#7').on('click', function () {
            $("#topDiv").empty();
            topfavoriteManga(7);
        });
        $('#8').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(8);
        });
        $('#9').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(9);
        });
        $('#10').on('click', function () {
            $("#topMagnaDiv").empty();
            topfavoriteManga(10);
        });

}

function forum(){
    animeForum(1);
    $('#animeForum').on('click', function () {
        $('#forumDiv').empty();
        animeForum(1);
        $('#1').on('click', function () {
            $("#forumDiv").empty();
            animeForum(1);
        });
        $('#2').on('click', function () {
            $("#forumDiv").empty();
            animeForum(2);
        });
        $('#3').on('click', function () {
            $("#forumDiv").empty();
            animeForum(3);
        });
        $('#4').on('click', function () {
            $("#forumDiv").empty();
            animeForum(4);
        });
        $('#5').on('click', function () {
            $("#forumDiv").empty();
            animeForum(5);
        });
        $('#6').on('click', function () {
            $("#forumDiv").empty();
            animeForum(6);
        });
        $('#7').on('click', function () {
            $("#forumDiv").empty();
            animeForum(7);
        });
        $('#8').on('click', function () {
            $("#forumDiv").empty();
            animeForum(8);
        });
        $('#9').on('click', function () {
            $("#forumDiv").empty();
            animeForum(9);
        });
        $('#10').on('click', function () {
            $("#forumDiv").empty();
            animeForum(10);
        });
    });
    $('#mangaForum').on('click', function () {
        $('#forumDiv').empty();
        mangaForum(1);
        $('#1').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(1);
        });
        $('#2').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(2);
        });
        $('#3').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(3);
        });
        $('#4').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(4);
        });
        $('#5').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(5);
        });
        $('#6').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(6);
        });
        $('#7').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(7);
        });
        $('#8').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(8);
        });
        $('#9').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(9);
        });
        $('#10').on('click', function () {
            $("#forumDiv").empty();
            mangaForum(10);
        });
    });
}
function mangaForum(number) {
   let url = "https://api.jikan.moe/v3/manga/"+number+"/forum";
    let main = {
        "url": url,
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['topics'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let startDate = value["date_posted"];
        let Author = value["author_name"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 300px">
                <h3>Title: ` + title + `  </h3>
                <h5> 
                Author Name:` + Author + ` <br>
                Posted Date: ` + startDate + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#forumDiv").append(html);
    });
}
function animeForum(number) {
    let main = {
        "url": "https://api.jikan.moe/v3/anime/"+number+"/forum",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['topics'];
        });
    $.each(top, function (key, value) {
        let title = value["title"];
        let moreDetails = value["url"];
        let startDate = value["date_posted"];
        let Author = value["author_name"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 300px">
                <h3>Title: ` + title + `  </h3>
                <h5> 
                Author Name:` + Author + ` <br>
                Posted Date: ` + startDate + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#forumDiv").append(html);
    });
}

function club(){
    clubsList();
    $('#clubs').on('click', function () {
        $('#clubsDiv').empty();
        clubsList();
    });
    $('#members').on('click', function () {
        $('#clubsDiv').empty();
        members();
    });
}
function clubsList() {
    let main = {
        "url": "https://api.jikan.moe/v3/club/1",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main1 = {
        "url": "https://api.jikan.moe/v3/club/2",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main1).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main2 = {
        "url": "https://api.jikan.moe/v3/club/3",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main2).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main3 = {
        "url": "https://api.jikan.moe/v3/club/4",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main3).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main4 = {
        "url": "https://api.jikan.moe/v3/club/5",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main4).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img height="400" width="200" alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main5 = {
        "url": "https://api.jikan.moe/v3/club/6",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main5).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main6 = {
        "url": "https://api.jikan.moe/v3/club/7",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main6).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
    let main7 = {
        "url": "https://api.jikan.moe/v3/club/8",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    $.ajax(main7).done(function(response) {
        let title = response["title"];
        let moreDetails = response["url"];
        let imageSource = response["image_url"];
        let members = response["members_count"];
        let category = response["category"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + `"/>
                <h5> Members:` + members + ` <br>
                Categories :` + category + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
}
function members() {
    let main = {
        "url": "https://api.jikan.moe/v3/club/1/members",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response["members"];
        });
    $.each(top, function (key, value) {
        let title = value["username"];
        let moreDetails = value["url"];
        let imageSource = value["image_url"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 500px">
                <h3>User Name: ` + title + `  </h3>
                <img alt="" src="https://cdn.myanimelist.net/`+ imageSource +`"/>
                <br>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#clubsDiv").append(html);
    });
}

function magnaPictures() {
    let main = {
        "url": "https://api.jikan.moe/v3/manga/1/pictures",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['pictures'];
        });
    $.each(top, function (key, value) {
        let moreDetails = value["large"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <img src="` + moreDetails + `"/>
                <br>
        </div>`);
        $("#picturesDiv").append(html);
    });
}

function charecter(){
    charecterPictures(1);
    $('#picturesCharecters').on('click', function () {
        $('#charecterDiv').empty();
        charecterPictures(1);
        $('#1').on('click', function () {
            $("#charecterDiv").empty();
            charecterPictures(1);
        });
        $('#2').on('click', function () {
            $("#charecterDiv").empty();
            charecterPictures(2);
        });
        $('#3').on('click', function () {
            $("#forumDiv").empty();
            charecterPictures(3);
        });
        $('#4').on('click', function () {
            $("#charecterDiv").empty();
            charecterPictures(4);
        });
        $('#5').on('click', function () {
            $("#charecterDiv").empty();
            charecterPictures(5);
        });
        $('#6').on('click', function () {
            $("#charecterDiv").empty();
            charecterPictures(6);
        });
        $('#7').on('click', function () {
            $("#charecterDiv").empty();
            charecterPictures(7);
        });
    });
    $('#topCharecters').on('click', function () {
        $('#charecterDiv').empty();
        topCharecters();
    });
}
function topCharecters() {
    let main = {
        "url": "https://api.jikan.moe/v3/top/characters",
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
        let kanji = value["name_kanji"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Kanji Name:` + kanji + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#charecterDiv").append(html);
    });
}
function charecterPictures(number) {
    let pageNumberHtml = (`<div className="pageFooter" style="position:absolute; bottom:0; textAlign:center; width:100%;">
        <span id="1">1,&nbsp;&nbsp;</span>
        <span id="2">2,&nbsp;&nbsp;</span>
        <span id="3">3,&nbsp;&nbsp;</span>
        <span id="4">4,&nbsp;&nbsp;</span>
        <span id="5">5,&nbsp;&nbsp;</span>
        <span id="6">6,&nbsp;&nbsp;</span>
        <span id="7">7,&nbsp;&nbsp;</span>
    </div>`);
    $('#pageNumberDisplay').append(pageNumberHtml);

    let main = {
        "url": "https://api.jikan.moe/v3/character/"+number+"/pictures",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['pictures'];
        });
    $.each(top, function (key, value) {
        let moreDetails = value["large"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 500px">
                <img src="` + moreDetails + `"/>
                <br>
        </div>`);
        $("#charecterDiv").append(html);
    });
}

function person(){
    peoplePictures();
    $('#picturesPerson').on('click', function () {
        $('#personDiv').empty();
        peoplePictures();
    });
    $('#topPerson').on('click', function () {
        $('#personDiv').empty();
        topperson();
    });
}
function topperson() {
    let main = {
        "url": "https://api.jikan.moe/v3/top/people",
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
        let kanji = value["name_kanji"];
        let birthday = value["birthday"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 600px">
                <h3>Title: ` + title + `  </h3>
                <img alt="" src="` + imageSource + ` "/>
                <h5> Rank:` + rank + ` <br>
                Birthday: ` + birthday + ` <br>
                Kanji Name:` + kanji + ` <br>
             </h5>
             <a href="` + moreDetails + ` ">moredetails</a>
        </div>`);
        $("#personDiv").append(html);
    });
}
function peoplePictures() {
    let main = {
        "url": "https://api.jikan.moe/v3/person/1/pictures",
        "method": "GET",
        "timeout": 0,
        "dataType": "json",
        "async": false,
    };
    let top;
    $.ajax(main)
        .done(function (response) {
            top = response['pictures'];
        });
    $.each(top, function (key, value) {
        let moreDetails = value["large"];
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 500px">
                <img src="` + moreDetails + `"/>
                <br>
        </div>`);
        $("#personDiv").append(html);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: auto">
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
        </div>`);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
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
        </div>`);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
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
        </div>`);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
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
        </div>`);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
                <h3>year: ` + title + `  </h3>
                <h5> 
                seasons :` + moreDetails + ` <br>
             </h5>
        </div>`);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
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
        </div>`);
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
        let html = (`<div class="col-sm-6 col-md-3 col-lg-4 float-left" style="width: fit-content; height: 800px">
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
        </div>`);
        $("#seasonAnimeDiv").append(html);
    });
}

//sample variable takking
//let takeData = x['producers']['name'];

