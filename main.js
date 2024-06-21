let names = ["George", "Jimmy", "Bob"];
let imgs = 3;
let ctr = 1;

let btns = document.getElementById('theButtons');

function createImg()
{
    let a = "url(Cats/"
    a += String(ctr);
    a += ".png)";

    return a;
}

function createCard()
{
    let newContainer = document.createElement('div');
    newContainer.classList.add('cardContainer');
    let text1 = document.createTextNode('');
    newContainer.appendChild(text1);

    let newBorder = document.createElement('div');
    newBorder.classList.add('cardBorder');
    let text4 = document.createTextNode('');
    newBorder.appendChild(text4);

    let text5 = document.createTextNode('');    

    let newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.style.backgroundImage = createImg();

    newBorder.appendChild(newCard);
    newBorder.appendChild(text5);
    newContainer.appendChild(newBorder);

    let text2 = document.createTextNode('');
    newContainer.appendChild(text2);

    let newName = document.createElement('div');
    newName.classList.add('name');
    newName.textContent = names[ctr-1];
    newContainer.appendChild(newName);

    let text3 = document.createTextNode('');
    newContainer.appendChild(text3);

    return newContainer;
}

function getCardName(card)
{
    return card.lastChild.previousSibling;
}

function getCardBorder(card1)
{
    return card1.firstChild.nextSibling;
}

function getCardImage(card2)
{
    return getCardBorder(card2).firstChild.nextSibling;
}

function press(num)
{
    let allPhotos = document.getElementsByClassName('allCards');
    let photo = document.getElementsByClassName('cardContainer');

    
        photo[ctr-1].classList.add('prev');
        if(num==0)
            {
                photo[ctr-1].style.animation = "leftSwipe 3s both";
                photo[ctr-1].classList.add('left');

            }
        else
            {
                photo[ctr-1].style.animation = "rightSwipe 3s both";
            }

    if(ctr<imgs)
    {
        ctr++;
        allPhotos[0].appendChild(createCard());
        
    }
    else
    {
        btns.removeChild(btns.firstChild.nextSibling);
        btns.removeChild(btns.lastChild.previousSibling);

        let liked = document.getElementsByClassName('left');
        
        let msg = document.getElementsByClassName('welcomeMsg');
        
        if(liked.length==0)
            {
                msg[0].textContent = 'No Matches';
            }
        else
            {
                msg[0].textContent = 'Your Matches Are';
            }

        for(i of liked)
            {
                i.style.animation="none";
                i.classList.remove('prev');

            }
    
    }

}