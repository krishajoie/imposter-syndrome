//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

var myButton = document.getElementById('scrollToTop');

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display='block';
    } else {
        myButton.style.display='none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}