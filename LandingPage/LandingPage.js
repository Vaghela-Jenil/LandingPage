var bar = document.querySelector('.bar');
var sidenav = document.querySelector('.sidenav');

function openSideBar(){
    sidenav.style.display = 'block';
    bar.style.display = 'none';
}

function closeSideBar(){
    bar.style.display = 'block';
    sidenav.style.display = 'none';
}