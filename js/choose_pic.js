//installing jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


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
    event.target.src = "pictures\\hm2.gif";
});

hm2.addEventListener('mouseout', event=>{
    event.target.src = "pictures\\hm2.png";
});

hm2.addEventListener('click', event=>{
    window.location.href = "../hm2/hm2.html";
})