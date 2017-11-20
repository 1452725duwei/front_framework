$(document).ready(function () {
    $("#contract").click(function contract () {
            $(".a-span").toggle();
            $(".aside").toggleClass("aside-contract");
            $(".aside-in").toggleClass("aside-contract");
            $(".main-content").toggleClass("main-content-contract");
    });
});