let progress = document.getElementById('progressbar'); // gets the progressbar or the scrollbar element
let totalHeight = document.body.scrollHeight - window.innerHeight; // gets the total height
window.onscroll = function(){ // if the window is scrolled 
    let progressHeight = (window.pageYOffset / totalHeight) * 100; /* shows the total progress and 
                                                                      the design if scrolled*/
    progress.style.height = progressHeight + "%"; // adds the style whenever mouse scroll or page accessed 
}