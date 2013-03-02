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

    $("body").css("background-image", "url(resources/images/svg/backgrounds/house-with-snow.svg)");
    $("body").css("background-repeat", "no-repeat");
    $("body").css("background-size", "cover");
    $("body").css("height", "100%");

    resize(game.Width, game.Height);

    $("#svgElephant").svg({ onLoad: null });
    $("#svgGiraffe").svg({ onLoad: null });
    $("#svgIbex").svg({ onLoad: null });
    $("#svgLion").svg({ onLoad: null });
    $("#svgLionCub").svg({ onLoad: null });
    $("#svgRhino").svg({ onLoad: loadResources });
});


function loadResources() {
    $("#svgRhino").svg("get").load("resources/images/svg/african-animals/rhino.svg", { addTo: false, changeSize: true, onLoad: null });
    $("#svgLionCub").svg("get").load("resources/images/svg/african-animals/lioncub.svg", { addTo: false, changeSize: true, onLoad: null });
    $("#svgLion").svg("get").load("resources/images/svg/african-animals/lion.svg", { addTo: false, changeSize: true, onLoad: null });
    $("#svgIbex").svg("get").load("resources/images/svg/african-animals/ibex.svg", { addTo: false, changeSize: true, onLoad: null });
    $("#svgGiraffe").svg("get").load("resources/images/svg/african-animals/giraffe.svg", { addTo: false, changeSize: true, onLoad: null });
    $("#svgElephant").svg("get").load("resources/images/svg/african-animals/elephant.svg", {addTo: false,changeSize: true,onLoad: null});
}

function resize(width, height) {
    var svg = $("#svgRhino").svg('get');
    if (svg) {
        //svg.change(root, { currentScale: 5 });

        

        
        //svg.configure({ viewBox: '0 0 1000 1000' }, true);

        //$("#svgElephant").css("width", "100px");
        //$("#svgElephant").css("height", "100px");
        //$("#svgLion").css("width", "100px");
        //$("#svgLion").css("height", "100px");
        //$("#svgGiraffe").css("width", "100px");
        //$("#svgGiraffe").css("height", "100px");
        //$("#svgIbex").css("width", "100px");
        //$("#svgIbex").css("height", "100px");
        //$("#svgLion").css("width", "100px");
        //$("#svgLion").css("height", "100px");
        //$("#svgLionCub").css("width", "100px");
        //$("#svgLionCub").css("height", "100px");
        //$("#svgRhino").css("width", "100px");
        //$("#svgRhino").css("height", "100px");

        game.ScaleFactorX = game.Width / game.InitialWidth;
        game.ScaleFactorY = game.Height / game.InitialHeight;
    }
}

