const hamburgerBtn = document.getElementById('hamburger'),
closeBtn = document.getElementById('close'),
dropdownMenu = document.querySelector('.home__mobile__menu');
console.log(hamburgerBtn)

function showMenu(){
    let closeMenu = closeBtn;
    let openMenu = hamburgerBtn;

    if (dropdownMenu.style.visibility === "hidden"){
        dropdownMenu.style.visibility = "visible"
        openMenu.style.display = 'none'
    } 
    closeMenu.style.display = 'block'
    dropdownMenu.style.visibility = "visible" 
}
function hideMenu(){
    let closeMenu = closeBtn;
    let openMenu = hamburgerBtn;

    if (dropdownMenu.style.visibility === "visible"){
        dropdownMenu.style.visibility = "hidden"
        closeMenu.style.display = 'none'
    } 
    openMenu.style.display = 'block'
    dropdownMenu.style.visibility = "hidden" 
}

hamburgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu)

