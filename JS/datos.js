/* ===== DATOS: mallas (aproximadas, editables), tutores y horarios de EJEMPLO ===== */
const ROM=['I','II','III','IV','V','VI','VII','VIII','IX','X','Electivos'];const cicTxt=n=>n>10?'Electivos':'Ciclo '+ROM[n-1];
const DS=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const CARRERAS={
'Ing. de Computación y Sistemas':{ic:'bi-cpu',e:'',m:[
'Introducción a SI|Geometría Analítica|Matemática Discreta|Filosofía|Métodos de Estudio|Actividades I|Inglés I|Ciudadanía Intercultural|Lenguaje',
'Introducción a la Programación|Fundamentos de Diseño Web|Cálculo I|Álgebra Lineal|Introducción a la Economía|Actividades II|Inglés II',
'Tecnología de Información I|Algoritmos y Estructura de Datos I|Sistemas de Información|Física I|Estadística y Probabilidades I',
'Tecnología de Información II|Algoritmos y Estructura de Datos II|Física II|Microeconomía|Estadística y Probabilidades II',
'Sistemas Operativos y Plataformas|Gestión de Procesos|Teoría y Diseño de Base de Datos|Contabilidad General|Ingeniería Administrativa',
'Ingeniería de Software I|Programación I|Ingeniería de Costos|Teoría General de Sistemas|Investigación Operativa I',
'Ingeniería de Software II|Gestión Financiera|Arquitectura de Software para SI|Inteligencia Artificial|Discapacidad e Inclusión',
'Diseño e Implementación de Sistemas|Gestión de Recursos de TI|Taller de Proyectos|Formulación y Evaluación de Proyectos|Investigación SI|Arquitectura Empresarial',
'Proyecto Final de Ingeniería de Computación y Sistemas|Seguridad y Auditoría de SI|Planeamiento Estratégico de TI|Inteligencia de Negocios|Liderazgo y Oratoria',
'Trabajo de Investigación|Ciberseguridad|Marketing Digital|Management IS|Ética y Moral']},
'Ing. Industrial':{ic:'bi-gear-wide-connected',e:'Fundamentos de Emprendimiento|Liderazgo y Oratoria|Gestión de Riesgos|Sistemas ERP|Ergonomía|Metodologías Ágiles|Planeamiento, Desarrollo e Ingeniería del Producto|Gestión de la Innovación|Marketing Digital|Ingeniería de Costos Avanzado|Mercado de Valores Industriales',m:[
'Matemática Discreta|Geometría Analítica|Métodos de Estudio|Introducción a la Ingeniería|Filosofía|Ciudadanía Intercultural|Lenguaje|Actividades I|Inglés I',
'Álgebra Lineal|Introducción a la Programación|Cálculo I|Dibujo y Diseño Gráfico|Introducción a la Economía|Actividades II|Inglés II',
'Física I|Cálculo II|Química Industrial|Diseño Industrial por Computadora|Discapacidad e Inclusión|Microeconomía',
'Física II|Algoritmos y Estructura de Datos|Ecuaciones Diferenciales|Materiales de Ingeniería|Estadística y Probabilidades I',
'Ingeniería Eléctrica y Electrónica|Mecánica de Materiales|Estadística y Probabilidades II|Ingeniería Administrativa|Contabilidad General',
'Taller de Herramientas Informáticas|Procesos de Manufactura|Investigación Operativa I|Ingeniería de Métodos I|Ingeniería de Procesos|Ingeniería de Costos',
'Instrumentación y Control Industrial|Investigación Operativa II|Ingeniería de Métodos II|Control de Calidad|Mercadotecnia|Gestión Financiera',
'Automatización Industrial|Taller de Manufactura Moderna|Mantenimiento, Seguridad y Salud Ocupacional|Planeamiento y Control de la Producción I|Total Quality Management TQM|Formulación y Evaluación de Proyectos',
'Diseño de Sistemas de Producción|Planeamiento y Control de la Producción II|Proyecto Final de Ingeniería Industrial|Psicología Industrial Organizacional|Gestión de Proyectos PMI',
'Ética y Moral|Supply Chain Management|Trabajo de Investigación|Gestión de Personal y Legislación Laboral']},
'Ing. Civil':{ic:'bi-building',e:'',m:[
'Matemática Discreta|Geometría Analítica|Filosofía|Ciudadanía Intercultural|Introducción a la Ingeniería|Lenguaje|Métodos de Estudio|Accesibilidad y Diseño Universal|Actividades I|Inglés I',
'Álgebra Lineal|Cálculo I|Dibujo y Diseño Gráfico|Introducción a la Economía|Topografía|Geología General|Actividades II|Inglés II',
'Cálculo II|Física I|Estadística y Probabilidades I|Química General|Tecnología de los Materiales|Topografía Avanzada',
'Física II|Ecuaciones Diferenciales|Estática|Construcción I|Dinámica|Tecnología del Concreto',
'Resistencia de Materiales I|Caminos I|Construcción II|Contabilidad General|Ecología e Impacto Ambiental|Instalaciones Eléctricas en Edificaciones',
'Mecánica de Fluidos I|Pavimentos|Gestión Financiera|Mecánica de Suelos I|Resistencia de Materiales II',
'Mecánica de Fluidos II|Análisis Estructural I|Formulación y Evaluación de Proyectos|Mecánica de Suelos II|Presupuesto y Programación de Obra|Discapacidad e Inclusión',
'Análisis Estructural II|Concreto Armado I|Gestión de Proyectos - PMI|Ingeniería de Costos|Hidrología|Instalaciones Sanitarias',
'Concreto Armado II|Ingeniería Antisísmica|Proyecto Final de Ingeniería Civil I|Hidráulica|Ingeniería de Valuaciones y Tasaciones|Diseño de Acero y Madera',
'Abastecimiento de Agua y Alcantarillado|Proyecto Final de Ingeniería Civil II|Organización y Dirección de Empresas Constructoras|Puentes y Obras de Arte|Ética y Moral|Prácticas Preprofesionales']},
'Arquitectura':{ic:'bi-rulers',e:'',m:[
'Taller I|Matemática I|Expresión Arquitectónica I|Ciudadanía Intercultural|Lenguaje|Métodos de Estudio|Actividades I|Inglés I',
'Taller II|Geometría Descriptiva|Matemática II|Expresión Arquitectónica II|Topografía|Actividades II|Inglés II',
'Taller III|Construcción I|Física General I|Estructuras I|Expresión Arquitectónica III',
'Taller IV|Construcción II|Accesibilidad y Diseño Universal|Estructuras II|Expresión Arquitectónica IV|Fotografía|Percepción del Arte y la Arquitectura',
'Taller V|Construcción III|Urbanismo I|Diseño Bioclimático I|Historia de la Arquitectura I',
'Taller VI|Instalaciones Sanitarias y Electromecánicas|Urbanismo II|Historia de la Arquitectura II|Liderazgo y Oratoria|Diseño Bioclimático II',
'Taller VII|Urbanismo III|Introducción a la Economía|Historia de la Arquitectura III|Acústica e Iluminación|Discapacidad e Inclusión',
'Taller VIII|Laboratorio de Medios Digitales|Métodos de Investigación|Historia de la Arquitectura IV',
'Taller IX|Procedimientos del Ejercicio Profesional|Seminario de Construcción',
'Taller X|Seminario Urbano|Prácticas Preprofesionales']},
'Ciencias Aeronáuticas':{ic:'bi-airplane',e:'Instrucción de Vuelo I|Gestión de Recursos de la Tripulación (CRM)|Tecnologías y Procedimientos para Tripulaciones de Vuelo|Sistema de Gestión de Vuelo (FMS)|Instrucción de Vuelo II|Curso de Instructor de Tierra|Instrucción de Vuelo Instrumental|Operaciones Multimotor|Transición a Aerolínea|Conciencia Situacional y Tecnología de Piloto Monitor|Análisis de Técnica de Vuelo (FTA)|Sistemas de Transporte de Jets|Certificación de Organizaciones de Aviación y Aeronáutica|Psicología Aeronáutica|Sistema de Gestión de Seguridad Operacional II|Gestión de Respuesta a Emergencias|Investigación de Accidentes|Gestión de la Calidad de Servicios Aeronáuticos|Gestión de Operaciones en Tierra|Marketing Estratégico en Aviación|Gestión de Aeropuertos|Factores Humanos: Sensación y Percepción|Servicio de Búsqueda y Salvamento|Integración Hombre-Computadora|Quechua|Sistemas Aéreos No Tripulados|Aerodinámica del Helicóptero|Economía Avanzada para la Aviación|Conflicto y Negociaciones|Gestión de Proyectos Aeronáuticos|Gestión de la Calidad Total (TQM)|Gestión de Mantenimiento de Aeronaves|Gestión de la Cadena de Suministros (SCM)|Servicio al Cliente en Aviación|Metodología para Toma de Decisiones',m:[
'Meteorología I|Matemática I|Física General I|Lenguaje|Métodos de Estudio|Realidad Nacional|Actividades I|Inglés I|Introducción a la Aviación|Regulaciones Aéreas I',
'Aerodinámica|Operaciones de Piloto Privado|Performance de Aeronaves I|Matemática II|Física General II|Actividades II|Inglés II|Regulaciones Aéreas II',
'Administración|Mercancías Peligrosas|Performance de Aeronaves II|Sistemas y Componentes de Aeronaves|Navegación Doméstica e Internacional|Meteorología II|Factores Humanos en Aviación|Liderazgo y Profesionalización',
'Introducción a la Economía|Teoría de Vuelo Instrumental|Planeamiento de Carrera|Estadística y Probabilidades|Motores de Aeronaves|Fisiología de Vuelo|Ciudadanía Intercultural',
'Operaciones de Piloto Comercial|Mercadotecnia|Contabilidad General|Administración Logística|Comportamiento Organizacional en Aviación',
'Operaciones de Despacho Aéreo|Investigación de Mercados|Costos y Presupuestos|Administración de Operaciones|Sistema de Gestión de Seguridad Operacional I',
'Derecho Empresarial|Negocios Internacionales|Gestión Estratégica para Aviación|Finanzas|Seguridad de la Aviación (AVSEC)|Ética',
'Gestión de Talento Humano|Derecho Aeronáutico|Gestión de Ventas',
'Proyecto Aeronáutico|Sistemas de Información Gerencial|Sistemas Integrados de Gestión',
'Gestión de Aeronavegabilidad Continua|Trabajo de Investigación|Gestión de Aerolíneas']},
'Ciberseguridad y Análisis Forense':{ic:'bi-shield-lock',e:'Criptografía Aplicada|Digital Forensics for Mobile Devices|Ingeniería Reversa|Seguridad de Operaciones',m:[
'Matemática Discreta|Geometría Analítica|Filosofía|Ciudadanía Intercultural|Introducción a la Ingeniería de Ciberseguridad|Lenguaje|Métodos de Estudio|Actividades I|Inglés I',
'Álgebra Lineal|Cálculo I|Introducción a la Programación|Evidencia Digital e Investigaciones Forenses|Introducción a la Economía|Actividades II|Inglés II',
'Algoritmos y Estructura de Datos I|Física I|Tecnología de Información I|Estadística y Probabilidades I|Cibercrimen y Guerra de la Información',
'Algoritmos y Estructura de Datos II|Física II|Estadística y Probabilidades II|Microeconomía|Tecnología de Información II',
'Gestión de Procesos|Teoría y Diseño de Bases de Datos|Ciberseguridad y Arquitectura de Internet|Contabilidad General|Seguridad y Auditoría de la Información',
'Ley y Ética de la Ciberseguridad|Técnicas de Cifrado|Ciberataques y Defensas|Ingeniería de Costos|Investigación Operativa I',
'Gestión Financiera|Infraestructuras Críticas|Inteligencia Artificial|Seguridad en la Nube|Discapacidad e Inclusión',
'Taller de Proyectos|Análisis Forense Digital|Ciencia de Datos|Diseño e Implementación de Sistemas|Formulación y Evaluación de Proyectos|Investigación en Ciberseguridad',
'Ethical Hacking|Ética y Ciberbienestar|Sistemas de Información Gerencial|Trabajo Final de Ingeniería de Ciberseguridad|Liderazgo y Oratoria',
'Trabajo de Investigación|Big Data']},
'Ciencias de Datos':{ic:'bi-graph-up',e:'',m:[
'Introducción a CD|Geometría Analítica|Matemática Discreta|Filosofía|Métodos de Estudio|Actividades I|Inglés I|Ciudadanía Intercultural|Lenguaje',
'Introducción a la Programación|Taller Matemático para Estadística|Cálculo I|Álgebra Lineal|Introducción a la Economía|Actividades II|Inglés II',
'Tecnología de Información I|Algoritmos y Estructura de Datos I|Minería de Datos para Negocios|Física I|Estadística y Probabilidades I',
'Tecnología de Información II|Algoritmos y Estructura de Datos II|Física II|Microeconomía|Estadística y Probabilidades II',
'Sistemas Operativos y Plataformas|Gestión de Procesos|Teoría y Diseño de Base de Datos|Contabilidad General|Aplicaciones Estadísticas CD',
'Métodos Estadísticos Avanzados|Programación I|Ingeniería de Costos|Teoría General de Sistemas|Análisis de Regresión',
'Modelos de Ecuaciones Diferenciales|Machine Learning|Gestión Financiera|Aplicación de Métodos Multivariados DS|Discapacidad e Inclusión',
'Diseño e Implementación de Sistemas|Big Data|Taller de Proyectos|Formulación y Evaluación de Proyectos|Investigación en CD|Modelos Estadísticos para la Toma de Decisiones',
'Trabajo Final de Ingeniería de Ciencias de Datos|Procesamiento de Lenguaje Oral y Escrito|Aprendizaje por Refuerzo y Aprendizaje Profundo|Inteligencia de Negocios|Liderazgo y Oratoria',
'Trabajo de Investigación|Diseño de Redes Neuronales|Ética en Ciencia de Datos y Estadística']},
'Inteligencia Artificial y Robótica':{ic:'bi-robot',e:'',m:[
'Introducción a IA|Geometría Analítica|Matemática Discreta|Filosofía|Métodos de Estudio|Actividades I|Inglés I|Ciudadanía Intercultural|Lenguaje',
'Introducción a la Programación|Tendencias IA|Cálculo I|Álgebra Lineal|Introducción a la Economía|Actividades II|Inglés II',
'Sistemas de Información|Algoritmos y Estructura de Datos I|Algoritmos Básicos IA|Física I|Estadística y Probabilidades I',
'Tecnología de Información|Algoritmos y Estructura de Datos II|Física II|Aplicaciones Científicas de Redes Neuronales|Estadística y Probabilidades II',
'Robótica|Gestión de Procesos|Teoría y Diseño de Base de Datos|Contabilidad General|Procesamiento de Lenguaje Natural',
'Ingeniería de Software I|Programación I|Ingeniería de Costos|Teoría General de Sistemas|Computación Visual',
'Ingeniería de Software II|Machine Learning|Gestión Financiera|Procesamiento Biométrico|Discapacidad e Inclusión',
'Diseño e Implementación de Sistemas|Agentes Inteligentes|Taller de Proyectos|Formulación y Evaluación de Proyectos|Investigación en IA|Deep Learning',
'Trabajo Final de Ingeniería de Inteligencia Artificial|Seguridad IA|Reinforcement Learning|Gemelos Digitales (Inteligencia Generativa)|Liderazgo y Oratoria',
'Trabajo de Investigación|Sistemas Cognitivos|Ética IA']}
};
const NC=Object.keys(CARRERAS);
const CURSOS=[];
NC.forEach((c,ci)=>{const K=CARRERAS[c];K.m.forEach((s,k)=>s.split('|').forEach((n,j)=>CURSOS.push({id:CURSOS.length,car:c,ci,cic:k+1,n,j})));if(K.e)K.e.split('|').forEach((n,j)=>CURSOS.push({id:CURSOS.length,car:c,ci,cic:11,n,j}))});

/* Tutores de EJEMPLO: 9 por carrera, generados por código */
const F=['María','Carlos','Lucía','Diego','Camila','Andrés','Valeria','Jorge','Daniela','Luis','Fiorella','Renato','Andrea','Miguel','Gabriela','Sebastián','Paola','Hugo','Mariana','Julio'];
const A=['Cáceres','Mendoza','Quispe','Rojas','Vargas','Torres','Flores','Salazar','Ramírez','Castillo','Herrera','Paredes','Chávez','Núñez','Aguilar','Ponce','Ríos','Valdez','Campos','Soto','Benites','Huamán','Arias','Delgado'];
const BL=[[8,12],[14,18],[18,21],[10,13]];
const TUTORES=[];
NC.forEach((car,ci)=>{for(let k=0;k<9;k++){const i=ci*9+k;let a=(i*5+3)%24,b=(i*7+11)%24;if(a==b)b=(b+1)%24;
 const hor={};hor[DS[i%5]]=BL[i%4];hor[DS[(i+2)%5]]=BL[(i+1)%4];if(i%3==0)hor[DS[(i+3)%5]]=BL[(i+2)%4];if(i%4==0)hor['Sábado']=[9,13];
 TUTORES.push({id:i,n:i==0?'María Cáceres Cueva':F[i%20]+' '+A[a]+' '+A[b],car,ci,tipo:k%3==0?'Docente':'Estudiante destacado',cic:9+i%2,
 r:+(4.4+(i*7%7)/10).toFixed(1),v:18+(i*37)%120,exp:1+i%8,m:['Presencial','Virtual','Presencial / Virtual'][i%3],hor});}});
CURSOS.forEach(c=>{const b=c.ci*9,x=c.cic*5+c.j;let p=[(x*2)%9,(x*2+5)%9];if(c.cic>=9)p=[[0,3,6][x%3],[0,3,6][(x+1)%3]];c.t=p.map(k=>b+k)});
TUTORES.forEach(t=>t.cur=CURSOS.filter(c=>c.t.includes(t.id)).map(c=>c.id));

/* ===== Ubicación / punto de encuentro (4 zonas predeterminadas) ===== */
const ZONAS=['Biblioteca','Laboratorios y Especialidades','FIADAT','Aulas Generales'];
const ZONA_EJ={'Biblioteca':'Ej: Cubículo 5, Sala de estudio 2','Laboratorios y Especialidades':'Ej: Lab. de Procesos, Taller de Redes','FIADAT':'Ej: Oficina 2, Pabellón B','Aulas Generales':'Ej: Salón 304, Pabellón C'};
const LUG=[i=>'Cubículo '+(1+i%9),i=>'Lab. de '+['Cómputo','Procesos','Redes','Suelos','Física'][i%5]+' '+(1+i%4),i=>'Oficina '+(1+i%6)+' · Pabellón '+'ABC'[i%3],i=>'Salón '+(100*(1+i%4)+1+i%9)];
TUTORES.forEach(t=>{const z=t.id%4;t.loc={z:ZONAS[z],d:LUG[z](t.id)}});

/* ===== Tutores REGISTRADOS (rol Profesor/Tutor): se suman a los de ejemplo ===== */
(function(){JSON.parse(localStorage.getItem('usuarios')||'[]').filter(u=>u.rol=='tutor').forEach(u=>{
 const g=JSON.parse(localStorage.getItem('tutorcfg_'+u.correo)||'null')||{},id=TUTORES.length,
 ok=!!(g.hor&&Object.keys(g.hor).length&&g.loc&&g.loc.z&&g.loc.d&&g.cur&&g.cur.length);
 TUTORES.push({id,correo:u.correo,n:u.nombre,car:u.carrera,ci:Math.max(0,NC.indexOf(u.carrera)),tipo:u.tipoTutor||'Docente',cic:10,r:0,v:0,exp:0,ex:'Nuevo en la plataforma',m:'Presencial',hor:ok?g.hor:{},loc:g.loc||null,cur:ok?g.cur:[],reg:true});
 if(ok)g.cur.forEach(c=>{if(CURSOS[c]&&!CURSOS[c].t.includes(id))CURSOS[c].t.push(id)})})})();

/* ===== utilidades ===== */
const nz=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const fmt=h=>(h<10?'0':'')+h+':00';
const rango=b=>fmt(b[0])+'–'+fmt(b[1]);
const hora12=h=>((h+11)%12+1)+':00 '+(h<12?'a.m.':'p.m.');
const ini=t=>t.n.split(' ').slice(0,2).map(x=>x[0]).join('');
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const fechaTxt=f=>new Date(f+'T00:00:00').toLocaleDateString('es-PE',{weekday:'long',day:'numeric',month:'long'});
const dispChips=t=>Object.entries(t.hor).map(([d,b])=>`<span class="chip-disp"><b>${d.slice(0,3)}</b> ${rango(b)}</span>`).join('');
const dispTxt=t=>Object.entries(t.hor).map(([d,b])=>d.slice(0,3)+' '+rango(b)).join(' · ');
const expTxt=t=>t.ex||(t.tipo=='Docente'?(t.exp+3)+' años de experiencia':t.exp+' semestres como tutor');
const tomada=(id,f,h)=>JSON.parse(localStorage.getItem('usuarios')||'[]').some(u=>JSON.parse(localStorage.getItem('reservas2_'+u.correo)||'[]').some(r=>r.t==id&&r.f==f&&r.h==h));
const ocupado=(t,f,h)=>t.reg?tomada(t.id,f,h):((t.id*31+h*17+f.split('-').reduce((a,x)=>a+ +x,0)*13)%6==0||tomada(t.id,f,h));
const clases=u=>{const s=Math.max(0,NC.indexOf(u.carrera))+Math.max(0,ROM.indexOf(u.ciclo))+1,r={};
 DS.slice(0,5).forEach((d,k)=>r[d]=[[8,12],[10,14],[14,18],null][(s+k)%4]);return r};
const reservas=u=>JSON.parse(localStorage.getItem('reservas2_'+u.correo)||'[]');
const guardarReservas=(u,R)=>localStorage.setItem('reservas2_'+u.correo,JSON.stringify(R));
const favs=()=>{const u=yo();return u?JSON.parse(localStorage.getItem('favs_'+u.correo)||'[]'):[]};
const favBtn=id=>`<button class="btn btn-sm btn-light fav" data-t="${id}" aria-label="Guardar tutor en favoritos"><i class="bi ${favs().includes(id)?'bi-heart-fill text-danger':'bi-heart'}"></i></button>`;
function filaTutor(t,c){return `<div class="fila-tutor d-flex flex-wrap gap-3 align-items-center p-3 rounded-3 mt-2"><div class="avatar sm">${ini(t)}</div>
<div class="flex-grow-1"><div class="fw-semibold">${t.n} <span class="badge ${t.tipo=='Docente'?'bg-guinda':'text-bg-warning'} ms-1">${t.tipo}</span></div>
<small class="text-muted">${rateTxt(t)} · ${t.m}<br><i class="bi bi-geo-alt" aria-hidden="true"></i> ${esc(ubicTxt(t))}</small><div class="mt-1">${dispChips(t)}</div></div>
<div class="d-flex gap-2">${favBtn(t.id)}<a class="btn btn-sm btn-outline-danger" href="profesores.html?t=${t.id}">Ver perfil</a><a class="btn btn-sm btn-guinda" href="agendamiento.html?t=${t.id}&c=${c.id}">Agendar</a></div></div>`}
function confirmar(msg,ok,si,no){const B={};B[si||'Sí, cancelar']=function(){$(this).dialog('close');ok()};B[no||'Volver']=function(){$(this).dialog('close')};$('<div title="Confirmar"></div>').text(msg).dialog({modal:true,width:360,buttons:B,close:function(){$(this).remove()}})}
function autoCursos(sel,alElegir){$(sel).autocomplete({minLength:2,delay:0,source:(rq,res)=>{const q=nz(rq.term);res(CURSOS.filter(c=>nz(c.n).includes(q)).slice(0,12).map(c=>({label:c.n+' — '+c.car+' · '+cicTxt(c.cic),value:c.n,c})))},select:(e,ui)=>{alElegir&&alElegir(ui.item.c)}})}

/* ===== v5: roles, ubicación y utilidades ===== */
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const rateTxt=t=>t.v?`<i class="bi bi-star-fill estrellas" aria-hidden="true"></i> ${t.r} (${t.v})`:'<span class="badge text-bg-info">Tutor nuevo</span>';
const ubicTxt=t=>t&&t.loc&&t.loc.z&&t.loc.d?t.loc.z+' · '+t.loc.d:'Por confirmar con el tutor';
const miTutor=u=>TUTORES.find(t=>t.correo==u.correo);
const reservasDeTutor=t=>JSON.parse(localStorage.getItem('usuarios')||'[]').flatMap(u=>reservas(u).filter(r=>r.t==t.id).map(r=>Object.assign({},r,{est:u.nombre})));
