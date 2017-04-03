//VARIABLES GLOBALES
var coders = [];
var codersContainer = document.getElementById('list_coders');
var promotionSelect = document.getElementById('coders_filter');
//FUNCIONES
function Coder(promotion, name, photo){
  this.promotion = promotion;
  this.name = name;
  this.photo = photo;
}
function createImgCoder(parent, urlImage){
  var coderImg = document.createElement('img');
  coderImg.setAttribute('class', 'coder');
  coderImg.setAttribute('src',urlImage);
  parent.appendChild(coderImg);
}
function printAllCoders(container){
  coders.forEach(function(coder){
      createImgCoder(container, coder.photo);
  });
}
function filterCoders(filter){
  coders.forEach(function(coder, index){
    var img = document.getElementsByClassName('coder')[index];
      if (filter == coder.promotion) {
        img.classList.remove('hide');
        img.classList.add('show');
      }else{
        img.classList.remove('show');
        img.classList.add('hide');
      }
  });
}
//CARGANDO CODERS
function loadCoders () {
  coders.push(new Coder("CHILE4", "Anais Araya", "assets/img/coders_laboratoria/4-chile/anais-araya .jpg"));
  coders.push(new Coder("CHILE4", "Andrea Miranda", "assets/img/coders_laboratoria/4-chile/andrea-miranda.jpg"));
  coders.push(new Coder("CHILE4", "Berenisse Ríos", "assets/img/coders_laboratoria/4-chile/berenisse-ríos.jpg"));
  coders.push(new Coder("CHILE4", "Caterina Da Silva", "assets/img/coders_laboratoria/4-chile/caterina-da-silva.jpg"));
  coders.push(new Coder("CHILE4", "Daniela Sanchez", "assets/img/coders_laboratoria/4-chile/daniela-sanchez.jpg"));
  coders.push(new Coder("CHILE4", "Francisa Ojeda", "assets/img/coders_laboratoria/4-chile/francisca-ojeda.jpg"));
  coders.push(new Coder("CHILE4", "Katherine Sandoval", "assets/img/coders_laboratoria/4-chile/katerine-sandoval.jpg"));

  coders.push(new Coder("LIMA5", "Andrea Cabrera", "assets/img/coders_laboratoria/5-lima/andrea-cabrera.jpg"));
  coders.push(new Coder("LIMA5", "Ariadna Izaguirre", "assets/img/coders_laboratoria/5-lima/ariadna-izaguirre.jpg"));
  coders.push(new Coder("LIMA5", "Carito Juarez", "assets/img/coders_laboratoria/5-lima/carito-juarez.jpg"));
  coders.push(new Coder("LIMA5", "Cristy Castro", "assets/img/coders_laboratoria/5-lima/cristy-castro.jpg"));
  coders.push(new Coder("LIMA5", "Karol Orrillo", "assets/img/coders_laboratoria/5-lima/karol-orrillo.jpg"));
  coders.push(new Coder("LIMA5", "Paola Ortiz", "assets/img/coders_laboratoria/5-lima/paola-ortiz.jpg"));
  coders.push(new Coder("LIMA5", "Teresa Lara", "assets/img/coders_laboratoria/5-lima/teresa-lara.jpg"));

  coders.push(new Coder("LIMA6", "Arantza Burga", "assets/img/coders_laboratoria/6-lima/arantza-burga.jpg"));
  coders.push(new Coder("LIMA6", "Daguiana Revoredo", "assets/img/coders_laboratoria/6-lima/daguiana-revoredo.jpg"));
  coders.push(new Coder("LIMA6", "Elizabeth Condori", "assets/img/coders_laboratoria/6-lima/elizabeth-condori.jpg"));
  coders.push(new Coder("LIMA6", "Grecia Rayme", "assets/img/coders_laboratoria/6-lima/grecia-rayme.jpg"));
  coders.push(new Coder("LIMA6", "Janine Vega", "assets/img/coders_laboratoria/6-lima/janine-vega.jpg"));
  coders.push(new Coder("LIMA6", "Michelle More", "assets/img/coders_laboratoria/6-lima/michelle-more.jpg"));
  coders.push(new Coder("LIMA6", "Mishel Velasquez", "assets/img/coders_laboratoria/6-lima/mishel-velasquez.jpg"));
  coders.push(new Coder("LIMA6", "Rosario Felix", "assets/img/coders_laboratoria/6-lima/rosario-felix.jpg"));
}

//EVENTOS
window.addEventListener('load', function (){
  loadCoders();
  printAllCoders(codersContainer);
});
promotionSelect.onchange = function () {
  filterCoders(promotionSelect.value)
}
