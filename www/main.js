var game = {
    InitialWidth: 1280,
    InitialHeight: 800,
    Width: window.innerWidth,
    Height: window.innerHeight
}

$(window).resize(function () {
    game.Width = window.innerWidth;
    game.Height = window.innerHeight;
    
    resize(game.Width, game.Height);
});

$(document).ready(function () {
    
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

