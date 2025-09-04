document.addEventListener('DOMContentLoaded',function(){
  function filterCards(q){
    q=String(q||'').toLowerCase();
    var active=document.querySelector('.am-agent-section.active');
    if(!active) return;
    active.querySelectorAll('.am-agent-card').forEach(function(card){
      var data=card.dataset.search||'';
      var match=data.indexOf(q)!==-1;
      card.style.display=match?'':'none';
    });
  }
  document.querySelectorAll('.am-agent-search').forEach(function(inp){
    inp.addEventListener('input',function(){filterCards(inp.value);});
    filterCards(inp.value);
  });
  function activateTab(id){
    document.querySelectorAll('.am-agent-tab').forEach(function(btn){
      btn.classList.toggle('active',btn.dataset.target===id);
    });
    document.querySelectorAll('.am-agent-section').forEach(function(sec){
      sec.classList.toggle('active',sec.id===id);
    });
    var search=document.querySelector('.am-agent-search');
    if(search) filterCards(search.value);
  }
  document.querySelectorAll('.am-agent-tab').forEach(function(btn){
    btn.addEventListener('click',function(){activateTab(btn.dataset.target);});
  });
  var first=document.querySelector('.am-agent-tab');
  if(first) activateTab(first.dataset.target);
});
