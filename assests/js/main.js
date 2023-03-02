// typing
var typed = new Typed('.typing', {
    strings: ['', 'Marketing Executive'],
    typeSpeed: 80,
    BackSpeed: 0,
    loop: true,
    fadeOut: true
})

// mixitup
var mixer = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 500
    }
});

// skills tabs
// milestone tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(element => {
            element.classList.remove('show_active')
        })

        target.classList.add('show_active')

        tabs.forEach(tab => {
            tab.classList.remove('show_active')
        })

        tab.classList.add('show_active')

    })
})

// work
const linkWork = document.querySelectorAll('.work_item')

linkWork.forEach(link => link.addEventListener('click', () => {
    linkWork.forEach(link => link.classList.remove('active_work'));
    link.classList.add('active_work')
}))

// work popup
document.addEventListener('click', e => {
    if (e.target.classList.contains('work_button')) {
        toggleWorkPopup();
        workItemDetails(e.target.parentElement)
    }
})

function toggleWorkPopup() {
    document.querySelector('.work_popup').classList.toggle('open')
}

document.querySelector('.work_close').addEventListener('click', toggleWorkPopup)

function workItemDetails(item) {
    document.querySelector('.popup_thumbnail img').src = item.querySelector('.work_img').src
    document.querySelector('.details_title span').innerHTML = item.querySelector('.work_title').innerHTML
    document.querySelector('.popup_body').innerHTML = item.querySelector('.details_description').innerHTML
}

// sidebar
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav_list');
const navLength = navList.length;

const navToggler = document.querySelector('.nav_toggler');

const sideBar = document.querySelector('.sidebar');

const allSection = document.querySelectorAll('.section');
const sectionsID = document.querySelectorAll('.section[id]')
const sectionLength = allSection.length;

for (let i = 0; i < navLength; i++) {
    const navItem = navList[i].querySelector('a');
    navItem.addEventListener( 'click', () => {
        for (let j = 0; j < navLength; j++) {
            navList[j].querySelector('a').classList.remove('active');
        }
        navItem.classList.add('active');
        
    })
}

// nav toggler
navToggler.addEventListener( 'click', () => sidebarSection())

function sidebarSection() {
    navToggler.classList.toggle('open')
    sideBar.classList.toggle('open')

    for (let i = 0; i < sectionLength; i++) {
        allSection[i].classList.toggle('open');
    }
}

// scroll sections
window.addEventListener("scroll", sidebarHighlight)

function sidebarHighlight() {
    let scrollY = window.pageYOffset;

    sectionsID.forEach(curr => {
        const sectionHeight = curr.offsetHeight;
        const sectionTop = curr.offsetTop - 50,
        sectionId = curr.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active')
        }
        else {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

