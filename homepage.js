// simple version: coord triggers
// when the document is scrolled, if tile A is visible and tile B is not,
// transform tile A to the side, and allow tile B to scroll normally

// transform the provided tile to the side, out of the way of the next tile
function sideScrollTile(tile) {
    const {windowHeight, windowWidth} = window;
    const {top, left, bottom, right} = tile.getBoundingClientRect(); 
    
    if ((top > 0)) {
        tile.style.transform = "translateX(0)";
        //tile.style.position = "relative";
    }
    else {
        tile.style.transform = "translateX(-100%)";
        //tile.style.position = "absolute";
    }
}

var tiles = document.getElementsByClassName('tile');

// NOTE: this onscroll event should be throttled down to animation updates
onscroll = (event) => {
    for (const currentTile of tiles) {
        sideScrollTile(currentTile);
    }
}