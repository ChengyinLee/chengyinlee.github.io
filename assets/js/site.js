/* Chengyin Li — site interactions */
(function(){
  var root=document.documentElement;

  var tBtn=document.getElementById('themeToggle');
  if(tBtn){tBtn.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
  });}

  var nav=document.getElementById('navlinks'), nBtn=document.getElementById('navToggle');
  if(nav&&nBtn){
    nBtn.addEventListener('click',function(){var open=nav.classList.toggle('open');nBtn.setAttribute('aria-expanded',open?'true':'false');});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');nBtn.setAttribute('aria-expanded','false');});});
  }

  var mBtn=document.getElementById('metricsToggle'), mPanel=document.getElementById('metricsPanel');
  if(mBtn&&mPanel){
    mBtn.addEventListener('click',function(){
      var hidden=mPanel.hasAttribute('hidden');
      if(hidden){mPanel.removeAttribute('hidden');mBtn.setAttribute('aria-expanded','true');mBtn.classList.add('open');}
      else{mPanel.setAttribute('hidden','');mBtn.setAttribute('aria-expanded','false');mBtn.classList.remove('open');}
    });
  }

  document.querySelectorAll('.disclosure__h').forEach(function(btn){
    btn.addEventListener('click',function(){
      var body=document.getElementById(btn.getAttribute('data-target'));
      if(!body)return;
      if(body.hasAttribute('hidden')){body.removeAttribute('hidden');btn.setAttribute('aria-expanded','true');}
      else{body.setAttribute('hidden','');btn.setAttribute('aria-expanded','false');}
    });
  });

  try{
    var links={},secs=[];
    document.querySelectorAll('.nav__links a[href^="#"]').forEach(function(a){
      var id=a.getAttribute('href').slice(1);
      if(id){links[id]=a;var el=document.getElementById(id);if(el)secs.push(el);}
    });
    if('IntersectionObserver' in window && secs.length){
      var obs=new IntersectionObserver(function(entries){
        entries.forEach(function(en){if(en.isIntersecting){for(var k in links){links[k].classList.remove('active');}if(links[en.target.id])links[en.target.id].classList.add('active');}});
      },{rootMargin:'-45% 0px -50% 0px',threshold:0});
      secs.forEach(function(s){obs.observe(s);});
    }
  }catch(e){}

  try{
    var repo='ChengyinLee/chengyinlee.github.io';
    fetch('https://raw.githubusercontent.com/'+repo+'/google-scholar-stats/gs_data.json',{cache:'no-cache'})
      .then(function(r){return r.ok?r.json():null;})
      .then(function(d){if(d&&d.citedby!=null){var el=document.getElementById('total_cit');if(el)el.textContent=d.citedby;}})
      .catch(function(){});
  }catch(e){}
})();
