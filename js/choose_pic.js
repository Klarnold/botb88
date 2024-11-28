//installing jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


var hm2 = document.querySelector("#hm2");
var ultrakill = document.querySelector("#ultrakill");
var valiant_hearts = document.querySelector("#valiant_hearts");
var slay_the_spire = document.querySelector("#slay_the_spire");
var gremlins_inc = document.querySelector("#gremlins_inc");
var heart_stone = document.querySelector("#heart_stone");
var upper_menu = document.querySelector("#heading")

upper_menu.addEventListener('click', (event)=>{
    let name = event.target.textContent.trim();
    if (name == "Главная страница")
        window.location.href = "index.html";
    else if (name == "Новости")
        window.location.href = "news.html";
    else if (name == "Выбор по описанию")
        window.location.href = "choose_desc.html";
    else if (name == "Выбор по обложке")
        window.location.href = "choose_pic.html";
    console.log(name);
})

hm2.addEventListener('mouseover', event=>{
    event.target.src = "pictures/hm2.gif";
});

hm2.addEventListener('mouseout', event=>{
    event.target.src = "pictures/hm2.png";
});

hm2.addEventListener('click', event=>{
    window.location.href = "sites/games/hm2.html";
})

ultrakill.addEventListener('mouseover', event=>{

    event.target.src = "pictures/ultrakill.gif";
});

ultrakill.addEventListener('mouseout', event=>{
    event.target.src = "pictures/ultrakill.png";
});

ultrakill.addEventListener('click', event=>{
    window.location.href = "sites/games/ultrakill.html";
})

valiant_hearts.addEventListener('mouseover', event=>{

    event.target.src = "pictures/valiant_hearts.gif";
});

valiant_hearts.addEventListener('mouseout', event=>{
    event.target.src = "pictures/valiant_hearts.png";
});

valiant_hearts.addEventListener('click', event=>{
    window.location.href = "sites/games/valiant_hearts.html";
})

gremlins_inc.addEventListener('mouseover', event=>{

    event.target.src = "pictures/gremlins.png";
});

gremlins_inc.addEventListener('mouseout', event=>{
    event.target.src = "pictures/gremlins_inc.png";
});

gremlins_inc.addEventListener('click', event=>{
    window.location.href = "sites/games/gremlins_inc.html";
})

heart_stone.addEventListener('mouseover', event=>{

    event.target.src = "pictures/heart_stone.gif";
});

heart_stone.addEventListener('mouseout', event=>{
    event.target.src = "pictures/heart_stone.png";
});

heart_stone.addEventListener('click', event=>{
    window.location.href = "sites/games/heart_stone.html";
})

slay_the_spire.addEventListener('mouseover', event=>{

    event.target.src = "pictures/slay_the_spire.gif";
});

slay_the_spire.addEventListener('mouseout', event=>{
    event.target.src = "pictures/slay_the_spire.png";
});

slay_the_spire.addEventListener('click', event=>{
    window.location.href = "sites/games/slay_the_spire.html";
})