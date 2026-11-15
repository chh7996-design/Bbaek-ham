const priceData={
  compact:{label:"소형 · 중형",light:31900,smart:44000,perfect:66000},
  sedan:{label:"대형 세단",light:35900,smart:49500,perfect:77000},
  suv:{label:"SUV",light:39900,smart:55000,perfect:88000},
  large:{label:"대형 SUV · 카니발",light:43900,smart:60500,perfect:99000}
};
const planData={light:"라이트 · 월 1회",smart:"스마트 · 격주",perfect:"퍼펙트 · 월 4회"};
let selectedPlan="light";
const vehicle=document.querySelector("#vehicle");
function renderPrice(){
  const item=priceData[vehicle.value];
  document.querySelector("#carName").textContent=item.label;
  document.querySelector("#planName").textContent=planData[selectedPlan];
  document.querySelector("#price").innerHTML=item[selectedPlan].toLocaleString("ko-KR")+'<small>원</small>';
}
vehicle.addEventListener("change",renderPrice);
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  selectedPlan=btn.dataset.plan;
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===btn));
  renderPrice();
}));
renderPrice();

// Installable PWA support (HTTPS required; Vercel provides HTTPS automatically).
let deferredPrompt=null;
const tip=document.querySelector("#installTip");
const message=document.querySelector("#installMessage");
const installAction=document.querySelector("#installAction");
const installNav=document.querySelector("#appInstallNav");
window.addEventListener("beforeinstallprompt",event=>{
  event.preventDefault();deferredPrompt=event;
});
function showInstallHelp(){
  tip.hidden=false;
  const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
  if(isIOS){
    message.textContent="Safari 하단의 공유 버튼을 누른 뒤 ‘홈 화면에 추가’를 선택하세요. 추가 후 빽햄 아이콘으로 앱처럼 실행할 수 있습니다.";
    installAction.textContent="확인";
  }else if(deferredPrompt){
    message.textContent="설치 버튼을 누르면 빽햄을 홈 화면에 추가할 수 있습니다.";
    installAction.textContent="앱 설치";
  }else{
    message.textContent="브라우저 메뉴(⋮ 또는 공유)를 열고 ‘앱 설치’ 또는 ‘홈 화면에 추가’를 선택하세요.";
    installAction.textContent="확인";
  }
}
installNav.addEventListener("click",showInstallHelp);
document.querySelector("#tipClose").addEventListener("click",()=>tip.hidden=true);
installAction.addEventListener("click",async()=>{
  if(deferredPrompt){
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt=null;
  }
  tip.hidden=true;
});
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));
}
