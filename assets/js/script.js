const bMenu = document.getElementById('burger-menu');
const menuDiv = document.getElementById('menu');
bMenu.addEventListener('click', function () {
    menuDiv.style.display = 'block';
    
})

window.addEventListener('mouseup', function(e) {
    if (event.target != menuDiv) {
        menuDiv.style.display = "none";
    }
});
