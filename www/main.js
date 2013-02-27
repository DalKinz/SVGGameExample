var game = {
    InitialWidth: 1280,
    InitialHeight: 800,
    Width: window.innerWidth,
    Height: window.innerHeight
}

$(window).resize(function () {
    var lion = $("#lion")[0];
    lion.setAttribute("transform", "scale(2)")
    lion.transform.baseVal.getItem(0).setScale(5,5);
    

    //$("#elephant")
    //$("#giraffe")
    //$("#ibex")
    //$("#lion")
    //$("#lioncub")
    //$("#rhino")

    game.Width = window.innerWidth;
    game.Height = window.innerHeight;
    
    //resize(game.Width, game.Height);
});

$(document).ready(function () {

    $("body").css("background-image", "url(resources/images/svg/backgrounds/house-with-snow.svg)");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-size", "cover");
});


function resize(width, height) {
    //$("#gameArea").width = width;
    //$("#gameArea").height = height;

    //$("#gameArea").prop({
    //    width: width,
    //    height: height
    //});

    //$("#gameCanvas")[0].width = width;
    //$("#gameCanvas")[0].height = height;

    game.ScaleFactorX = game.Width / game.InitialWidth;
    game.ScaleFactorY = game.Height / game.InitialHeight;
}

