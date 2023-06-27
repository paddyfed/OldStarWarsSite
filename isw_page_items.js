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
    { url: 'rteguide.html', linkText: `RT${String.fromCharCode(201)} Guide` }, // Char code 201 is for É
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

        // p.textContent = `${article.title} -- ${article.author}, ${article.date} -- Replies: ${article.replies}`

        titleSpan.appendChild(editorialLink);

        authorSpan.textContent = article.author;
        // authorSpan.className = 'authorSpan';

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