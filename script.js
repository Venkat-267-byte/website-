
/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const dishes=[
  {id:1,name:"Butter Chicken",emoji:"🍗",region:"North Indian",type:"nonveg",price:320,story:"Born in 1950s Delhi when a chef accidentally created a tomato-cream sauce for leftover tandoori chicken. Now India's most beloved dish worldwide.",tags:["Creamy","Mild","Heritage"],spice:2,time:30,rating:4.9},
  {id:2,name:"Dal Makhani",emoji:"🫘",region:"North Indian",type:"veg",price:240,story:"A midnight creation by Moti Mahal's founder, simmered overnight on a slow flame. Every dal makhani carries the memory of Partition's refugee cooks.",tags:["Lentils","Rich","Overnight"],spice:2,time:40,rating:4.8},
  {id:3,name:"Masala Dosa",emoji:"🥙",region:"South Indian",type:"veg",price:180,story:"A Udupi monastery recipe from 800 CE — monks created this crispy fermented crêpe to nourish pilgrims. Today it feeds millions every morning.",tags:["Fermented","Crispy","Ancient"],spice:2,time:20,rating:4.9},
  {id:4,name:"Chicken Chettinad",emoji:"🍲",region:"South Indian",type:"nonveg",price:380,story:"The merchant community of Chettinad perfected this explosive spice blend trading along ancient spice routes. 27 whole spices in every bite.",tags:["Fiery","Aromatic","Merchant"],spice:5,time:45,rating:4.7},
  {id:5,name:"Macher Jhol",emoji:"🐟",region:"East Indian",type:"nonveg",price:290,story:"Bengali grandmother's pride. This mustard-turmeric fish curry appears in Rabindranath Tagore's poetry as the taste of home and monsoon rivers.",tags:["Mustard","Turmeric","Poetry"],spice:3,time:35,rating:4.8},
  {id:6,name:"Rasgulla",emoji:"🍮",region:"East Indian",type:"veg",price:120,story:"The great Bengal–Odisha debate of 1868. These spongy chhena spheres were deified — offered to Goddess Lakshmi during Rath Yatra.",tags:["Sweet","Spongy","Divine"],spice:0,time:60,rating:4.9},
  {id:7,name:"Vada Pav",emoji:"🥪",region:"West Indian",type:"veg",price:80,story:"Mumbai's 1974 invention for mill workers. One rupee, enormous satisfaction. This humble potato fritter in bread became India's most democratic meal.",tags:["Street Food","Spicy","Mumbai"],spice:4,time:15,rating:4.8},
  {id:8,name:"Dal Baati Churma",emoji:"🫓",region:"West Indian",type:"veg",price:349,story:"A Rajput warrior's meal — baked in desert sand, eaten before battle. The sweetness of churma balanced the bitterness of war. Now a feast centrepiece.",tags:["Warrior","Desert","Festive"],spice:2,time:60,rating:4.9},
  {id:9,name:"Goan Fish Curry",emoji:"🦈",region:"Coastal",type:"nonveg",price:350,story:"Portuguese-Konkani fusion born from 500 years of Goa's maritime trade. Coconut milk meets tamarind in a curry that tastes like a sea breeze.",tags:["Coconut","Tamarind","Colonial"],spice:3,time:40,rating:4.8},
  {id:10,name:"Prawn Moilee",emoji:"🦐",region:"Coastal",type:"nonveg",price:420,story:"Kerala's white coconut curry — a Syrian Christian recipe passed down 2000 years. Gentlest of all coconut curries; the prawn is the star, not the spice.",tags:["Gentle","Coconut","Ancient"],spice:1,time:35,rating:4.7},
  {id:11,name:"Chicken Momos",emoji:"🥟",region:"Himalayan",type:"nonveg",price:160,story:"Tibetan monks brought these dumplings as winter sustenance. Himalayan families still make them for every celebration — each family guards its secret fold.",tags:["Dumplings","Tibetan","Sacred"],spice:2,time:30,rating:4.8},
  {id:12,name:"Thukpa",emoji:"🍜",region:"Himalayan",type:"veg",price:200,story:"A Ladakhi monk's noodle soup that warms frozen monasteries at 3,500m altitude. Every bowl carries prayer — the broth is made with intention.",tags:["Noodles","Warm","Monastic"],spice:2,time:25,rating:4.7},
  {id:13,name:"Hyderabadi Biryani",emoji:"🍚",region:"South Indian",type:"nonveg",price:380,story:"Nizam's royal kitchen, 1600s. The Dum technique — slow-cooking in a sealed pot — was borrowed from Persian royalty. Each grain absorbs 200 years of history.",tags:["Dum","Royal","Persian"],spice:3,time:120,rating:5.0},
  {id:14,name:"Pav Bhaji",emoji:"🫕",region:"West Indian",type:"veg",price:140,story:"1850s Mumbai dockworkers needed quick nutrition. Vegetable mash with butter-toasted bread became the city's midnight craving — still sizzling on every street.",tags:["Street","Butter","Workers"],spice:3,time:20,rating:4.8},
  {id:15,name:"Rogan Josh",emoji:"🥩",region:"North Indian",type:"nonveg",price:400,story:"Kashmir's crown jewel — brought by Mughal Emperor Akbar from Persia. The 'rogan' (oil) separates at the surface when done perfectly. A sign of mastery.",tags:["Kashmiri","Royal","Mughal"],spice:4,time:75,rating:4.9},
  {id:16,name:"Sambar",emoji:"🍵",region:"South Indian",type:"veg",price:160,story:"Maratha king Sambhaji demanded a Maharashtrian dish be made from Gujarati tamarind. His cook invented this tangy lentil stew. History's happiest accident.",tags:["Tamarind","Lentils","Royal"],spice:3,time:35,rating:4.8}
];

const festivals=[
  {id:'diwali',name:'Diwali',icon:'🪔',color:'#E8853A',desc:'Festival of Lights brings the sweetest spreads — ladoos, chakli, and rich dry fruit sweets made with generations of love.',highlights:[{icon:'🪔',text:'Light Festival'},{icon:'🍬',text:'Sweets Season'},{icon:'👨‍👩‍👧',text:'Family Feast'}],dishes:[
    {emoji:'🟡',name:'Motichoor Ladoo',desc:'Saffron-infused gram flour spheres',price:80},{emoji:'🍫',name:'Kaju Katli',desc:'Diamond cashew fudge with silver leaf',price:120},{emoji:'🌀',name:'Chakli',desc:'Rice flour spirals, crispy and spiced',price:60},{emoji:'🟤',name:'Besan Burfi',desc:'Ghee-roasted gram flour sweet',price:70}]},
  {id:'holi',name:'Holi',icon:'🎨',color:'#C7414B',desc:'Festival of Colours celebrates with cooling thandai, gujiyas, and spiced treats to share with the whole neighbourhood.',highlights:[{icon:'🎨',text:'Festival of Colours'},{icon:'💃',text:'Spring Celebration'},{icon:'🌸',text:'Seasonal Flavours'}],dishes:[
    {emoji:'🥛',name:'Thandai',desc:'Rose-saffron-almond chilled milk',price:80},{emoji:'🥟',name:'Gujiya',desc:'Khoya-stuffed sweet dumplings fried golden',price:90},{emoji:'🍞',name:'Puran Poli',desc:'Jaggery-lentil stuffed flatbread',price:100},{emoji:'🍩',name:'Malpua',desc:'Saffron pancakes soaked in syrup',price:70}]},
  {id:'eid',name:'Eid',icon:'🌙',color:'#4A6741',desc:'Eid ul-Fitr ends Ramzan with the most decadent biryanis, kebabs, and desserts that have been anticipated for a month.',highlights:[{icon:'🌙',text:'End of Ramzan'},{icon:'👑',text:'Royal Feast'},{icon:'🎁',text:'Community Sharing'}],dishes:[
    {emoji:'🍚',name:'Mutton Biryani',desc:'Slow-cooked dum biryani, royal recipe',price:480},{emoji:'🥩',name:'Seekh Kebab',desc:'Minced lamb with aromatic spices',price:280},{emoji:'🍮',name:'Sheer Khurma',desc:'Vermicelli-milk-date festive dessert',price:120},{emoji:'🫕',name:'Nihari',desc:'Overnight slow-cooked mutton stew',price:380}]},
  {id:'onam',name:'Onam',icon:'🌺',color:'#1D6A6A',desc:'Kerala\'s harvest festival brings the legendary Sadya — 26+ dishes served on a banana leaf, a vegetarian feast of cosmic proportions.',highlights:[{icon:'🌺',text:'Harvest Festival'},{icon:'🍌',text:'Banana Leaf Feast'},{icon:'🌿',text:'All Vegetarian'}],dishes:[
    {emoji:'🟡',name:'Avial',desc:'12-vegetable coconut-yoghurt curry',price:180},{emoji:'🟠',name:'Olan',desc:'White pumpkin ash gourd coconut milk',price:160},{emoji:'🍮',name:'Payasam',desc:'Jaggery-coconut-rice pudding',price:120},{emoji:'🫙',name:'Sambar (Onam)',desc:'Sadya special tangy lentil gravy',price:160}]}
];

const moods=[
  {id:'happy',emoji:'😄',label:'Happy',sub:'Celebratory',recs:[{id:7,why:'Pure joy, one bite'},{id:8,why:'A feast to celebrate'},{id:3,why:'Morning happiness'}]},
  {id:'comfort',emoji:'🤗',label:'Comfort',sub:'Homesick',recs:[{id:2,why:'Like home cooking'},{id:12,why:'Warm & cozy'},{id:5,why:'Mom\'s recipe'}]},
  {id:'adventurous',emoji:'🤩',label:'Adventurous',sub:'Try Something New',recs:[{id:4,why:'Explosive flavours'},{id:15,why:'Royal Kashmir'},{id:10,why:'Ancient coastal secret'}]},
  {id:'romantic',emoji:'💕',label:'Romantic',sub:'Date Night',recs:[{id:1,why:'Universally loved'},{id:13,why:'Regal experience'},{id:9,why:'Sunset vibes'}]},
  {id:'tired',emoji:'😴',label:'Tired',sub:'Low Effort Energy',recs:[{id:7,why:'Quick & satisfying'},{id:14,why:'Fast street classic'},{id:11,why:'Light & nourishing'}]},
  {id:'spicy',emoji:'🌶️',label:'Spicy',sub:'Bring the Heat',recs:[{id:4,why:'27-spice explosion'},{id:15,why:'Kashmiri fire'},{id:7,why:'Punchy chutney'}]},
  {id:'sweet',emoji:'🍮',label:'Sweet Tooth',sub:'Dessert First',recs:[{id:6,why:'Bengal\'s divine sweet'},{id:16,why:'... end with sweet'},{id:8,why:'Churma sweetness'}]},
  {id:'healthy',emoji:'🥗',label:'Healthy',sub:'Clean Eating',recs:[{id:5,why:'Omega-3 rich'},{id:12,why:'Light noodle soup'},{id:16,why:'Protein-rich legumes'}]}
];

/* ═══════════════════════════════════════════
   CART STATE
═══════════════════════════════════════════ */
let cart=[];
let currentFilter='all';

function getCartTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}
function getCartCount(){return cart.reduce((s,i)=>s+i.qty,0)}

function addToCart(dish){
  const ex=cart.find(i=>i.id===dish.id);
  if(ex){ex.qty++}else{cart.push({...dish,qty:1})}
  updateCartUI();
  showToast(`${dish.emoji} ${dish.name} added to order!`);
}
function addToCartDirect(name,emoji,price,region){
  addToCart({id:Math.random(),name,emoji,price,region});
}
function removeFromCart(id){
  cart=cart.filter(i=>i.id!==id);
  updateCartUI();
}
function updateQty(id,delta){
  const item=cart.find(i=>i.id===id);
  if(!item)return;
  item.qty+=delta;
  if(item.qty<=0)cart=cart.filter(i=>i.id!==id);
  updateCartUI();
  renderCartPanel();
}

function updateCartUI(){
  document.getElementById('cartBadge').textContent=getCartCount();
  renderCartPanel();
}

function renderCartPanel(){
  const body=document.getElementById('cartBody');
  const footer=document.getElementById('cartFooter');
  if(cart.length===0){
    body.innerHTML=`<div class="cart-empty"><div class="ce-icon">🍽️</div><p>Your cart is empty</p><p style="font-size:.9rem;margin-top:8px;color:#aaa">Add some cultural delights!</p></div>`;
    footer.style.display='none';
    return;
  }
  body.innerHTML=cart.map(i=>`
    <div class="cart-item">
      <div class="ci-emoji">${i.emoji}</div>
      <div style="flex:1">
        <div class="ci-name">${i.name}</div>
        <div class="ci-price">₹${i.price} each</div>
        <div class="ci-qty">
          <button class="ci-qty-btn" onclick="updateQty(${i.id},-1)">−</button>
          <span style="font-family:'DM Mono',monospace">${i.qty}</span>
          <button class="ci-qty-btn" onclick="updateQty(${i.id},1)">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-family:'Playfair Display',serif;font-size:1.1rem;color:var(--ink)">₹${i.price*i.qty}</div>
        <button class="ci-remove" onclick="removeFromCart(${i.id})">Remove</button>
      </div>
    </div>`).join('');
  const sub=getCartTotal();
  const tax=Math.round(sub*0.05);
  const del=40;
  document.getElementById('cartBreakdown').innerHTML=`
    <div class="cb-row"><span>Subtotal</span><span>₹${sub}</span></div>
    <div class="cb-row"><span>GST (5%)</span><span>₹${tax}</span></div>
    <div class="cb-row"><span>Delivery</span><span>₹${del}</span></div>
    <div class="cb-row total"><span>Total</span><span>₹${sub+tax+del}</span></div>`;
  footer.style.display='block';
}

function toggleCart(){
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartPanel').classList.toggle('open');
}

function checkout(){
  if(cart.length===0)return;
  toggleCart();
  const orderNum='FMT-'+Math.random().toString(36).substr(2,8).toUpperCase();
  const total=getCartTotal()+Math.round(getCartTotal()*0.05)+40;
  const items=cart.slice();
  cart=[];
  updateCartUI();
  document.getElementById('orderModalBox').innerHTML=`
    <div class="modal-icon">🎉</div>
    <h2 class="modal-title" style="color:var(--cream)">Order Confirmed!</h2>
    <p class="order-num">${orderNum}</p>
    <p class="modal-desc">Your cultural feast is being prepared with love and tradition. Estimated time: 35–45 minutes.</p>
    <div class="order-details">
      ${items.map(i=>`<div class="od-row"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>₹${i.price*i.qty}</span></div>`).join('')}
      <div class="od-row"><span>Total Paid</span><span>₹${total}</span></div>
    </div>
    <div class="order-track">
      <div class="ot-step"><div class="ot-dot done">✓</div><div class="ot-label">Confirmed</div></div>
      <div class="ot-line"></div>
      <div class="ot-step"><div class="ot-dot active">🍳</div><div class="ot-label">Preparing</div></div>
      <div class="ot-line"></div>
      <div class="ot-step"><div class="ot-dot">🛵</div><div class="ot-label">On the Way</div></div>
      <div class="ot-line"></div>
      <div class="ot-step"><div class="ot-dot">🏠</div><div class="ot-label">Delivered</div></div>
    </div>
    <button class="modal-add-btn" onclick="closeOrderModal(null,true)">Track Order →</button>`;
  document.getElementById('orderModal').classList.add('open');
}

function closeOrderModal(e,force){
  if(force||!e||e.target===document.getElementById('orderModal'))
    document.getElementById('orderModal').classList.remove('open');
}

/* ═══════════════════════════════════════════
   MENU RENDER
═══════════════════════════════════════════ */
function renderMenu(filter='all'){
  const grid=document.getElementById('menuGrid');
  let filtered=dishes;
  if(filter==='veg')filtered=dishes.filter(d=>d.type==='veg');
  else if(filter==='nonveg')filtered=dishes.filter(d=>d.type==='nonveg');
  else if(filter!=='all')filtered=dishes.filter(d=>d.region===filter);
  
  grid.innerHTML=filtered.map(d=>`
    <div class="dish-card" onclick="openDishModal(${d.id})">
      <div class="dish-img" style="background:${dishColor(d.region)}">
        ${d.emoji}
        ${d.rating===5?'<div class="dish-badge">★ 5.0</div>':''}
        <div class="dish-veg ${d.type}">${d.type==='veg'?'🟢':'🔴'}</div>
      </div>
      <div class="dish-body">
        <div class="dish-origin">${d.region} · ${'🌶'.repeat(d.spice)||'Mild'}</div>
        <div class="dish-name">${d.name}</div>
        <div class="dish-story">${d.story.substring(0,90)}…</div>
        <div class="dish-meta">
          <div class="dish-price"><span class="currency">₹</span>${d.price}</div>
          <div class="dish-actions">
            <button class="add-btn" onclick="event.stopPropagation();addToCart(dishes.find(x=>x.id===${d.id}))">+ Add</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function dishColor(r){
  const map={'North Indian':'linear-gradient(135deg,#F2C94C,#E8853A)','South Indian':'linear-gradient(135deg,#56ab2f,#a8e063)','East Indian':'linear-gradient(135deg,#1565C0,#42A5F5)','West Indian':'linear-gradient(135deg,#E65100,#FFA726)','Coastal':'linear-gradient(135deg,#00695C,#4DB6AC)','Himalayan':'linear-gradient(135deg,#37474F,#78909C)'};
  return map[r]||'linear-gradient(135deg,var(--saffron),var(--clay))';
}

function filterMenu(f,btn){
  currentFilter=f;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(f);
}

function filterByRegion(region){
  document.getElementById('menu').scrollIntoView({behavior:'smooth'});
  setTimeout(()=>{
    const btn=Array.from(document.querySelectorAll('.filter-btn')).find(b=>b.textContent.includes(region));
    if(btn)filterMenu(region,btn);
  },600);
}

/* ═══════════════════════════════════════════
   DISH MODAL
═══════════════════════════════════════════ */
function openDishModal(id){
  const d=dishes.find(x=>x.id===id);
  if(!d)return;
  document.getElementById('dishModalBox').innerHTML=`
    <div class="modal-icon">${d.emoji}</div>
    <div class="modal-origin"><span>${d.region}</span></div>
    <h2 class="modal-title">${d.name}</h2>
    <p class="modal-desc">${d.story}</p>
    <div class="modal-tags">
      ${d.tags.map(t=>`<span class="modal-tag">${t}</span>`).join('')}
      <span class="modal-tag">${d.type==='veg'?'🟢 Vegetarian':'🔴 Non-Veg'}</span>
      <span class="modal-tag">⏱ ${d.time} min</span>
      <span class="modal-tag">⭐ ${d.rating}</span>
    </div>
    <div class="modal-price-row">
      <div class="modal-price">₹${d.price}</div>
    </div>
    <button class="modal-add-btn" onclick="addToCart(dishes.find(x=>x.id===${d.id}));closeDishModal(null,true)">Add to Order</button>
    <button class="modal-close-btn" onclick="closeDishModal(null,true)">Close</button>`;
  document.getElementById('dishModal').classList.add('open');
}
function closeDishModal(e,force){
  if(force||!e||e.target===document.getElementById('dishModal'))
    document.getElementById('dishModal').classList.remove('open');
}

/* ═══════════════════════════════════════════
   FESTIVALS
═══════════════════════════════════════════ */
function renderFestivals(){
  const tabs=document.getElementById('festTabs');
  const content=document.getElementById('festContent');
  tabs.innerHTML=festivals.map((f,i)=>`<button class="fest-tab ${i===0?'active':''}" onclick="switchFest('${f.id}',this)">${f.icon} ${f.name}</button>`).join('');
  content.innerHTML=festivals.map((f,i)=>`
    <div class="festival-content ${i===0?'active':''}" id="fest-${f.id}">
      <div class="fest-info">
        <div class="fest-icon">${f.icon}</div>
        <h3>${f.name}</h3>
        <p>${f.desc}</p>
        <div class="fest-highlight">${f.highlights.map(h=>`<div class="fh-item"><span>${h.icon}</span><span class="fh-text">${h.text}</span></div>`).join('')}</div>
      </div>
      <div class="fest-dishes">${f.dishes.map(d=>`
        <div class="fest-dish-item" onclick="addToCartDirect('${d.name}','${d.emoji}',${d.price},'${f.name}')">
          <div class="fdi-emoji">${d.emoji}</div>
          <div><div class="fdi-name">${d.name}</div><div class="fdi-desc">${d.desc}</div></div>
          <div class="fdi-price">₹${d.price}</div>
        </div>`).join('')}
      </div>
    </div>`).join('');
}
function switchFest(id,btn){
  document.querySelectorAll('.fest-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.festival-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('fest-'+id).classList.add('active');
}

/* ═══════════════════════════════════════════
   MOOD
═══════════════════════════════════════════ */
function renderMoods(){
  document.getElementById('moodGrid').innerHTML=moods.map(m=>`
    <div class="mood-card" onclick="selectMood('${m.id}',this)">
      <div class="mood-emoji">${m.emoji}</div>
      <div class="mood-label">${m.label}</div>
      <div class="mood-sub">${m.sub}</div>
    </div>`).join('');
}
function selectMood(id,card){
  document.querySelectorAll('.mood-card').forEach(c=>c.classList.remove('active'));
  card.classList.add('active');
  const m=moods.find(x=>x.id===id);
  const recs=m.recs.map(r=>{const d=dishes.find(x=>x.id===r.id);return d?{...d,why:r.why}:null}).filter(Boolean);
  const res=document.getElementById('moodResults');
  res.innerHTML=`<h3>${m.emoji} Perfect picks for when you're feeling <em>${m.label.toLowerCase()}</em></h3>
    <div class="mood-recs">${recs.map(d=>`
      <div class="mood-rec-card">
        <div class="mrc-emoji">${d.emoji}</div>
        <div><div class="mrc-name">${d.name}</div><div class="mrc-why">${d.why}</div>
        <div class="mrc-price">₹${d.price} · <a href="#" onclick="event.preventDefault();addToCart(dishes.find(x=>x.id===${d.id}))" style="color:var(--saffron);font-family:'Crimson Pro',serif">Add to Cart</a></div></div>
      </div>`).join('')}
    </div>`;
  res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ═══════════════════════════════════════════
   TOAST
═══════════════════════════════════════════ */
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3000);
}

/* ═══════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════ */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  if(window.scrollY>50)document.getElementById('mainNav').classList.add('scrolled');
  else document.getElementById('mainNav').classList.remove('scrolled');
});

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
renderMenu();
renderFestivals();
renderMoods();
renderCartPanel();

/* ═══════════════════════════════════════════
   AUTH MODAL
═══════════════════════════════════════════ */
function openLogin() {
  setAuthMode('login');
  const modal = document.getElementById('loginModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { const el = document.getElementById('authEmailInput'); if(el) el.focus(); }, 320);
}

function closeLogin(e) {
  if (e && e.target !== document.getElementById('loginModal')) return;
  _closeAuthModal();
}

function closeLoginBtn() { _closeAuthModal(); }

function _closeAuthModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  clearAuthErrors();
  document.querySelectorAll('#loginModal input').forEach(i => i.value = '');
}

function setAuthMode(mode) {
  clearAuthErrors();
  document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('visible'));
  const panelMap = { login: 'authLoginPanel', register: 'authRegisterPanel', forgot: 'authForgotPanel' };
  const panel = document.getElementById(panelMap[mode]);
  if (panel) setTimeout(() => panel.classList.add('visible'), 10);
}

function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearAuthErrors() {
  document.querySelectorAll('.auth-field-error').forEach(el => { el.textContent = ''; el.style.display = 'none'; });
}

function loginUser() {
  clearAuthErrors();
  const email = document.getElementById('authEmailInput').value.trim();
  const pass  = document.getElementById('authPasswordInput').value;
  let ok = true;
  if (!email) { showAuthError('loginEmailErr','Email is required.'); ok=false; }
  else if (!validateEmail(email)) { showAuthError('loginEmailErr','Enter a valid email.'); ok=false; }
  if (!pass) { showAuthError('loginPassErr','Password is required.'); ok=false; }
  else if (pass.length < 6) { showAuthError('loginPassErr','At least 6 characters required.'); ok=false; }
  if (!ok) return;
  const btn = document.getElementById('loginSubmitBtn');
  setAuthBtnLoading(btn, true, 'Login');
  setTimeout(() => {
    setAuthBtnLoading(btn, false, 'Login');
    localStorage.setItem('authUser', JSON.stringify({ email, name: email.split('@')[0] }));
    updateNavForUser(email);
    _closeAuthModal();
    showToast('Welcome back! 🍛');
  }, 1200);
}

function registerUser() {
  clearAuthErrors();
  const name    = document.getElementById('authNameInput').value.trim();
  const email   = document.getElementById('authRegEmailInput').value.trim();
  const pass    = document.getElementById('authRegPassInput').value;
  const confirm = document.getElementById('authRegConfirmInput').value;
  let ok = true;
  if (!name)  { showAuthError('regNameErr','Full name is required.'); ok=false; }
  if (!email) { showAuthError('regEmailErr','Email is required.'); ok=false; }
  else if (!validateEmail(email)) { showAuthError('regEmailErr','Enter a valid email.'); ok=false; }
  if (!pass || pass.length < 6) { showAuthError('regPassErr','At least 6 characters.'); ok=false; }
  if (pass !== confirm) { showAuthError('regConfirmErr','Passwords do not match.'); ok=false; }
  if (!ok) return;
  const btn = document.getElementById('registerSubmitBtn');
  setAuthBtnLoading(btn, true, 'Create Account');
  setTimeout(() => {
    setAuthBtnLoading(btn, false, 'Create Account');
    localStorage.setItem('authUser', JSON.stringify({ email, name }));
    updateNavForUser(name);
    _closeAuthModal();
    showToast('Welcome, ' + name + '! 🎉');
  }, 1400);
}

function sendResetLink() {
  clearAuthErrors();
  const email = document.getElementById('authForgotEmailInput').value.trim();
  if (!email) { showAuthError('forgotEmailErr','Email is required.'); return; }
  if (!validateEmail(email)) { showAuthError('forgotEmailErr','Enter a valid email.'); return; }
  const btn = document.getElementById('forgotSubmitBtn');
  setAuthBtnLoading(btn, true, 'Send Reset Link');
  setTimeout(() => {
    setAuthBtnLoading(btn, false, 'Send Reset Link');
    const panel = document.getElementById('authForgotPanel');
    panel.innerHTML = '<div class="auth-success-state"><div class="auth-success-icon">📬</div><h3>Check Your Inbox</h3><p>A reset link was sent to <strong>' + email + '</strong></p><button class="auth-link-btn" onclick="setAuthMode(\'login\')">← Back to Login</button></div>';
  }, 1200);
}

function togglePassword(inputId, iconId) {
  const inp = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  if (!inp || !icon) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
  icon.textContent = inp.type === 'password' ? '👁' : '🙈';
}

function setAuthBtnLoading(btn, loading, label) {
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? '<span class="auth-spinner"></span><span>' + label + '...</span>'
    : '<span>' + label + '</span>';
}

function updateNavForUser(nameOrEmail) {
  const link = document.querySelector('.nav-links a[onclick*="openLogin"]');
  if (link) {
    link.textContent = '👤 ' + nameOrEmail.split('@')[0];
    link.setAttribute('onclick', 'logoutUser()');
  }
}

function logoutUser() {
  localStorage.removeItem('authUser');
  const link = document.querySelector('.nav-links a[onclick*="logoutUser"]');
  if (link) { link.textContent = 'Login'; link.setAttribute('onclick', 'openLogin()'); }
  showToast('Logged out. See you soon! 👋');
}

// Restore session on load
document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('authUser');
  if (stored) { try { const u = JSON.parse(stored); updateNavForUser(u.name || u.email); } catch(e){} }
});
