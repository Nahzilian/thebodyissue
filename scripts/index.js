var myVar;
var scrollTopButton = document.getElementById("scroll-top")

function pageLoader() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("curtain-left").style.opacity = 0;
    document.getElementById("curtain-right").style.opacity = 0;
    document.getElementById("curtain-left").style.transform = "translate(-50vw, 0)";
    document.getElementById("curtain-right").style.transform = "translate(50vw, 0)";
    setTimeout(() => { 
        document.getElementById("loader").style.width = 0
        document.getElementById("video-light-dot").style.display = 'none'
    }, 1000);

}

function scrollToTop() {
    window.scrollTo(0, 0);
}

function showVideo() {
    let vidCover = document.getElementById("yt-img-cover")
    vidCover.style.opacity = 0;
    document.getElementById("yt-video").style.opacity = 1;
    document.getElementById("yt-video").style.zIndex = 1;

    setTimeout(() => { vidCover.style.zIndex = -2 }, 1000);
}

// For scrolling
window.addEventListener('scroll', _ => {
    if (window.scrollY > 100) {
        scrollTopButton.style.bottom = "20px"
    } else {
        scrollTopButton.style.bottom = "-100px"
    }
})