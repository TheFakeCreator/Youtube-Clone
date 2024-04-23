var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
var cont = document.getElementById('cont');
var lPanelWidth = 70;
var lPanel = document.getElementById('l-panel');
var rightScrollBtn = document.getElementById('scrollRight');
var leftScrollBtn = document.getElementById('scrollLeft');

var tagCont = document.getElementById('filter')
tagCont.style.marginLeft = 70 +'px';

//scroll the tag container 
var a = 0;
function scrollTagRight() {
    tagCont.scroll(a+500,0);
    return a = a+500;
    
}

function scrollTagLeft() {
    tagCont.scroll(a-500,0);
    return a = a-500;
    
}

//Sets active status to the lpanelicons
var dd = document.getElementsByClassName('lpicon');

Array.prototype.forEach.call(dd, function(element) {
  element.addEventListener('click', function() {
    for (let index = 0; index < dd.length; index++) {
        dd[index].removeAttribute('active');
    }
    element.setAttribute('active',true);
  });
});


//Sets active status for the tags

var tagTop = document.getElementsByClassName('tag');

Array.prototype.forEach.call(tagTop, function(element) {
    element.addEventListener('click', function() {
      for (let index = 0; index < tagTop.length; index++) {
          tagTop[index].removeAttribute('active');
      }
      element.setAttribute('active',true);
    });
  });


//Dynamically adjusts the width of the #cont
cont.style.width = viewportWidth-lPanelWidth + 'px';
lPanel.style.height = viewportHeight-56 + 'px';
rightScrollBtn.style.left = viewportWidth-lPanelWidth-75 + 'px';
leftScrollBtn.style.left = lPanelWidth-40 + 'px';


window.addEventListener(onload,function(){
    cont.style.width = viewportWidth-lPanelWidth + 'px';
    lPanel.style.height = viewportHeight-56 + 'px';
    rightScrollBtn.style.left = viewportWidth-lPanelWidth-50 + 'px';
    leftScrollBtn.style.left = lPanelWidth-50 + 'px';


})
window.addEventListener(onresize,function(){
    cont.style.width = viewportWidth-lPanelWidth + 'px';
    lPanel.style.height = viewportHeight-56 + 'px';
    rightScrollBtn.style.left = viewportWidth-lPanelWidth-50 + 'px';
    leftScrollBtn.style.left = lPanelWidth-50 + 'px';
})

var menu = document.getElementById('menu');
var home = document.getElementById('home');
var shorts = document.getElementById('shorts');
var subs = document.getElementById('subs');
var library = document.getElementById('lib');
var homeico = document.getElementById('homeico');
var shortsico = document.getElementById('shortsico');
var subsico = document.getElementById('subsico');
var libraryico = document.getElementById('libico');
var hometext = document.getElementById('hometext');
var shortstext = document.getElementById('shortstext');
var substext = document.getElementById('substext');
var librarytext = document.getElementById('libtext');
var cont = document.getElementById('cont');
const feedVidCont = document.querySelectorAll('.feed-c');
var feed = document.getElementById('feed');

var i = 0;
function menuExpand(){
    if (i==0) {
        lPanel.style.width = 200 +'px';
        home.style.flexDirection = 'row';
        shorts.style.flexDirection = 'row';
        subs.style.flexDirection = 'row';
        library.style.flexDirection = 'row';
        home.style.width = 90 +'%';
        shorts.style.width = 90 +'%';
        subs.style.width = 90 +'%';
        library.style.width =90 +'%';
        home.style.height = 50 + 'px';
        shorts.style.height = 50 + 'px';
        subs.style.height = 50 + 'px';
        library.style.height = 50 + 'px';
        home.style.justifyContent = 'flex-start';
        shorts.style.justifyContent = 'flex-start';
        subs.style.justifyContent = 'flex-start';
        library.style.justifyContent = 'flex-start';

        homeico.style.marginLeft = 10 + 'px';
        shortsico.style.marginLeft = 10 + 'px';
        subsico.style.marginLeft = 10 + 'px';
        libraryico.style.marginLeft = 10 + 'px';

        homeico.style.marginRight = 15 + 'px';
        shortsico.style.marginRight = 15 + 'px';
        subsico.style.marginRight = 15 + 'px';
        libraryico.style.marginRight = 15 + 'px';

        hometext.style.fontSize = 13 + 'px';
        shortstext.style.fontSize = 13 + 'px';
        substext.style.fontSize = 13 + 'px';
        librarytext.style.fontSize = 13 + 'px';

        hometext.style.fontWeight = 'bold';
        shortstext.style.fontWeight = 'bold';
        substext.style.fontWeight = 'bold';
        librarytext.style.fontWeight = 'bold';

        cont.style.width = viewportWidth-200 + 'px';
        cont.style.left = 200 +'px';
        lPanel.style.height = viewportHeight-56 + 'px';
        console.log(document.querySelector("#cont").style.width);

    

        i++;
    } else {
        lPanel.style.width = 70 +'px';
        home.style.flexDirection = 'column';
        shorts.style.flexDirection = 'column';
        subs.style.flexDirection = 'column';
        library.style.flexDirection = 'column';
        home.style.width = 70 +'px';
        shorts.style.width = 70 +'px';
        subs.style.width = 70 +'px';
        library.style.width = 70 +'px';
        home.style.height = 80 + 'px';
        shorts.style.height = 80 + 'px';
        subs.style.height = 80 + 'px';
        library.style.height = 80 + 'px';
        home.style.justifyContent = 'center';
        shorts.style.justifyContent = 'center';
        subs.style.justifyContent = 'center';
        library.style.justifyContent = 'center';
        homeico.style.marginLeft = 0;
        shortsico.style.marginLeft = 0;
        subsico.style.marginLeft = 0;
        libraryico.style.marginLeft = 0;
        homeico.style.marginRight = 0;
        shortsico.style.marginRight = 0;
        subsico.style.marginRight = 0;
        libraryico.style.marginRight = 0;

        hometext.style.fontWeight = 'normal';
        shortstext.style.fontWeight = 'normal';
        substext.style.fontWeight = 'normal';
        librarytext.style.fontWeight = 'normal';

        hometext.style.fontSize = 10 + 'px';
        shortstext.style.fontSize = 10 + 'px';
        substext.style.fontSize = 10 + 'px';
        librarytext.style.fontSize = 10 + 'px';

        cont.style.left = 70 +'px'; 
        console.log(lPanelWidth);
        cont.style.width = viewportWidth-lPanelWidth + 'px';
        lPanel.style.height = viewportHeight-56 + 'px';
        console.log(document.querySelector("#cont").style.width);


        i--;
    }
}

