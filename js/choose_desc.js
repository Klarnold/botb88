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

window.onload = function(){
    var all_text = document.body.querySelectorAll("#text");
    var all_images = document.body.querySelectorAll(".img");
    all_text.forEach(element => {
        element.addEventListener('click', function(){
            window.location.href = "sites/games/" + element.className + ".html";
        })
    });

    all_images.forEach(element =>{
        element.addEventListener('click', function(){
            let path = element.src.split('/');
            let path_length = path.length;
            if (path[path_length-1].split('.')[1] != "gif")
                element.src = "pictures/" + element.id + ".gif";
            else
                element.src = "pictures/" + element.id + ".png";
        })
    });
}