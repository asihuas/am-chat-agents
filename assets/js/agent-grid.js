document.addEventListener('DOMContentLoaded',function(){
  var currentTag='all';

  function applyFilters(){
    var q=String(document.querySelector('.am-agent-search')?.value||'').toLowerCase();
    document.querySelectorAll('.am-agent-card').forEach(function(card){
      var data=card.dataset.search||'';
      var tags=card.dataset.tags||'';
      var matchSearch=data.indexOf(q)!==-1;
      var matchTag=currentTag==='all'||tags.indexOf(currentTag)!==-1;
      card.style.display=(matchSearch&&matchTag)?'':'none';
    });
    document.querySelectorAll('.am-agent-section').forEach(function(sec){
      var visible=Array.from(sec.querySelectorAll('.am-agent-card')).some(function(card){
        return card.style.display!=="none";
      });
      sec.style.display=visible?'':'none';
    });
  }

  document.querySelectorAll('.am-agent-search').forEach(function(inp){
    inp.addEventListener('input',applyFilters);
  });

  document.querySelectorAll('.am-agent-tab').forEach(function(btn){
    btn.addEventListener('click',function(){
      currentTag=btn.dataset.tag;
      document.querySelectorAll('.am-agent-tab').forEach(function(b){
        b.classList.toggle('active',b===btn);
      });
      applyFilters();
    });
  });

  applyFilters();
});

