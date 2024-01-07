// hamburger.addEventListener('click',()=>{
//     console.log('clicked')
//     document.querySelector('.mnav').style.opacity='1'
//     document.querySelector('.welcome').style.opacity='0'
//     document.querySelector('.container').style.opacity='0'
// })
// cross.addEventListener('click',()=>{
//     console.log('clicked')
//     document.querySelector('.mnav').style.opacity='0'
//     document.querySelector('.welcome').style.opacity='1'
//     document.querySelector('.container').style.opacity='0'
// })
document.addEventListener("DOMContentLoaded", function () {
        // Get the button and dropdown elements
        var toggleButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
        var dropdown = document.getElementById('navbar-dropdown');
    
        // Add a click event listener to the button
        toggleButton.addEventListener('click', function () {
            // Toggle the 'hidden' class on the dropdown element
            dropdown.classList.toggle('hidden');
    
            // Toggle the 'aria-expanded' attribute on the button
            var isExpanded = dropdown.classList.contains('hidden') ? 'false' : 'true';
            toggleButton.setAttribute('aria-expanded', isExpanded);
        });
});






