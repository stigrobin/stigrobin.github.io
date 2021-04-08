var ToTop = document.getElementsByClassName('to-top')[0];

var resumeButton = document.getElementsByClassName('resume-button')[0];

resumeButton.addEventListener('click', () => {
  window.open("files/CV-no-phone.pdf");
  return false;
});

document.addEventListener('scroll', () => {
    if(this.scrollY > 70) {        
        ToTop.classList.remove('transparent', 'no-top', 'hidden');
        ToTop.classList.add('pull-down');
    }
    if(this.scrollY == 0) {
        ToTop.classList.add('transparent', 'no-top', 'hidden');
        ToTop.classList.remove('pull-down');
    }
    if((Math.ceil(this.scrollY) + document.documentElement.clientHeight) == document.documentElement.scrollHeight) {
        console.log('you have reached the bottom of the page');
    }
}, window);


document.getElementById('to-top-link').addEventListener('click', () => {
        scrollToTop(1000);
});

function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
/* 
  Explanation:
  - pi is the length/end point of the cosinus intervall (see below)
  - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
    (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  - newTimestamp - oldTimestamp equals the delta time

    a * cos (bx + c) + d                        | c translates along the x axis = 0
  = a * cos (bx) + d                            | d translates along the y axis = 1 -> only positive y values
  = a * cos (bx) + 1                            | a stretches along the y axis = cosParameter = window.scrollY / 2
  = cosParameter + cosParameter * (cos bx)  | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
  = cosParameter + cosParameter * (cos scrollCount * x)
*/