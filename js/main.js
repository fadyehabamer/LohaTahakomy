
var menu = document.getElementById('menu-ic');
var sideBar = document.getElementById('sidebar');
var brand = document.querySelector('.brand');
var link = document.querySelectorAll('.ulist .item a')
var linkName = document.querySelectorAll('.ulist .item .link-name');
menu.onclick = function () {
    if (sideBar.style.width == "80px") {
        menu.style.width = '10%';
        sideBar.style.width = "260px";
        for (i = 0; i < linkName.length; i++) {
            linkName[i].style.display = "inline-block";
            link[i].classList.remove('text-center');
        }
        brand.style.display = "flex";
    } else {
        menu.style.width = '100%';
        sideBar.style.width = "80px";
        for (i = 0; i < linkName.length; i++) {
            linkName[i].style.display = "none";
            link[i].classList.add('text-center');
        }
        brand.style.display = "none";
    }
}