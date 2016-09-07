(function(){
  var d = document,
      main = d.getElementsByTagName('main'),
      dataLen = Object.keys(data).length;

  var createFeed = function(feedName, elm, contextElm, containerName, link){
    for(var i=0; i<dataLen; i++){
      var
      docfrag = d.createDocumentFragment(),
      container = d.createElement(elm),
      contextWrapper = d.createElement(contextElm),
      p = d.createElement('p'),
      span = d.createElement('span'),
      valImg = feedName[i].images,
      elDomain = d.createTextNode(feedName[i].domain),
      elTitle = d.createTextNode(feedName[i].title),
      feedNum = 'feed-' + (i+1);

      container.className = feedNum;
      contextWrapper.className = 'context-wrapper';
      container.style.backgroundImage = 'url(' + valImg + ')';
      //links
      if(link){
        contextWrapper.setAttribute('href', feedName[i].url);
        contextWrapper.setAttribute('target', '_blank');
      }
      // title
      p.appendChild(elTitle);
      // source
      span.appendChild(elDomain);
      // add elements into container
      docfrag.appendChild(p);
      docfrag.appendChild(span);
      contextWrapper.appendChild(docfrag);
      container.appendChild(contextWrapper);
      d.getElementById(containerName).appendChild(container);
    }
  }

  var menuList = [ data.digg, data.pick, data.politics, data.design];

  for (var i=0; i<dataLen; i++){
    createFeed( menuList[i], 'li', 'div', 'menu-'+Object.keys(data)[i], false);
    createFeed( menuList[i], 'section', 'a', Object.keys(data)[i], true);
  }

  var navButton = d.querySelectorAll('.nav-button'),
      pageWrapper = d.querySelector('.page-wrapper');

  Array.prototype.forEach.call(navButton, function(el){
    function setDataAttr(data, e){
      pageWrapper.setAttribute(data, e);
    }
    el.addEventListener('mouseover', function(){
      setDataAttr('data-nav', el.getAttribute('data-section'));
      setDataAttr('data-mouse-event', 'mouseover');
    });
    el.addEventListener('click', function(){
      setDataAttr('data-mouse-event', 'click');
      setDataAttr('data-selected', el.getAttribute('data-section'));
      var dataSelected = pageWrapper.getAttribute('data-selected');
    });
    el.addEventListener('mouseout', function(){
      setDataAttr('data-nav', '');
      setDataAttr('data-mouse-event', 'mouseout');
    });
  });

})();
