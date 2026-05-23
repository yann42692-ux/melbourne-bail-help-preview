
const money = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
function calc(){
 const amount=Math.max(0,Number(document.querySelector('#bailAmount')?.value||0));
 const pct=Math.max(1,Number(document.querySelector('#bondPercent')?.value||10));
 const fees=Math.max(0,Number(document.querySelector('#fees')?.value||0));
 const premium=amount*pct/100; const total=premium+fees;
 document.querySelectorAll('[data-bail-output]').forEach(el=>el.textContent=money.format(amount));
 document.querySelectorAll('[data-premium-output]').forEach(el=>el.textContent=money.format(premium));
 document.querySelectorAll('[data-total-output]').forEach(el=>el.textContent=money.format(total));
 const label=document.querySelector('#percentLabel'); if(label) label.textContent=pct+'%';
}
document.querySelectorAll('#bailAmount,#bondPercent,#fees').forEach(el=>el.addEventListener('input',calc));calc();
document.querySelectorAll('form[data-request-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const msg=form.querySelector('[data-form-message]');if(msg)msg.textContent='Request received. An agent will use the approved phone or text route to follow up.';}));
document.querySelectorAll('video').forEach(video=>{
 video.controls=false; video.muted=true; video.loop=true; video.playsInline=true;
 const start=()=>video.play().catch(()=>{});
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
 document.addEventListener('visibilitychange',()=>{ if(!document.hidden) start(); });
});
