document.addEventListener('DOMContentLoaded',function(){
  function filterCards(q){
    q=String(q||'').toLowerCase();
    document.querySelectorAll('.am-agent-card').forEach(function(card){
      var data=card.dataset.search||'';
      var match=data.indexOf(q)!==-1;
      card.style.display=match?'':'none';
    });
    document.querySelectorAll('.am-agent-section').forEach(function(sec){
      var any=Array.from(sec.querySelectorAll('.am-agent-card')).some(function(c){return c.style.display!=="none";});
      sec.style.display=any?'':'none';
    });
  }
  document.querySelectorAll('.am-agent-search').forEach(function(inp){
    inp.addEventListener('input',function(){filterCards(inp.value);});
    filterCards(inp.value);
  });
  document.querySelectorAll('.am-agent-tab').forEach(function(btn){
    btn.addEventListener('click',function(){
      var id=btn.dataset.target;
      var el=document.getElementById(id);
      if(el){el.scrollIntoView({behavior:'smooth'});} });
  });
});
