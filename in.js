
const allbtns=document.querySelectorAll('h4');
const day=document.querySelector('.daily')
const week=document.querySelector('.weekly')
const mon=document.querySelector('.monthly')
for (let i=0;i<allbtns.length;i++){
    allbtns[i].addEventListener('click',function(){
        allbtns[i].classList.toggle('active')
    });
}
// async function timeTracking(){
//     let responce= await fetch('data.json')
//     let content= await responce.json()
//     console.log(content)
// }
day.addEventListener('click',function(){
    document.querySelector('.one').innerHTML=`5hrs`
    document.querySelector('.one1').innerHTML=`Previous -  7hrs`
    document.querySelector('.two').innerHTML=`1hrs`
    document.querySelector('.two1').innerHTML=`Previous -  2hrs`
    document.querySelector('.thr').innerHTML=`5hrs`
    document.querySelector('.thr1').innerHTML=`Previous -  0hrs`
    document.querySelector('.fou').innerHTML=`1hrs`
    document.querySelector('.fou1').innerHTML=`Previous -  1hrs`
    document.querySelector('.fi').innerHTML=`1hrs`
    document.querySelector('.fi1').innerHTML=`Previous -  3hrs`
    document.querySelector('.six').innerHTML=`0hrs`
    document.querySelector('.six11').innerHTML=`Previous -  1hrs`
});
week.addEventListener('click',function(){
    document.querySelector('.one').innerHTML=`32hrs`
    document.querySelector('.one1').innerHTML=`Previous -  36hrs`
    document.querySelector('.two').innerHTML=`10hrs`
    document.querySelector('.two1').innerHTML=`Previous -  8hrs`
    document.querySelector('.thr').innerHTML=`4hrs`
    document.querySelector('.thr1').innerHTML=`Previous -  7hrs`
    document.querySelector('.fou').innerHTML=`4hrs`
    document.querySelector('.fou1').innerHTML=`Previous -  5hrs`
    document.querySelector('.fi').innerHTML=`5hrs`
    document.querySelector('.fi1').innerHTML=`Previous -  10hrs`
    document.querySelector('.six').innerHTML=`2hrs`
    document.querySelector('.six11').innerHTML=`Previous -  2hrs`
});
mon.addEventListener('click',function(){
    document.querySelector('.one').innerHTML=`103hrs`
    document.querySelector('.one1').innerHTML=`Previous -  128hrs`
    document.querySelector('.two').innerHTML=`23hrs`
    document.querySelector('.two1').innerHTML=`Previous -  29hrs`
    document.querySelector('.thr').innerHTML=`13hrs`
    document.querySelector('.thr1').innerHTML=`Previous -  29hrs`
    document.querySelector('.fou').innerHTML=`11hrs`
    document.querySelector('.fou1').innerHTML=`Previous -  91hrs`
    document.querySelector('.fi').innerHTML=`21hrs`
    document.querySelector('.fi1').innerHTML=`Previous -  23hrs`
    document.querySelector('.six').innerHTML=`7hrs`
    document.querySelector('.six11').innerHTML=`Previous -  11hrs`
});