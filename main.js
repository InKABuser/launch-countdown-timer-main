let countDate = new Date('Jan 1, 2021 00:00:00').getTime();

const newYear = () => {
    let now = new Date().getTime();
        gap = countDate - now;
        
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / (second));

       const dayEl = document.getElementById('day');
       const hourEl = document.getElementById('hour');
       const minuteEl = document.getElementById('minute');
       const secondEl =  document.getElementById('second');

       if (dayEl.innerText != d) {
           dayEl.innerText = d;
       }
       if (hourEl.innerText != h) {
           hourEl.innerText = h;
       }
       if (minuteEl.innerText != m) {
           minuteEl.innerText = m;
       }
       if (secondEl.innerText != s) {
           secondEl.innerText = s;
       }
       
}
setInterval(function(){
    newYear();
},1000)

const itemsContainer = document.querySelector('.container');
const items = Array.from(document.getElementsByClassName('item'));

const observer = new MutationObserver(mutations => {
    //console.log(mutations);
    items.forEach(el => el.classList.remove('animate__flipInX'));
    for(let mutation of mutations) {
        if (mutation.type == 'childList') {
            mutation.target.classList.add('animate__flipInX')
        }else {
            mutation.target.classList.remove('animate__flipInX');
        }
    }
});


observer.observe(itemsContainer, {
    innerText: true,
    childList:true,
    subtree:true,
    characterData:true
});

const actionToggle = () => {
    const action = document.querySelector('.action');
    action.classList.toggle('active'); 
}