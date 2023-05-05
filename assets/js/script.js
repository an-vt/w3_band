var mobileMenu = document.getElementById('mobile-menu');
var header = document.getElementById('header');
let headerHeight = header.clientHeight;
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// open/close mobile menu
mobileMenu.onclick = function() {   
    let isClosed = header.clientHeight === headerHeight;
    if(isClosed){
        header.style.height = 'auto';
        console.log(header.clientHeight)
    }else {
        header.style.height = null;
    }
}

// auto close when chose menu
let menuItems = document.querySelectorAll("#nav li a[href*='#']");
for(let i = 0 ;i < menuItems.length ;i++){
    let menuItem = menuItems[i];
    menuItem.onclick = function() {
        var isParentMenuCurrent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenuCurrent){
            event.defaultPrevented();
        }else{
            header.style.height = null;
        }
    }
}

for (const buyBtn of buyBtns) {
    buyBtn.onclick = () => {
        modal.classList.add('open')
    }
}

modalClose.onclick = () => {
    modal.classList.remove('open')
}

// vì sự kiện nó nổi bọt nên khi bấm vào modal và cả thằng con của nó cũng bị đóng luôn
modal.onclick = () => {
    modal.classList.remove('open')
}

// tắt sự kiện nổi bọt đi để khi bấm vào thằng con modal nó không bị tắt đi nữa
modalContainer.onclick = (event) => {
    //chặn sự kiện nổi bọt
    event.stopPropagation()
}