// header

const mainHeader = document.querySelector('header');

const yodaImg = document.createElement('img');
yodaImg.src = "yoda.png";
yodaImg.width = "229";
yodaImg.height = "200";
yodaImg.alt = "Yoda";

const mainImg = document.createElement('img');
mainImg.src = "image2.png";
mainImg.width = "530";
mainImg.height = "200";
mainImg.alt = "ISW";

mainHeader.appendChild(yodaImg);
mainHeader.appendChild(mainImg);


// LEFT MENU

const menu = document.querySelector('#menu');

const menuItems = [
    { url: 'main.html', linkText: 'Main' },
    { url: 'member.html', linkText: 'Members' },
    { url: 'join.html', linkText: 'Join' },
    { url: 'editorials.html', linkText: 'Editorial' },
    { url: 'rteguide.html', linkText: `RTÉ Guide` },
    { url: 'trivia.html', linkText: 'Trivia' },
    { url: 'trivia_res.html', linkText: 'Trivia Results'},
    { url: 'member_awards.html', linkText: 'Trivia Table'},
    { url: 'poll.html', linkText: 'Poll' },
    { url: 'pollresults.html', linkText: 'Poll Results' },
    { url: 'links.html', linkText: 'Links' },
    { url: 'linktous.html', linkText: 'Link to Us' },
    { url: 'archive_news.html', linkText: 'News Archives' },
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

// previous editorials

if (document.querySelector('section.previous-editorials'))
{
    const editorials = [
        { url: 'editorial_01.html', title: 'Patience is a Virtue', author: 'PaddyFedoo', date: '2001-01-03', replies: 1 },
        { url: 'editorial_02.html', title: 'Meeting the Stars', author: 'Jade', date: '2001-01-08', replies: 0 },
        { url: 'editorial_03.html', title: 'Fresh Lick of Paint...', author: 'PaddyFedoo', date: '2001-03-13', replies: 0 },
        { url: 'editorial_04.html', title: 'The Price of Hosting', author: 'PaddyFedoo', date: '2001-07-12', replies: 0 },
        { url: 'editorial_05.html', title: 'The Journey Home', author: 'PaddyFedoo', date: '2002-06-14', replies: 0 },
    ];

    const editorialsSection = document.querySelector('section.previous-editorials');

    editorials.forEach(article => {
        let p = document.createElement('p');
        let titleSpan = document.createElement('b');
        let editorialLink = document.createElement('a');
        let authorSpan = document.createElement('span');
        let articleDate = document.createElement('time');
        let repliesSpan = document.createElement('span');

        editorialLink.href = article.url;
        editorialLink.textContent = article.title;

        titleSpan.appendChild(editorialLink);

        authorSpan.textContent = article.author;

        articleDate.dateTime = article.date;
        articleDate.textContent = new Date(article.date).toLocaleDateString(undefined, { dateStyle: "long" });

        repliesSpan.textContent = `Replies: ${article.replies}`;

        p.appendChild(titleSpan);
        p.append(authorSpan);
        p.append(articleDate);
        p.append(repliesSpan);

        editorialsSection.appendChild(p);
    });
}

// add Dialog to each page
const mainSection = document.querySelector('main');
const d = document.createElement('dialog');
const i = document.createElement('img');
const f = document.createElement('form');
const b = document.createElement('button');
const icon = document.createElement('i');

icon.className='fa fa-times';

b.append(icon);
f.append(b);

d.id = 'dialogForImage';
b.value = 'cancel';
b.formMethod = 'dialog';
i.id = 'dialogImg';
i.alt = '';
d.append(i);
d.append(f);

mainSection.append(d)

// Showing image in Dialog

function showImage(imgSrc, altText) {
    const dialog = document.getElementById("dialogForImage");
    const dialogImage = document.getElementById("dialogImg");
    dialogImage.src = imgSrc;
    dialogImage.alt = altText;
    dialog.showModal();
}