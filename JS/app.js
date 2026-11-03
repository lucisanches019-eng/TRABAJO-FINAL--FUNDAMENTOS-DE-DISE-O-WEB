const cap=s=>s.toLowerCase().replace(/(^|\s)\S/g,m=>m.toUpperCase());
const hash=s=>{let x=5381;for(const c of s)x=(x*33^c.charCodeAt(0))>>>0;return String(x)};
const usuarios=()=>JSON.parse(localStorage.getItem('usuarios')||'[]');
const yo=()=>usuarios().find(u=>u.correo==localStorage.getItem('sesion'));
const rolDe=u=>u&&u.rol=='tutor'?'tutor':'estudiante';
const inicioDe=u=>rolDe(u)=='tutor'?'panelprofesor.html':'tutoresusmp.html';
const nombreValido=s=>/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]{2,}(\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]{2,})*$/.test(s.trim())&&!/(.)\1{2,}/i.test(s)&&/[aeiouáéíóú]/i.test(s);

/* ===== seguridad ===== */
function sha256(s){const r=(v,a)=>(v>>>a)|(v<<(32-a)),M=2**32;let H=[],K=[],pc=0,comp={};
 for(let c=2;pc<64;c++)if(!comp[c]){for(let i=c*c;i<313;i+=c)comp[i]=1;if(pc<8)H[pc]=(c**.5*M)|0;K[pc++]=(c**(1/3)*M)|0}
 const bl=s.length*8;s+='\x80';while(s.length%64-56)s+='\x00';const w=[];
 for(let i=0;i<s.length;i++)w[i>>2]|=s.charCodeAt(i)<<((3-i)%4)*8;w.push((bl/M)|0);w.push(bl);
 for(let j=0;j<w.length;){const x=w.slice(j,j+=16),o=H;H=H.slice(0,8);
  for(let i=0;i<64;i++){const w15=x[i-15],w2=x[i-2],a=H[0],e=H[4];
   const t1=H[7]+(r(e,6)^r(e,11)^r(e,25))+((e&H[5])^(~e&H[6]))+K[i]+(x[i]=i<16?x[i]:(x[i-16]+(r(w15,7)^r(w15,18)^(w15>>>3))+x[i-7]+(r(w2,17)^r(w2,19)^(w2>>>10)))|0);
   const t2=(r(a,2)^r(a,13)^r(a,22))+((a&H[1])^(a&H[2])^(H[1]&H[2]));H=[(t1+t2)|0].concat(H);H[4]=(H[4]+t1)|0}
  for(let i=0;i<8;i++)H[i]=(H[i]+o[i])|0}
 return H.slice(0,8).map(n=>(n>>>0).toString(16).padStart(8,'0')).join('')}
const salt=()=>Array.from(crypto.getRandomValues(new Uint8Array(12)),b=>b.toString(16).padStart(2,'0')).join('');
const derive=(p,s)=>{let h=sha256(unescape(encodeURIComponent(s+p)));for(let i=0;i<1000;i++)h=sha256(h+s);return h};
const setPw=(u,p)=>{u.s=salt();u.pw=derive(p,u.s)};
const okPw=(u,p)=>u.s?derive(p,u.s)==u.pw:hash(p)==u.pw;
const pwOk=p=>p.length>=8&&/[A-Za-z]/.test(p)&&/\d/.test(p);
function medidor(sel,out){$(sel).on('input',function(){const p=this.value;let s=0;if(p.length>=8)s++;if(/[A-Z]/.test(p)&&/[a-z]/.test(p))s++;if(/\d/.test(p))s++;if(/[^A-Za-z0-9]/.test(p))s++;
 $(out).html(p?`<div class="progress mt-2" style="height:6px"><div class="progress-bar ${['bg-danger','bg-danger','bg-warning','bg-info','bg-success'][s]}" style="width:${s*25||8}%"></div></div><small class="text-muted">${['Muy débil','Débil','Aceptable','Buena','Fuerte'][s]} · mínimo 8 caracteres con letras y números</small>`:'')})}
function toast(msg,tipo){tipo=tipo||'dark';const IC={success:'bi-check-circle-fill',danger:'bi-exclamation-octagon-fill',warning:'bi-exclamation-triangle-fill'},urg=tipo=='danger'||tipo=='warning';
 if(!$('#toasts').length)$('body').append('<div id="toasts" class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index:3000"></div>');
 const t=$(`<div class="toast align-items-center text-bg-${tipo} border-0" role="${urg?'alert':'status'}" aria-live="${urg?'assertive':'polite'}" aria-atomic="true"><div class="d-flex"><div class="toast-body d-flex gap-2 align-items-start"><i class="bi ${IC[tipo]||'bi-info-circle-fill'}" aria-hidden="true"></i><span></span></div><button type="button" class="btn-close ${tipo=='warning'?'':'btn-close-white'} me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar notificación"></button></div></div>`);
 t.find('span').text(msg);$('#toasts').append(t);const b=new bootstrap.Toast(t[0],{delay:urg?6500:3500});t.on('hidden.bs.toast',()=>t.remove());b.show()}
$(document).on('click','.fav',function(){const u=yo();if(!u)return;const id=+$(this).data('t'),k='favs_'+u.correo;let F=JSON.parse(localStorage.getItem(k)||'[]');const on=!F.includes(id);F=on?[...F,id]:F.filter(x=>x!=id);localStorage.setItem(k,JSON.stringify(F));
 $('.fav[data-t='+id+'] i').toggleClass('bi-heart-fill text-danger',on).toggleClass('bi-heart',!on);toast(on?'Tutor guardado en favoritos':'Tutor quitado de favoritos',on?'success':'secondary')});

$(function(){
 const pag=$('body').data('page'),u=yo();
 if(!['login','registro','recuperar'].includes(pag)&&!u){location.replace('index.html');return}
 if(u&&Date.now()-(+localStorage.getItem('ultima')||0)>1800000){localStorage.removeItem('sesion');location.replace('index.html?exp=1');return}
 const arch=location.pathname.split('/').pop()||'index.html';
 if(u&&rolDe(u)=='tutor'&&['tutoresusmp.html','panelestudiantil.html','agendar.html','agendamiento.html'].includes(arch)){location.replace('panelprofesor.html');return}
 if(u&&rolDe(u)=='estudiante'&&arch=='panelprofesor.html'){location.replace('tutoresusmp.html');return}
 if(u){localStorage.setItem('ultima',Date.now());$(document).on('click keydown',()=>localStorage.setItem('ultima',Date.now()))}
 const mt=rolDe(u)=='tutor'&&typeof miTutor=='function'?miTutor(u):null;
 const L=rolDe(u)=='tutor'?[['panel','Mi panel','panelprofesor.html'],['perfil','Mi perfil público',mt?'profesores.html?t='+mt.id:'panelprofesor.html']]:[['inicio','Inicio','tutoresusmp.html'],['tutorias','Mis tutorías','panelestudiantil.html'],['buscar','Buscar Tutor','agendar.html']];
 $('#nav').html(`<nav class="navbar navbar-expand-lg navbar-dark bg-guinda sticky-top shadow" aria-label="Navegación principal"><div class="container">
 <a class="navbar-brand d-flex align-items-center gap-2 fw-bold" href="${inicioDe(u)}"><img src="ESTILOS/logotutorusmp.jpg.png" class="brand-logo" alt="">Tutor USMP<span class="visually-hidden"> — ir al inicio</span></a>
 <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Abrir o cerrar el menú"><span class="navbar-toggler-icon"></span></button>
 <div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
 ${L.map(l=>`<li class="nav-item"><a class="nav-link ${pag==l[0]?'active':''}" ${pag==l[0]?'aria-current="page"':''} href="${l[2]}">${l[1]}</a></li>`).join('')}
 ${u?`<li class="nav-item text-white small ms-lg-2">Hola, <b>${u.nombres.split(' ')[0]}</b> <span class="badge bg-light text-dark ms-1">${rolDe(u)=='tutor'?'Tutor':'Estudiante'}</span></li>`:''}<li class="nav-item ms-lg-3"><a id="salir" class="btn btn-gold btn-sm" href="index.html"><i class="bi bi-box-arrow-right"></i> Salir</a></li></ul></div></div></nav>`);
 $('#pie').html(`<footer class="mt-5 pt-5 pb-4"><div class="container"><div class="row g-4">
 <div class="col-lg-4"><div class="d-flex align-items-center gap-2 mb-2"><img src="ESTILOS/logotutorusmp.jpg.png" class="brand-logo" alt=""><b class="text-white fs-5">Tutor USMP</b></div><p class="small mb-0">Programa de tutorías 100% gratuitas de la Facultad de Ingeniería y Arquitectura, Universidad de San Martín de Porres.</p></div>
 <div class="col-6 col-lg-2"><h6 class="text-white">Navegación</h6><ul class="list-unstyled small mb-0"><li><a href="tutoresusmp.html">Inicio</a></li><li><a href="agendar.html">Buscar tutor</a></li><li><a href="panelestudiantil.html">Mis tutorías</a></li></ul></div>
 <div class="col-6 col-lg-3"><h6 class="text-white">Contacto</h6><ul class="list-unstyled small mb-0"><li><i class="bi bi-geo-alt"></i> Av. La Fontana 1250, La Molina</li><li><i class="bi bi-telephone"></i> 208-6000</li><li><i class="bi bi-envelope"></i> admision@usmp.pe</li></ul></div>
 <div class="col-lg-3"><h6 class="text-white">Respaldo</h6><p class="small mb-0"><i class="bi bi-bank"></i> Universidad licenciada por <b class="text-white">SUNEDU</b></p></div></div>
 <hr class="border-secondary mt-4"><p class="small text-center mb-0">© 2026 Tutor USMP · FIA · Proyecto académico</p></div></footer><button id="arriba" aria-label="Volver arriba"><i class="bi bi-arrow-up"></i></button>`);
 $(window).on('scroll',()=>$('#arriba').toggle($(window).scrollTop()>400));$('#arriba').click(()=>window.scrollTo({top:0,behavior:'smooth'}));
 $('#salir').click(()=>localStorage.removeItem('sesion'));
 $('body').prepend('<a class="skip-link" href="#contenido">Saltar al contenido principal</a>');
 $('body>.container-fluid').first().attr({id:'contenido',role:'main',tabindex:-1});
 $('.contador').each(function(){$(this).prop('c',0).animate({c:$(this).data('n')},{duration:1600,step:function(v){$(this).text(Math.ceil(v))}})});
});
