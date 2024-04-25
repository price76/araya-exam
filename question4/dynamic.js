/* write your code here ... */

async function getGames() {
    const response = await fetch("./data/games.json");
    const games = await response.json();
    return games;
}

async function getFA() {
    const response = await fetch("./languages/fa.json");
    const fa = await response.json();
    return fa;
}

async function getEn() {
    const response = await fetch("./languages/en.json");
    const en = await response.json();
    return en;
}

function getButton() {
    const allButtons = document.querySelectorAll("button");

    for (var i = 1; i < allButtons.length; i++) {
        allButtons[i].setAttribute("onclick", "showButtonsId(this.id)");
    }
}

function showButtonsId  (id = 0)  {
    const allButtons = document.querySelectorAll("button");
    for (var i = 1; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");
    }
    allButtons[id].classList.add("active");
    return id;
}
document.getElementById("lang").addEventListener("click", function () {

    document.querySelector("html").setAttribute("lang", "fa")
    document.querySelector("html").setAttribute("dir", "rtl")

})


const useInformation = async () => {
    const gamesInformation = await getGames();
    const en = await getEn();
    const info = document.querySelector(".info");
    const id = showButtonsId();
    const cover = document.querySelector(".cover img");
    cover.src = gamesInformation[id].image;
    const createSpan = document.createElement('span');
    const createH2 = document.createElement('h2');
    createH2.innerText=en.GAMES[id].HEADING;
    const createP = document.createElement('p');
    createP.innerText=en.GAMES[id].DESCRIPTION;

    createSpan.innerText = gamesInformation[id].name;
    info.innerText = "";
    info.append(createSpan);
    info.append(createH2);
    info.append(createP);

};


useInformation();
getButton();




