const projects = [
  {
    "title": "The Sleep of Reason Produces Monsters",
    "type": "Comics · Zine · 2024",
    "desc": "A dark comic drawn in charcoal, where raw textures, stark contrasts, and expressive imagery turn the page into an unsettling psychological landscape.",
    "shop": "https://ko-fi.com/s/82c33b08f8",
    "shopLabel": "Read the comic on Ko-fi ↗",
    "images": [
      "assets/project-01/1-El-Sueno-de-la-razon-produce-monstruos-JOSHUA-GREY-J-GREY.jpg",
      "assets/project-01/2-El-Sueno-de-la-razon-produce-monstruos-JOSHUA-GREY-J-GREY.jpg",
      "assets/project-01/3-El-Sueno-de-la-razon-produce-monstruos-JOSHUA-GREY-J-GREY.jpg",
      "assets/project-01/4-El-Sueno-de-la-razon-produce-monstruos-JOSHUA-GREY-J-GREY.jpg",
      "assets/project-01/5-El-Sueno-de-la-razon-produce-monstruos-JOSHUA-GREY-J-GREY.jpg",
      "assets/project-01/6-El-Sueno-de-la-razon-produce-monstruos-JOSHUA-GREY-J-GREY.jpg"
    ]
  },
  {
    "title": "The Lagoon of Paca",
    "type": "Graphic storytelling · Charcoal and digital brushes · 2026",
    "desc": "Inspired by a Peruvian oral tradition, this graphic story combines the grain of charcoal with digital brushwork to evoke the mystery of a local legend.",
    "shop": "https://ko-fi.com/s/213ec87607",
    "shopLabel": "Read the story on Ko-fi ↗",
    "images": [
      "assets/project-02/1-La-Laguna-de-Paca-JOSHUA-GREY-J-GREY.png",
      "assets/project-02/2-La-Laguna-de-Paca-JOSHUA-GREY-J-GREY.png",
      "assets/project-02/3-La-Laguna-de-Paca-JOSHUA-GREY-J-GREY.png",
      "assets/project-02/4-La-Laguna-de-Paca-JOSHUA-GREY-J-GREY.png",
      "assets/project-02/5-La-Laguna-de-Paca-JOSHUA-GREY-J-GREY.png",
      "assets/project-02/6-La-Laguna-de-Paca-JOSHUA-GREY-J-GREY.png"
    ]
  },
  {
    "title": "The Flood",
    "type": "Graphic adaptation · Charcoal and digital brushes · 2026",
    "desc": "A graphic reimagining of a Peruvian oral tradition. Charcoal textures and digital brushwork give shape to an ancestral tale of upheaval, memory, and survival.",
    "shop": "https://ko-fi.com/s/213ec87607",
    "shopLabel": "Read the story on Ko-fi ↗",
    "images": [
      "assets/project-03/1-El-Diluvio-JOSHUA-GREY-J-GREY.png",
      "assets/project-03/2-El-Diluvio-JOSHUA-GREY-J-GREY.png",
      "assets/project-03/3-El-Diluvio-JOSHUA-GREY-J-GREY.png",
      "assets/project-03/4-El-Diluvio-JOSHUA-GREY-J-GREY.png",
      "assets/project-03/5-El-Diluvio-JOSHUA-GREY-J-GREY.png",
      "assets/project-03/6-El-Diluvio-JOSHUA-GREY-J-GREY.png"
    ]
  },
  {
    "title": "The Legend of Maria Paz",
    "type": "Comic · 2026",
    "desc": "A four-page comic adaptation of a traditional story written by Noelia Zevallos, told through expressive imagery and a compact visual rhythm.",
    "images": [
      "assets/project-04/Leyenda-de-Maria-Paz-pagina1-JOSHUA-GREY-J-GREY.png",
      "assets/project-04/Leyenda-de-Maria-Paz-pagina2-JOSHUA-GREY-J-GREY.png",
      "assets/project-04/Leyenda-de-Maria-Paz-pagina3-JOSHUA-GREY-J-GREY.png",
      "assets/project-04/Leyenda-de-Maria-Paz-pagina4-JOSHUA-GREY-J-GREY.png"
    ]
  },
  {
    "title": "Getting High (a story inspired by The Saint)",
    "type": "Comic · 2026",
    "desc": "A three-page comic inspired by Alessio Okumura’s series The Saint of New Orleans, created for an upcoming anthology.",
    "images": [
      "assets/project-05/EL-SANTO-DE-NUEVA-ORLEANS-JOSHUA-GREY-JGREY.jpg"
    ]
  },
  {
    "title": "Ramblings of a Wretched Devil",
    "type": "Comic · Zine · 2026",
    "desc": "An independent comic drifting through the surreal intersection of imagination, literature, and the streets of Lima, where the everyday gives way to the uncanny.",
    "shop": "https://ko-fi.com/s/a1042bb6e7",
    "shopLabel": "Read the comic on Ko-fi ↗",
    "images": [
      "assets/project-06/1-Divagaciones-de-un-Pobre-Diablo-JOSHUA-GREY-J-GREY.png",
      "assets/project-06/2-Divagaciones-de-un-Pobre-Diablo-JOSHUA-GREY-J-GREY.png",
      "assets/project-06/3-Divagaciones-de-un-Pobre-Diablo-JOSHUA-GREY-J-GREY.png",
      "assets/project-06/4-Divagaciones-de-un-Pobre-Diablo-JOSHUA-GREY-J-GREY.png",
      "assets/project-06/5-Divagaciones-de-un-Pobre-Diablo-JOSHUA-GREY-J-GREY.png",
      "assets/project-06/6-Divagaciones-de-un-Pobre-Diablo-JOSHUA-GREY-J-GREY.png"
    ]
  }
];

const backdrop=document.getElementById('backdrop');
const panels=[...document.querySelectorAll('.overlay')];
const cards=[...document.querySelectorAll('[data-project]')];
let activePanel=null;
let touchStartY=null;
function openPanel(id){
 closePanel(false);
 activePanel=document.getElementById(id);
 backdrop.hidden=false; activePanel.hidden=false;
 activePanel.classList.remove('is-open','is-expanded');
 activePanel.scrollTop=0;
 requestAnimationFrame(()=>requestAnimationFrame(()=>{activePanel.classList.add('is-open');backdrop.classList.add('is-visible')}));
 document.body.style.overflow='hidden';
 const close=activePanel.querySelector('.close'); if(close) close.focus();
}
function closePanel(hideBackdrop=true){
 panels.forEach(p=>{p.classList.remove('is-open','is-expanded');});
 cards.forEach(card=>card.classList.remove('is-selected'));
 const closing=activePanel;
 activePanel=null;
 backdrop.classList.remove('is-visible');
 if(closing){setTimeout(()=>{if(!closing.classList.contains('is-open'))closing.hidden=true},500)}
 if(hideBackdrop){setTimeout(()=>{if(!activePanel)backdrop.hidden=true},350)}
 document.body.style.overflow='';
}
function expandPanel(){if(activePanel&&!activePanel.classList.contains('is-expanded')){activePanel.classList.add('is-expanded');return true}return false}
function collapsePanel(){if(activePanel&&activePanel.classList.contains('is-expanded')&&activePanel.scrollTop<=2){activePanel.classList.remove('is-expanded');return true}return false}
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openPanel(b.dataset.open)));
document.querySelectorAll('.close').forEach(b=>b.addEventListener('click',()=>closePanel()));
backdrop.addEventListener('click',()=>closePanel());
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&activePanel)closePanel()});
document.getElementById('homeLink').addEventListener('click',e=>{e.preventDefault();closePanel();window.scrollTo({top:0,behavior:'smooth'})});
cards.forEach(card=>card.addEventListener('click',()=>{
 const p=projects[Number(card.dataset.project)];
 cards.forEach(c=>c.classList.toggle('is-selected',c===card));
 document.getElementById('projectTitle').textContent=p.title;
 document.getElementById('detailTitle').textContent=p.title;
 document.getElementById('detailDescription').textContent=p.desc;
 const cta=document.getElementById('detailCTA'); cta.replaceChildren(); cta.hidden=!p.shop; if(p.shop){const link=document.createElement('a');link.href=p.shop;link.target='_blank';link.rel='noopener noreferrer';link.textContent=p.shopLabel;cta.appendChild(link)}
 document.getElementById('detailType').textContent=p.type;
 document.getElementById('projectIndex').textContent=String(Number(card.dataset.project)+1).padStart(2,'0')+' / '+String(projects.length).padStart(2,'0');
 const art=document.getElementById('detailArt'); art.replaceChildren();
 // Each project can include up to six gallery images.
 p.images.slice(0,6).forEach((src,i)=>{const img=document.createElement('img');img.src=src;img.alt=p.title+' — imagen '+(i+1);img.loading=i===0?'eager':'lazy';art.appendChild(img)});
 openPanel('projectPanel');
}));
// The first downward scroll expands the panel; returning to the top restores its initial height.
panels.forEach(panel=>{
 panel.addEventListener('wheel',e=>{
  if(e.deltaY>0&&!panel.classList.contains('is-expanded')){e.preventDefault();expandPanel()}
  else if(e.deltaY<0&&panel.classList.contains('is-expanded')&&panel.scrollTop<=2){e.preventDefault();collapsePanel()}
 },{passive:false});
 panel.addEventListener('touchstart',e=>{touchStartY=e.touches[0]?.clientY??null},{passive:true});
 panel.addEventListener('touchend',e=>{
  if(touchStartY===null)return;
  const dy=e.changedTouches[0].clientY-touchStartY;
  if(dy < -35&&!panel.classList.contains('is-expanded'))expandPanel();
  else if(dy > 35&&panel.classList.contains('is-expanded')&&panel.scrollTop<=2)collapsePanel();
  touchStartY=null;
 },{passive:true});
});
document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();const data=new FormData(e.currentTarget);
 const subject=encodeURIComponent(data.get('subject'));
 const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\n'+data.get('message'));
 // The form prepares an email addressed to Joshua Grey.
 window.location.href='mailto:joshugr@gmail.com?subject='+subject+'&body='+body;
});
