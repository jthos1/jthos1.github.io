const projects = [
  {
    "title": "El Sueño de la Razón Produce Monstruos",
    "type": "Historieta · Fanzine · 2024",
    "desc": "Una historieta de atmósfera oscura, dibujada en carboncillo, que explora el horror mediante texturas crudas e imágenes expresivas.<a href="https://www.gob.pe/institucion/cultura/noticias/680318-ministerio-de-cultura-presenta-a-los-ganadores-del-4-concurso-nacional-de-narrativa-grafica" target="_blank" rel="noopener noreferrer">Lee aquí la nota del Ministerio de Cultura ↗</a>",
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
    "title": "La Laguna de Paca",
    "type": "Narrativa gráfica · Carboncillo y pinceles digitales · 2026",
    "desc": "Adaptación de una tradición oral peruana que combina la textura áspera del carboncillo con pinceles digitales para dar vida a una leyenda local mediante una narrativa visual expresiva.",
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
    "title": "El Diluvio",
    "type": "Adaptación gráfica · Carboncillo y pinceles digitales · 2026",
    "desc": "Relectura gráfica de una tradición oral peruana que combina texturas de carboncillo y pinceles digitales para evocar la atmósfera y la fuerza perdurable de un relato ancestral.",
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
    "title": "Leyenda de María Paz",
    "type": "Historieta · 2026",
    "desc": "Adaptación en cuatro páginas de un relato tradicional, escrito por Noelia Zevallos.",
    "images": [
      "assets/project-04/Leyenda-de-Maria-Paz-pagina1-JOSHUA-GREY-J-GREY.png",
      "assets/project-04/Leyenda-de-Maria-Paz-pagina2-JOSHUA-GREY-J-GREY.png",
      "assets/project-04/Leyenda-de-Maria-Paz-pagina3-JOSHUA-GREY-J-GREY.png",
      "assets/project-04/Leyenda-de-Maria-Paz-pagina4-JOSHUA-GREY-J-GREY.png"
    ]
  },
  {
    "title": "Getting High (una historia inspirada en El Santo)",
    "type": "Historieta · 2026",
    "desc": "Historieta de tres páginas inspirada en la serie El Santo de New Orleans, escrita por Alessio Okumura para una próxima antología.",
    "images": [
      "assets/project-05/EL-SANTO-DE-NUEVA-ORLEANS-JOSHUA-GREY-JGREY.jpg"
    ]
  },
  {
    "title": "Divagaciones de un Pobre Diablo",
    "type": "Historieta · Fanzine · 2026",
    "desc": "Historieta independiente que explora la intersección surreal entre la imaginación, la literatura y las calles de Lima.",
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
 document.getElementById('detailType').textContent=p.type;
 document.getElementById('projectIndex').textContent=String(Number(card.dataset.project)+1).padStart(2,'0')+' / '+String(projects.length).padStart(2,'0');
 const art=document.getElementById('detailArt'); art.replaceChildren();
 // Cada proyecto admite hasta seis imágenes en su galería.
 p.images.slice(0,6).forEach((src,i)=>{const img=document.createElement('img');img.src=src;img.alt=p.title+' — imagen '+(i+1);img.loading=i===0?'eager':'lazy';art.appendChild(img)});
 openPanel('projectPanel');
}));
// El primer desplazamiento hacia abajo expande la ficha; al volver al inicio, se recupera su altura inicial.
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
 const body=encodeURIComponent('Nombre: '+data.get('name')+'\nCorreo: '+data.get('email')+'\n\n'+data.get('message'));
 // El formulario prepara un correo dirigido a Joshua Grey.
 window.location.href='mailto:joshugr@gmail.com?subject='+subject+'&body='+body;
});
