// header

const mainHeader = document.querySelector('header')

const yodaImg = document.createElement('img');
yodaImg.src="yoda.png";
yodaImg.width="229";
yodaImg.height="200";
yodaImg.alt="Yoda";

const mainImg = document.createElement('img');
mainImg.src="image2.png";
mainImg.width="530";
mainImg.height="200";
mainImg.alt="ISW";

mainHeader.appendChild(yodaImg);
mainHeader.appendChild(mainImg);


// LEFT MENU

const menu = document.querySelector('#menu');

const menuItems = [
    { url: 'main.html', linkText: 'Main' },
    { url: 'member.html', linkText: 'Members' },
    { url: 'join.html', linkText: 'Join' },
    { url: 'edit.html', linkText: 'Editorial' },
    { url: 'rteguide.html', linkText: 'RTE Guide' },
    { url: 'trivia.html', linkText: 'Trivia' },
    { url: 'poll.html', linkText: 'Poll' },
    { url: 'pollresults.html', linkText: 'Poll Results' },
    { url: 'links.html', linkText: 'Links' },
    { url: 'linktous.html', linkText: 'Link to Us' },
    { url: 'archive.html', linkText: 'Archives' },
    { url: 'contact.html', linkText: 'Contact Me' },
];

let menuUl = document.createElement('ul');

menuItems.forEach(element => {
    let a = document.createElement('a');
    a.href = element.url;
    a.textContent = element.linkText;
    let li = document.createElement('li');
    li.appendChild(a);
    menuUl.appendChild(li);
});

const menuHeading = document.createElement('h1');
menuHeading.textContent = "Menu";

menu.appendChild(menuHeading);
menu.appendChild(menuUl);
