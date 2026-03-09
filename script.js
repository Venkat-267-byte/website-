/* ═══ INTRO ═══ */
const foodEmojis=['🍛','🥘','🍲','🥙','🍜','🥟','🍮','🥪','🦐','🍗','🫘','🥙','🍚','🫕'];
const orbiters=document.getElementById('orbiters');
const numOrbs=8;
for(let i=0;i<numOrbs;i++){
  const angle=(i/numOrbs)*360;
  const r=220;
  const x=50+r*Math.cos(angle*Math.PI/180)/5.6;
  const y=50+r*Math.sin(angle*Math.PI/180)/5.6;
  const orb=document.createElement('div');
  orb.className='orb';
  orb.style.cssText=`left:${x}%;top:${y}%;transform:translate(-50%,-50%) translateZ(${r}px);`;
  orb.textContent=foodEmojis[i%foodEmojis.length];
  orbiters.appendChild(orb);
}

let introDismissed=false;
function dismissIntro(){
  if(introDismissed)return;
  introDismissed=true;
  const intro=document.getElementById('intro');
  intro.classList.add('fade-out');
  setTimeout(()=>{intro.style.display='none'},800);
}
// Auto-dismiss after 5s if user hasn't clicked
setTimeout(()=>{if(!introDismissed)dismissIntro()},5000);

/* ═══ CURSOR ═══ */
const cur=document.getElementById('cur'),curR=document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(anim)})();

/* ═══ GATE AUTH ═══ */
function gTab(tab,btn){
  document.querySelectorAll('.atab').forEach(t=>t.classList.remove('on'));
  if(btn)btn.classList.add('on');
  document.getElementById('atabs').style.display=tab==='forgot'?'none':'';
  ['gLP','gRP','gFP'].forEach(id=>{const p=document.getElementById(id);p.style.display='none';p.classList.remove('vis')});
  clearErrs();
  const titles={login:['Welcome Back','Sign in to begin your culinary journey'],register:['Join the Tradition','Create your account to get started'],forgot:['Reset Password',"We'll send a link to your inbox"]};
  document.getElementById('gtit').textContent=titles[tab][0];document.getElementById('gsub').textContent=titles[tab][1];
  const pid={login:'gLP',register:'gRP',forgot:'gFP'}[tab];
  const p=document.getElementById(pid);p.style.display='flex';requestAnimationFrame(()=>p.classList.add('vis'));
}
function clearErrs(){document.querySelectorAll('.ferr').forEach(e=>{e.textContent='';e.style.display='none'})}
function serr(id,msg){const e=document.getElementById(id);if(e){e.textContent=msg;e.style.display='block'}}
function vEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
function tpw(iid,eid){const i=document.getElementById(iid),e=document.getElementById(eid);i.type=i.type==='password'?'text':'password';e.textContent=i.type==='password'?'👁':'🙈'}
function pwStr(v){const b=document.getElementById('pbar');if(!b)return;let s=0;if(v.length>=6)s++;if(v.length>=10)s++;if(/[A-Z]/.test(v))s++;if(/[0-9]/.test(v))s++;if(/[^A-Za-z0-9]/.test(v))s++;b.style.width=[0,20,40,65,85,100][s]+'%';b.style.background=['#333','#E63946','#FF8C00','#FFB800','#8BC34A','#4CAF50'][s]}
function doSoc(p){showToast(p+' sign-in coming soon!')}

function unlock(name){
  const g=document.getElementById('gate');
  g.style.transition='opacity .9s,transform .9s';g.style.opacity='0';g.style.transform='scale(1.04)';
  setTimeout(()=>{
    g.classList.add('gone');
    const app=document.getElementById('app');app.classList.add('on');
    document.getElementById('navUN').textContent=name.split('@')[0];
    renderMenu();renderFests();renderMoods();renderCart();initObs();
    showToast('Welcome, '+name.split('@')[0]+'! 🍛');
  },900);
}
function doLogin(){
  clearErrs();const e=document.getElementById('glE').value.trim(),p=document.getElementById('glP').value;
  let ok=true;
  if(!e){serr('glEE','Email is required');ok=false}else if(!vEmail(e)){serr('glEE','Enter a valid email');ok=false}
  if(!p){serr('glPE','Password is required');ok=false}else if(p.length<6){serr('glPE','Minimum 6 characters');ok=false}
  if(!ok)return;
  const btn=document.getElementById('loginBtn');btn.disabled=true;btn.innerHTML='<span class="spin"></span><span>Signing in…</span>';
  setTimeout(()=>{localStorage.setItem('flavoursU',JSON.stringify({email:e,name:e.split('@')[0]}));unlock(e)},1400);
}
function doReg(){
  clearErrs();const n=document.getElementById('grN').value.trim(),e=document.getElementById('grE').value.trim(),p=document.getElementById('grP').value,c=document.getElementById('grC').value;
  let ok=true;
  if(!n){serr('grNE','Full name is required');ok=false}
  if(!e){serr('grEE','Email is required');ok=false}else if(!vEmail(e)){serr('grEE','Enter a valid email');ok=false}
  if(!p||p.length<6){serr('grPE','Minimum 6 characters');ok=false}
  if(p!==c){serr('grCE','Passwords do not match');ok=false}
  if(!ok)return;
  const btn=document.getElementById('regBtn');btn.disabled=true;btn.innerHTML='<span class="spin"></span><span>Creating account…</span>';
  setTimeout(()=>{localStorage.setItem('flavoursU',JSON.stringify({email:e,name:n}));unlock(n)},1600);
}
function doFgt(){
  clearErrs();const e=document.getElementById('gfE').value.trim();
  if(!e){serr('gfEE','Email is required');return}if(!vEmail(e)){serr('gfEE','Enter a valid email');return}
  const btn=document.getElementById('fgtBtn');btn.disabled=true;btn.innerHTML='<span class="spin"></span><span>Sending…</span>';
  setTimeout(()=>{document.getElementById('gFP').innerHTML=`<div class="fsok"><div class="fi2">📬</div><h3>Check Your Inbox</h3><p style="color:var(--muted)">A reset link was sent to <strong style="color:var(--amber)">${e}</strong></p><button class="gsub" style="margin-top:18px" onclick="gTab('login',document.querySelectorAll('.atab')[0])"><span>← Back to Sign In</span></button></div>`;},1400);
}
function doLogout(){if(!confirm('Sign out of Flavours?'))return;localStorage.removeItem('flavoursU');location.reload()}

/* Auto-restore session */
(function(){const s=localStorage.getItem('flavoursU');if(s){try{const u=JSON.parse(s);document.getElementById('gate').classList.add('gone');const app=document.getElementById('app');app.classList.add('on');document.getElementById('navUN').textContent=(u.name||u.email).split('@')[0]}catch(e){}}})();

/* ═══ DATA ═══ */
const dishes=[
  {id:1,name:"Butter Chicken",emoji:"🍗",region:"North Indian",type:"nonveg",price:320,story:"Born in 1950s Delhi when a chef accidentally created a tomato-cream sauce for leftover tandoori chicken. Now India's most beloved dish worldwide.",tags:["Creamy","Mild","Heritage"],spice:2,time:30,rating:4.9},
  {id:2,name:"Dal Makhani",emoji:"🫘",region:"North Indian",type:"veg",price:240,story:"A midnight creation by Moti Mahal's founder, simmered overnight on a slow flame. Every dal makhani carries the memory of Partition's refugee cooks.",tags:["Lentils","Rich","Overnight"],spice:2,time:40,rating:4.8},
  {id:3,name:"Masala Dosa",emoji:"🥙",region:"South Indian",type:"veg",price:180,story:"A Udupi monastery recipe from 800 CE — monks created this crispy fermented crêpe to nourish pilgrims. Today it feeds millions every morning.",tags:["Fermented","Crispy","Ancient"],spice:2,time:20,rating:4.9},
  {id:4,name:"Chicken Chettinad",emoji:"🍲",region:"South Indian",type:"nonveg",price:380,story:"The merchant community of Chettinad perfected this explosive spice blend along ancient spice routes. 27 whole spices in every bite.",tags:["Fiery","Aromatic","Merchant"],spice:5,time:45,rating:4.7},
  {id:5,name:"Macher Jhol",emoji:"🐟",region:"East Indian",type:"nonveg",price:290,story:"Bengali grandmother's pride. This mustard-turmeric fish curry appears in Rabindranath Tagore's poetry as the taste of home and monsoon rivers.",tags:["Mustard","Turmeric","Poetry"],spice:3,time:35,rating:4.8},
  {id:6,name:"Rasgulla",emoji:"🍮",region:"East Indian",type:"veg",price:120,story:"The great Bengal–Odisha debate of 1868. These spongy chhena spheres were offered to Goddess Lakshmi during Rath Yatra.",tags:["Sweet","Spongy","Divine"],spice:0,time:60,rating:4.9},
  {id:7,name:"Vada Pav",emoji:"🥪",region:"West Indian",type:"veg",price:80,story:"Mumbai's 1974 invention for mill workers. One rupee, enormous satisfaction. India's most democratic meal.",tags:["Street Food","Spicy","Mumbai"],spice:4,time:15,rating:4.8},
  {id:8,name:"Dal Baati Churma",emoji:"🫓",region:"West Indian",type:"veg",price:349,story:"A Rajput warrior's meal — baked in desert sand before battle. The sweetness of churma balanced the bitterness of war.",tags:["Warrior","Desert","Festive"],spice:2,time:60,rating:4.9},
  {id:9,name:"Goan Fish Curry",emoji:"🦈",region:"Coastal",type:"nonveg",price:350,story:"Portuguese-Konkani fusion born from 500 years of Goa's maritime trade. Coconut milk meets tamarind in a curry like a sea breeze.",tags:["Coconut","Tamarind","Colonial"],spice:3,time:40,rating:4.8},
  {id:10,name:"Prawn Moilee",emoji:"🦐",region:"Coastal",type:"nonveg",price:420,story:"Kerala's white coconut curry — a Syrian Christian recipe passed down 2000 years. The prawn is the star, not the spice.",tags:["Gentle","Coconut","Ancient"],spice:1,time:35,rating:4.7},
  {id:11,name:"Chicken Momos",emoji:"🥟",region:"Himalayan",type:"nonveg",price:160,story:"Tibetan monks brought these dumplings as winter sustenance. Each family guards its secret fold.",tags:["Dumplings","Tibetan","Sacred"],spice:2,time:30,rating:4.8},
  {id:12,name:"Thukpa",emoji:"🍜",region:"Himalayan",type:"veg",price:200,story:"A Ladakhi monk's noodle soup that warms frozen monasteries at 3,500m altitude. Every bowl carries prayer.",tags:["Noodles","Warm","Monastic"],spice:2,time:25,rating:4.7},
  {id:13,name:"Hyderabadi Biryani",emoji:"🍚",region:"South Indian",type:"nonveg",price:380,story:"Nizam's royal kitchen, 1600s. The Dum technique borrowed from Persian royalty. Each grain absorbs 200 years of history.",tags:["Dum","Royal","Persian"],spice:3,time:120,rating:5.0},
  {id:14,name:"Pav Bhaji",emoji:"🫕",region:"West Indian",type:"veg",price:140,story:"1850s Mumbai dockworkers needed quick nutrition. Vegetable mash with butter-toasted bread — still sizzling on every street.",tags:["Street","Butter","Workers"],spice:3,time:20,rating:4.8},
  {id:15,name:"Rogan Josh",emoji:"🥩",region:"North Indian",type:"nonveg",price:400,story:"Kashmir's crown jewel — brought by Mughal Emperor Akbar from Persia. The oil separates at surface when done perfectly.",tags:["Kashmiri","Royal","Mughal"],spice:4,time:75,rating:4.9},
  {id:16,name:"Sambar",emoji:"🍵",region:"South Indian",type:"veg",price:160,story:"Maratha king Sambhaji's cook invented this tangy lentil stew. History's happiest accident.",tags:["Tamarind","Lentils","Royal"],spice:3,time:35,rating:4.8}
];
const festivals=[
  {id:'diwali',name:'Diwali',icon:'🪔',desc:'Festival of Lights — ladoos, chakli, and rich dry fruit sweets made with generations of love.',highlights:[{icon:'🪔',text:'Light Festival'},{icon:'🍬',text:'Sweets Season'},{icon:'👨‍👩‍👧',text:'Family Feast'}],dishes:[{emoji:'🟡',name:'Motichoor Ladoo',desc:'Saffron-infused gram flour spheres',price:80},{emoji:'🍫',name:'Kaju Katli',desc:'Diamond cashew fudge with silver leaf',price:120},{emoji:'🌀',name:'Chakli',desc:'Rice flour spirals, crispy and spiced',price:60},{emoji:'🟤',name:'Besan Burfi',desc:'Ghee-roasted gram flour sweet',price:70}]},
  {id:'holi',name:'Holi',icon:'🎨',desc:'Festival of Colours — cooling thandai, gujiyas, and spiced treats for the whole neighbourhood.',highlights:[{icon:'🎨',text:'Festival of Colours'},{icon:'💃',text:'Spring Celebration'},{icon:'🌸',text:'Seasonal Flavours'}],dishes:[{emoji:'🥛',name:'Thandai',desc:'Rose-saffron-almond chilled milk',price:80},{emoji:'🥟',name:'Gujiya',desc:'Khoya-stuffed sweet dumplings',price:90},{emoji:'🍞',name:'Puran Poli',desc:'Jaggery-lentil stuffed flatbread',price:100},{emoji:'🍩',name:'Malpua',desc:'Saffron pancakes in syrup',price:70}]},
  {id:'eid',name:'Eid',icon:'🌙',desc:"Eid ul-Fitr ends Ramzan with decadent biryanis, kebabs, and desserts anticipated for a month.",highlights:[{icon:'🌙',text:'End of Ramzan'},{icon:'👑',text:'Royal Feast'},{icon:'🎁',text:'Community Sharing'}],dishes:[{emoji:'🍚',name:'Mutton Biryani',desc:'Slow-cooked dum biryani',price:480},{emoji:'🥩',name:'Seekh Kebab',desc:'Minced lamb, aromatic spices',price:280},{emoji:'🍮',name:'Sheer Khurma',desc:'Vermicelli-milk-date festive dessert',price:120},{emoji:'🫕',name:'Nihari',desc:'Overnight slow-cooked mutton stew',price:380}]},
  {id:'onam',name:'Onam',icon:'🌺',desc:"Kerala's harvest festival — the legendary Sadya, 26+ dishes on a banana leaf.",highlights:[{icon:'🌺',text:'Harvest Festival'},{icon:'🍌',text:'Banana Leaf Feast'},{icon:'🌿',text:'All Vegetarian'}],dishes:[{emoji:'🟡',name:'Avial',desc:'12-vegetable coconut-yoghurt curry',price:180},{emoji:'🟠',name:'Olan',desc:'White pumpkin coconut milk',price:160},{emoji:'🍮',name:'Payasam',desc:'Jaggery-coconut-rice pudding',price:120},{emoji:'🫙',name:'Sadya Sambar',desc:'Tangy lentil gravy',price:160}]}
];
const moods=[
  {id:'happy',emoji:'😄',label:'Happy',sub:'Celebratory',recs:[{id:7,why:'Pure joy, one bite'},{id:8,why:'A feast to celebrate'},{id:3,why:'Morning happiness'}]},
  {id:'comfort',emoji:'🤗',label:'Comfort',sub:'Homesick',recs:[{id:2,why:'Like home cooking'},{id:12,why:'Warm & cozy'},{id:5,why:"Mom's recipe"}]},
  {id:'adventurous',emoji:'🤩',label:'Adventurous',sub:'Try Something New',recs:[{id:4,why:'Explosive flavours'},{id:15,why:'Royal Kashmir'},{id:10,why:'Ancient coastal secret'}]},
  {id:'romantic',emoji:'💕',label:'Romantic',sub:'Date Night',recs:[{id:1,why:'Universally loved'},{id:13,why:'Regal experience'},{id:9,why:'Sunset vibes'}]},
  {id:'tired',emoji:'😴',label:'Tired',sub:'Low Effort Energy',recs:[{id:7,why:'Quick & satisfying'},{id:14,why:'Fast street classic'},{id:11,why:'Light & nourishing'}]},
  {id:'spicy',emoji:'🌶️',label:'Spicy',sub:'Bring the Heat',recs:[{id:4,why:'27-spice explosion'},{id:15,why:'Kashmiri fire'},{id:7,why:'Punchy chutney'}]},
  {id:'sweet',emoji:'🍮',label:'Sweet Tooth',sub:'Dessert First',recs:[{id:6,why:"Bengal's divine sweet"},{id:16,why:'End with sweet'},{id:8,why:'Churma sweetness'}]},
  {id:'healthy',emoji:'🥗',label:'Healthy',sub:'Clean Eating',recs:[{id:5,why:'Omega-3 rich'},{id:12,why:'Light noodle soup'},{id:16,why:'Protein-rich legumes'}]}
];

/* ═══ CART STATE ═══ */
let cart=[];
let orderHistory=JSON.parse(localStorage.getItem('flavoursHist')||'[]');
const getTotal=()=>cart.reduce((s,i)=>s+i.price*i.qty,0);
const getCount=()=>cart.reduce((s,i)=>s+i.qty,0);

function addToCart(dish){
  const ex=cart.find(i=>i.id===dish.id);if(ex)ex.qty++;else cart.push({...dish,qty:1});
  updateCartUI();showToast(dish.emoji+' '+dish.name+' added!');spawnP();
}
function addToCartDirect(n,em,pr,rg){addToCart({id:'d_'+Date.now(),name:n,emoji:em,price:pr,region:rg})}
function removeFromCart(id){cart=cart.filter(i=>i.id!=id);updateCartUI()}
function updateQty(id,d){const it=cart.find(i=>i.id==id);if(!it)return;it.qty+=d;if(it.qty<=0)cart=cart.filter(i=>i.id!=id);updateCartUI();renderCart()}
function updateCartUI(){const b=document.getElementById('cbadge');b.textContent=getCount();b.classList.add('bump');setTimeout(()=>b.classList.remove('bump'),300);renderCart()}

function renderCart(){
  const bd=document.getElementById('cbd'),ft=document.getElementById('cft');
  if(cart.length===0){bd.innerHTML='<div class="cart-em"><div class="ceit">🍽️</div><p style="font-family:\'Syne\',sans-serif;color:var(--cream);font-size:1rem;font-weight:700;margin-bottom:6px">Cart is Empty</p><p style="font-size:.85rem;margin-top:4px;color:var(--muted)">Add some cultural delights!</p></div>';ft.style.display='none';return}
  bd.innerHTML=cart.map(i=>`<div class="citem"><div class="ciem">${i.emoji}</div><div style="flex:1"><div class="cinm">${i.name}</div><div class="cipr">₹${i.price} each</div><div class="ciqt"><button class="ciqb" onclick="updateQty('${i.id}',-1)">−</button><span style="font-size:.9rem;font-weight:700;color:var(--cream)">${i.qty}</span><button class="ciqb" onclick="updateQty('${i.id}',1)">+</button></div></div><div style="text-align:right"><div style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;color:var(--amber)">₹${i.price*i.qty}</div><button class="cirm" onclick="removeFromCart('${i.id}')">Remove</button></div></div>`).join('');
  const sub=getTotal(),tax=Math.round(sub*.05),del=40;
  document.getElementById('cbr').innerHTML=`<div class="cbrow"><span>Subtotal</span><span>₹${sub}</span></div><div class="cbrow"><span>GST (5%)</span><span>₹${tax}</span></div><div class="cbrow"><span>Delivery</span><span>₹${del}</span></div><div class="cbrow tot"><span>Total</span><span>₹${sub+tax+del}</span></div>`;
  ft.style.display='block';
}
function togCart(){document.getElementById('cov').classList.toggle('on');document.getElementById('cpan').classList.toggle('on')}

function checkout(){
  if(!cart.length)return;togCart();
  const oNum='FMT-'+Math.random().toString(36).substr(2,8).toUpperCase();
  const items=cart.slice();const sub=getTotal();const tot=sub+Math.round(sub*.05)+40;
  orderHistory.unshift({id:oNum,date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}),items:items.map(i=>({name:i.name,emoji:i.emoji,qty:i.qty,price:i.price})),total:tot,status:'delivered'});
  localStorage.setItem('flavoursHist',JSON.stringify(orderHistory));cart=[];updateCartUI();
  document.getElementById('obox').innerHTML=`<div class="micon">🎉</div><h2 class="mtit">Order Confirmed!</h2><p class="onum">${oNum}</p><p class="mdsc">Your cultural feast is being prepared with love. Est. 35–45 minutes.</p><div class="odet">${items.map(i=>`<div class="orow"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>₹${i.price*i.qty}</span></div>`).join('')}<div class="orow tot"><span>Total Paid</span><span>₹${tot}</span></div></div><div class="otrk"><div class="otstep"><div class="otd done">✓</div><div class="otl">Confirmed</div></div><div class="otln"></div><div class="otstep"><div class="otd act">🍳</div><div class="otl">Preparing</div></div><div class="otln"></div><div class="otstep"><div class="otd">🛵</div><div class="otl">On the Way</div></div><div class="otln"></div><div class="otstep"><div class="otd">🏠</div><div class="otl">Delivered</div></div></div><button class="mbtn" onclick="closeOM(null,true);openHist()">View Order History →</button>`;
  document.getElementById('omod').classList.add('on');
}
function closeOM(e,f){if(f||!e||e.target===document.getElementById('omod'))document.getElementById('omod').classList.remove('on')}

/* ═══ HISTORY ═══ */
function openHist(){document.getElementById('hmod').classList.add('on');document.body.style.overflow='hidden';renderHist()}
function closeHist(){document.getElementById('hmod').classList.remove('on');document.body.style.overflow=''}
function closeHist2(e){if(e.target===document.getElementById('hmod'))closeHist()}
function renderHist(){
  const bd=document.getElementById('hbdy'),sub=document.getElementById('hsub');
  if(!orderHistory.length){sub.textContent='No orders yet';bd.innerHTML='<div class="hemp"><div class="hi">🍽️</div><h3>No Orders Yet</h3><p>Your completed orders will appear here.</p></div>';return}
  const tot=orderHistory.reduce((s,o)=>s+o.total,0);sub.textContent=`${orderHistory.length} order${orderHistory.length>1?'s':''} · ₹${tot} total`;
  bd.innerHTML=`<div class="hsts"><div class="hsi"><div class="hsn">${orderHistory.length}</div><div class="hsl">Orders</div></div><div class="hsi"><div class="hsn">₹${tot}</div><div class="hsl">Total Spent</div></div><div class="hsi"><div class="hsn">₹${Math.round(tot/orderHistory.length)}</div><div class="hsl">Avg Order</div></div></div>${orderHistory.map(o=>`<div class="ocard"><div class="och"><div><div class="ocn">${o.id}</div><div class="ocd">${o.date}</div></div><span class="ocbg">✓ Delivered</span></div><div class="ocits">${o.items.map(i=>`<div class="ocit">${i.emoji} ${i.name} ×${i.qty}</div>`).join('')}</div><div class="ocft"><div class="oct">₹${o.total}</div><button class="ror" onclick="reorder(${JSON.stringify(o.items).replace(/"/g,'&quot;')})">Reorder 🔄</button></div></div>`).join('')}`;
}
function reorder(items){if(typeof items==='string')items=JSON.parse(items.replace(/&quot;/g,'"'));items.forEach(it=>{for(let i=0;i<it.qty;i++)addToCartDirect(it.name,it.emoji,it.price,'Reorder')});closeHist();setTimeout(()=>{document.getElementById('cov').classList.add('on');document.getElementById('cpan').classList.add('on')},400)}

/* ═══ MENU ═══ */
function dColor(r){const m={'North Indian':'linear-gradient(135deg,rgba(255,140,0,.2),rgba(255,69,0,.12))','South Indian':'linear-gradient(135deg,rgba(46,139,87,.2),rgba(34,139,34,.12))','East Indian':'linear-gradient(135deg,rgba(21,101,192,.2),rgba(66,165,245,.12))','West Indian':'linear-gradient(135deg,rgba(230,81,0,.2),rgba(255,167,38,.12))','Coastal':'linear-gradient(135deg,rgba(0,105,92,.22),rgba(77,182,172,.12))','Himalayan':'linear-gradient(135deg,rgba(55,71,79,.28),rgba(120,144,156,.12))'};return m[r]||'linear-gradient(135deg,rgba(255,140,0,.18),rgba(255,69,0,.1))'}
function renderMenu(f='all'){
  const g=document.getElementById('mgrid');if(!g)return;
  let fd=dishes;if(f==='veg')fd=dishes.filter(d=>d.type==='veg');else if(f==='nonveg')fd=dishes.filter(d=>d.type==='nonveg');else if(f!=='all')fd=dishes.filter(d=>d.region===f);
  g.innerHTML=fd.map(d=>`<div class="dcard" onclick="openDM(${d.id})"><div class="dimg" style="background:${dColor(d.region)}"><span class="dem">${d.emoji}</span>${d.rating>=5?'<div class="dbadge">★ 5.0</div>':''}<div class="dveg ${d.type}">${d.type==='veg'?'🟢':'🔴'}</div></div><div class="dbody"><div class="dorg">${d.region} · ${'🌶'.repeat(d.spice)||'Mild'}</div><div class="dnm">${d.name}</div><div class="dst">${d.story.substring(0,88)}…</div><div class="dmeta"><div class="dpr"><span class="cu">₹</span>${d.price}</div><button class="addbtn" onclick="event.stopPropagation();addToCart(dishes.find(x=>x.id===${d.id}))">+ Add</button></div></div></div>`).join('');
}
function filterMenu(f,btn){document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');renderMenu(f)}
function filterByRegion(r){document.getElementById('menu').scrollIntoView({behavior:'smooth'});setTimeout(()=>{const b=Array.from(document.querySelectorAll('.fbtn')).find(b=>b.textContent.trim().startsWith(r.split(' ')[0]));if(b)filterMenu(r,b)},600)}

/* ═══ DISH MODAL ═══ */
function openDM(id){const d=dishes.find(x=>x.id===id);if(!d)return;document.getElementById('dbox').innerHTML=`<div class="micon">${d.emoji}</div><div class="morg"><span>${d.region}</span></div><h2 class="mtit">${d.name}</h2><p class="mdsc">${d.story}</p><div class="mtags">${d.tags.map(t=>`<span class="mtag">${t}</span>`).join('')}<span class="mtag">${d.type==='veg'?'🟢 Veg':'🔴 Non-Veg'}</span><span class="mtag">⏱ ${d.time}min</span><span class="mtag">⭐ ${d.rating}</span></div><span class="mpr">₹${d.price}</span><button class="mbtn" onclick="addToCart(dishes.find(x=>x.id===${d.id}));closeDM(null,true)">Add to Order</button><button class="mcls" onclick="closeDM(null,true)">Close</button>`;document.getElementById('dmod').classList.add('on')}
function closeDM(e,f){if(f||!e||e.target===document.getElementById('dmod'))document.getElementById('dmod').classList.remove('on')}

/* ═══ FESTIVALS ═══ */
function renderFests(){
  const tb=document.getElementById('ftabs'),co=document.getElementById('fcont');if(!tb)return;
  tb.innerHTML=festivals.map((f,i)=>`<button class="ftab ${i===0?'on':''}" onclick="swFest('${f.id}',this)">${f.icon} ${f.name}</button>`).join('');
  co.innerHTML=festivals.map((f,i)=>`<div class="fcont ${i===0?'on':''}" id="fc-${f.id}"><div class="finfo"><span class="ficon">${f.icon}</span><h3>${f.name}</h3><p>${f.desc}</p><div class="fhls">${f.highlights.map(h=>`<div class="fhl"><span>${h.icon}</span><span class="fht">${h.text}</span></div>`).join('')}</div></div><div class="fdishes">${f.dishes.map(d=>`<div class="fdish" onclick="addToCartDirect('${d.name}','${d.emoji}',${d.price},'${f.name}')"><div class="fde">${d.emoji}</div><div><div class="fdn">${d.name}</div><div class="fdd">${d.desc}</div></div><div class="fdp">₹${d.price}</div></div>`).join('')}</div></div>`).join('');
}
function swFest(id,btn){document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('on'));document.querySelectorAll('.fcont').forEach(c=>c.classList.remove('on'));btn.classList.add('on');document.getElementById('fc-'+id).classList.add('on')}

/* ═══ MOODS ═══ */
function renderMoods(){const g=document.getElementById('mgd');if(!g)return;g.innerHTML=moods.map(m=>`<div class="mcard" onclick="selMood('${m.id}',this)"><span class="mem">${m.emoji}</span><div class="mlb">${m.label}</div><div class="msb">${m.sub}</div></div>`).join('')}
function selMood(id,card){document.querySelectorAll('.mcard').forEach(c=>c.classList.remove('on'));card.classList.add('on');const m=moods.find(x=>x.id===id);const recs=m.recs.map(r=>{const d=dishes.find(x=>x.id===r.id);return d?{...d,why:r.why}:null}).filter(Boolean);const res=document.getElementById('mres');res.innerHTML=`<h3>${m.emoji} Perfect for feeling <em style="color:var(--amber);font-style:normal">${m.label.toLowerCase()}</em></h3><div class="mrecs">${recs.map(d=>`<div class="mrcard"><div class="mre">${d.emoji}</div><div><div class="mrn">${d.name}</div><div class="mrw">${d.why}</div><div class="mrp">₹${d.price} · <a href="#" onclick="event.preventDefault();addToCart(dishes.find(x=>x.id===${d.id}))" style="color:var(--amber);font-weight:600">Add →</a></div></div></div>`).join('')}</div>`;res.classList.add('on');res.scrollIntoView({behavior:'smooth',block:'nearest'})}

/* ═══ CONTACT ═══ */
function submitContact(){const n=document.getElementById('cN').value.trim(),e=document.getElementById('cE').value.trim(),m=document.getElementById('cM').value.trim();if(!n||!e||!m){showToast('Please fill in all required fields.');return}showToast('✉️ Message sent! We\'ll reply within 24 hours.');['cN','cE','cM'].forEach(id=>document.getElementById(id).value='')}

/* ═══ PARTICLES ═══ */
const pc=['#FF8C00','#FFB800','#FF4500','#E63946','#FF6B35'];
function spawnP(){for(let i=0;i<10;i++)setTimeout(()=>{const p=document.createElement('div');p.className='prtcl';const sz=4+Math.random()*6;p.style.cssText=`left:${20+Math.random()*60}vw;top:${20+Math.random()*60}vh;width:${sz}px;height:${sz}px;background:${pc[Math.floor(Math.random()*pc.length)]};--tx:${(Math.random()-.5)*160}px;--ty:${-55-Math.random()*95}px;animation-duration:${1.2+Math.random()*1.8}s;`;document.body.appendChild(p);p.addEventListener('animationend',()=>p.remove())},i*50)}

/* ═══ TOAST ═══ */
let tT;function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('on'),3000)}

/* ═══ SCROLL ANIMATIONS ═══ */
function initObs(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('up');
        e.target.querySelectorAll('[data-count]').forEach(el=>{
          const tg=+el.dataset.count;let s=0;const inc=tg/60;
          const t=setInterval(()=>{s+=inc;el.textContent=Math.min(Math.round(s),tg)+(tg===120?'+':'');if(s>=tg)clearInterval(t)},22);
        });
      }
    });
  },{threshold:.1});
  document.querySelectorAll('.reveal,.stg').forEach(el=>obs.observe(el));
}

/* ═══ NAV SCROLL ═══ */
window.addEventListener('scroll',()=>{if(window.scrollY>50)document.getElementById('mn').classList.add('sc');else document.getElementById('mn').classList.remove('sc')});
