// let hamburger = document.getElementsByClassName('.navbar-default')
hamburger.addEventListener('click',()=>{
    console.log('clicked')
    document.querySelector('.mnav').style.opacity='1'
    document.querySelector('.welcome').style.opacity='0'
})
cross.addEventListener('click',()=>{
    console.log('clicked')
    document.querySelector('.mnav').style.opacity='0'
    document.querySelector('.welcome').style.opacity='100'
})
