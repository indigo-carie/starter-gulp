var accordion = document.getElementsByClassName('accordion');
var selectedContent; // index of selected accordion content
var contentHeight = [];

function load() {
  // DYNAMIC MAX-HEIGHT CHANGE BASED ON CHILD CONTAINER HEIGHT
  // get content max-heights before it gets set to 0px
  getHeights();

  for (var i = 0; i < accordion.length; i++) {
    // clicked accordion__summary, capture index number
    (function(index) {
      var summary = accordion[index].querySelector('.accordion__summary');
      summary.addEventListener('click', function() {
       selectedContent = index;
       expandCollapse(summary);
      }, false);
    })(i);

    // by default, hide all content except for this index number
    if (i !== 0) {
        accordion[i].className = 'accordion close'
    }
  }
}

function getHeights() {
  contentHeight = [];
  for (var i = 0; i < accordion.length; i++) {
    // get all accordion__content heights
    var showContent = accordion[i].querySelector('.accordion__content');
    showContent.style.maxHeight = 'auto';
    contentHeight.push(showContent.offsetHeight);
    console.log(contentHeight);
  }
}

function expandCollapse(elem) {
  var accordionClass = elem.parentNode.className;

  // Hide all content
  for (var i = 0; i < accordion.length; i++) {
    accordion[i].className = 'accordion close';
    var hideContent = accordion[i].querySelector('.accordion__content');
    hideContent.style.maxHeight = '0px';
  }

  // Show selected content if previously hidden
  if (accordionClass == 'accordion close') {
    elem.parentNode.className = 'accordion';

    var showContent = elem.parentNode.querySelector('.accordion__content');
    showContent.style.maxHeight = contentHeight[selectedContent] + 'px';
  }
}

window.onload = load;
window.onresize = function() {
  setTimeout(function() {
    // reload page, set to false to get from cache
    this.location.reload(false);
    getHeights();
  }, 10);
};
