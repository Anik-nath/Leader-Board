//1
const topplayers = document.getElementById('top-players');
topplayers.style.color = 'tomato'

const topblogs = document.getElementById('top-blogs');
topblogs.style.color = 'red';
//2
const player = document.getElementsByClassName('player')
for (const elements of player) {
    elements.style.background = 'rgba(0,255,0,0.3)';
}
//try by parent element
const players = document.getElementById('players');
const p = players.children;
for (const items of p) {
    items.style.color = 'red'
}
//3
const menu = document.getElementById('menu');
const addbutton = document.getElementById('add');
addbutton.addEventListener('click',function(){
    const newitem = document.createElement('li');
    newitem.innerText = 'new-list';
    menu.appendChild(newitem);
})
//4 and 5
const increasebtn = document.getElementById('increase');
increasebtn.addEventListener('click',function(){
    const input = document.getElementById('input-field');
    const prevValue =input.value;
    if(prevValue != 5){
        const newvalue = parseInt(prevValue) + 1;
        input.value = newvalue;
        if(newvalue == 5){
            increasebtn.setAttribute('disabled','');
        }
    }
})
//8 je sob book er nam a javascript ace se gulo khujte hbe
const booklist = [
    'JavaScript : The Definitive Guide',
    'Eloquent JavaScript : A Modern Introduction to Programming',
    'Learn JavaScript VISUALLY',
    'JavaScript & JQuery : Interactive Front-End Web Development',
    'High-Performance Browser Networking',
    'JavaScript : The Good Parts',
    'You Don’t Know JS'
]
let newBookList = [];
for (const books of booklist) {
   const convertedText = books.toLocaleLowerCase();
  
   if(convertedText.includes('javascript') == true){
      newBookList.push(books);
   }
}
console.log(newBookList);
//9 choto theke boro serial by sajate hobe
const age = [9,8,1,77,25,93,67,11];
console.log('before sort : ',age)
const newAge  = age.sort(function(a,b){
    return a - b;
});
console.log("After sort :",newAge)
