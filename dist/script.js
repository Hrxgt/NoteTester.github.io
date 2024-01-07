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


document.addEventListener('DOMContentLoaded', function () {
    var dropzone = document.getElementById('file_input1');
    var fileInput = document.getElementById('dropzone-file');
    var uploadButton = document.getElementById('upload_btn');

    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropzone.classList.add('bg-gray-100');
    });

    dropzone.addEventListener('dragleave', function () {
        dropzone.classList.remove('bg-gray-100');
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropzone.classList.remove('bg-gray-100');

        var files = e.dataTransfer.files;
        handleFiles(files);
    });

    fileInput.addEventListener('change', function () {
        var files = fileInput.files;
        handleFiles(files);
    });

    uploadButton.addEventListener('click', function () {
        // file input click event when the upload button is clicked
        fileInput.click();
    });
   // Prevent default behavior for the document's dragover 
    document.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    document.addEventListener('drop', function (e) {
        e.preventDefault();
    });
});





