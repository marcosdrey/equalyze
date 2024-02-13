let sidebar = document.querySelector(".sidebar__general");
let menuicon = document.querySelector("#menu-icon");
let closeicon = document.querySelector(".close-menu");
let header_topics = document.querySelector(".header__topics__container");
let contentlisten = [...document.querySelectorAll(".main__trending__to-listen")];

menuicon.addEventListener('click', ()=>{
    if (sidebar.classList.contains("hidden-menu")) {
        sidebar.classList.remove("hidden-menu");
    }
    if (closeicon.classList.contains("hidden-menu")) {
        closeicon.classList.remove("hidden-menu");
    }
})

closeicon.addEventListener('click', ()=> {
    sidebar.classList.add("hidden-menu");
})

window.addEventListener('resize', ()=> {
    if (window.innerWidth <= 1330) {
        sidebar.classList.add("hidden-menu");
        header_topics.classList.add("hidden-menu");
        menuicon.classList.remove("hidden-menu");
        closeicon.classList.remove("hidden-menu");
        if (window.innerWidth <= 660) {
            contentlisten.forEach(element => {
                element.innerHTML = '<i class="fa-solid fa-play"></i>';
            })   
        }
        else {
            contentlisten.forEach(element => {
                element.innerHTML = 'Listen Now';
            })
    }
}
    else {
        sidebar.classList.remove("hidden-menu");
        header_topics.classList.remove("hidden-menu");
        menuicon.classList.add("hidden-menu");
        closeicon.classList.add("hidden-menu");
        contentlisten.forEach(element => {
            element.innerHTML = 'Listen Now';
        })
    }
})
