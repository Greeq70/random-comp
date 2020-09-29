const comp = document.querySelector('.cmp');

comp.style.display = 'none';

const btn = document.querySelector('.bu');
btn.addEventListener('click', rdmComp);

function rdmComp(){
var losowy = Math.floor(Math.random() * 23) +1;
comp.style.display = 'block';
comp.src = 'img/comp-' + losowy + '.jpg';



}
