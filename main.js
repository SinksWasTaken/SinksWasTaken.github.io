let names = [
    "Aaron", "Abigail", "Adam", "Adrian", "Aidan", "Aiden", "Alan", "Albert", "Alejandro", "Alex", 
    "Alexander", "Alexandra", "Alice", "Alicia", "Allison", "Alyssa", "Amanda", "Amber", "Amy", "Andrea", 
    "Andrew", "Angela", "Angelica", "Anna", "Anthony", "Antonio", "April", "Ariana", "Arianna", "Ashley", 
    "Austin", "Ava", "Barbara", "Benjamin", "Bethany", "Blake", "Brandon", "Brayden", "Breanna", "Brenda", 
    "Brian", "Brianna", "Brittany", "Brody", "Brooklyn", "Bryan", "Bryce", "Caleb", "Cameron", "Carlos", 
    "Caroline", "Carter", "Cassandra", "Catherine", "Cecilia", "Chad", "Charles", "Charlotte", "Chase", 
    "Chelsea", "Chloe", "Christian", "Christina", "Christopher", "Claire", "Clara", "Clarence", "Clayton", 
    "Cody", "Colby", "Cole", "Colin", "Collin", "Connor", "Cooper", "Courtney", "Crystal", "Curtis", 
    "Dakota", "Dale", "Damian", "Daniel", "Danielle", "David", "Dean", "Deborah", "Delaney", "Derek", 
    "Destiny", "Devin", "Diana", "Dominic", "Donald", "Donna", "Dylan", "Edward", "Edwin", "Elena", 
    "Eli", "Eliana", "Elias", "Elijah", "Elizabeth", "Ella", "Elliot", "Emily", "Emma", "Eric", 
    "Erica", "Erik", "Ethan", "Eva", "Evan", "Evelyn", "Faith", "Fernando", "Fiona", "Francesca", 
    "Francisco", "Frank", "Gabriel", "Gabriella", "Gabrielle", "Gage", "Garrett", "Gavin", "Genesis", "George", 
    "Georgia", "Gianna", "Giselle", "Grace", "Grant", "Gregory", "Hailey", "Haley", "Hannah", "Hayden", 
    "Heather", "Heidi", "Helen", "Henry", "Holly", "Hope", "Hudson", "Hunter", "Ian", "Isaac", 
    "Isabel", "Isabella", "Isabelle", "Isaiah", "Ivan", "Jack", "Jackson", "Jacob", "Jaden", "Jake", 
    "James", "Jasmine", "Jason", "Javier", "Jayden", "Jeffrey", "Jenna", "Jennifer", "Jeremy", "Jessica", 
    "Jesus", "Jillian", "Joanna", "Jocelyn", "Joel", "John", "Johnny", "Jonathan", "Jordan", "Jorge", 
    "Jose", "Joseph", "Joshua", "Josiah", "Joy", "Juan", "Julia", "Julian", "Julie", "Justin", 
    "Kaitlyn", "Katherine", "Kathryn", "Katie", "Kayla", "Kaylee", "Keith", "Kelly", "Kelsey", "Kendall", 
    "Kenneth", "Kevin", "Kiara", "Kimberly", "Kyle", "Kylie", "Landon", "Laura", "Lauren", "Leah", 
    "Leonardo", "Liam", "Lillian", "Lily", "Logan", "Lucas", "Luis", "Luke", "Mackenzie", "Madeline", 
    "Madelyn", "Madison", "Makayla", "Maria", "Mariah", "Marissa", "Mark", "Mason", "Matthew", "Megan", 
    "Melanie", "Melissa", "Michael", "Michelle", "Miguel", "Mikayla", "Miles", "Molly", "Morgan", "Naomi", 
    "Natalie", "Nathan", "Nathaniel", "Nevaeh", "Nicholas", "Nicole", "Noah", "Nolan", "Olivia", "Owen", 
    "Paige", "Parker", "Patrick", "Paul", "Payton", "Penelope", "Peter", "Peyton", "Philip", "Piper", 
    "Quinn", "Rachel", "Raegan", "Raymond", "Rebecca", "Richard", "Riley", "Robert", "Rocco", "Ruby", 
    "Ryan", "Sabrina", "Sadie", "Samantha", "Samuel", "Sara", "Sarah", "Savannah", "Scott", "Sean", 
    "Sebastian", "Serenity", "Seth", "Shane", "Shawn", "Shelby", "Sierra", "Sophia", "Sophie", "Spencer", 
    "Stella", "Stephanie", "Steven", "Summer", "Sydney", "Tanner", "Taylor", "Thomas", "Timothy", "Travis", 
    "Trevor", "Trinity", "Tristan", "Tyler", "Valeria", "Valerie", "Vanessa", "Veronica", "Victoria", "Vincent", 
    "Violet", "Vivian", "William", "Wyatt", "Xavier", "Zachary", "Zoe", "Zoey", "Aaron", "Abigail", 
    "Adam", "Adrian", "Aidan", "Aiden", "Alan", "Albert", "Alejandro", "Alex", "Alexander", "Alexandra", 
    "Alice", "Alicia", "Allison", "Alyssa", "Amanda", "Amber", "Amy", "Andrea", "Andrew", "Angela", 
    "Angelica", "Anna", "Anthony", "Antonio", "April", "Ariana", "Arianna", "Ashley", "Austin", "Ava", 
    "Barbara", "Benjamin", "Bethany", "Blake", "Brandon", "Brayden", "Breanna", "Brenda", "Brian", "Brianna", 
    "Brittany", "Brody", "Brooklyn", "Bryan", "Bryce", "Caleb", "Cameron", "Carlos", "Caroline", "Carter", 
    "Cassandra", "Catherine", "Cecilia", "Chad", "Charles", "Charlotte", "Chase", "Chelsea", "Chloe", "Christian", 
    "Christina", "Christopher", "Claire", "Clara", "Clarence", "Clayton", "Cody", "Colby", "Cole", "Colin", 
    "Collin", "Connor", "Cooper", "Courtney", "Crystal", "Curtis", "Dakota", "Dale", "Damian", "Daniel", 
    "Danielle", "David", "Dean", "Deborah", "Delaney", "Derek", "Destiny", "Devin", "Diana", "Dominic", 
    "Donald", "Donna", "Dylan", "Edward", "Edwin", "Elena", "Eli", "Eliana", "Elias", "Elijah", 
    "Elizabeth", "Ella", "Elliot", "Emily", "Emma", "Eric", "Erica", "Erik", "Ethan", "Eva", 
    "Evan", "Evelyn", "Faith", "Fernando", "Fiona", "Francesca", "Francisco", "Frank", "Gabriel", "Gabriella", 
    "Gabrielle", "Gage", "Garrett", "Gavin", "Genesis", "George", "Georgia", "Gianna", "Giselle", "Grace", 
    "Grant", "Gregory", "Hailey", "Haley", "Hannah", "Hayden", "Heather", "Heidi", "Helen", "Henry", 
    "Holly", "Hope", "Hudson", "Hunter", "Ian", "Isaac", "Isabel", "Isabella", "Isabelle", "Isaiah", 
    "Ivan", "Jack", "Jackson", "Jacob", "Jaden", "Jake", "James", "Jasmine", "Jason", "Javier", 
    "Jayden", "Jeffrey", "Jenna", "Jennifer", "Jeremy", "Jessica", "Jesus", "Jillian", "Joanna", "Jocelyn", 
    "Joel", "John", "Johnny", "Jonathan", "Jordan", "Jorge", "Jose", "Joseph", "Joshua", "Josiah", 
    "Joy", "Juan", "Julia", "Julian", "Julie", "Justin", "Kaitlyn", "Katherine", "Kathryn", "Katie", 
    "Kayla", "Kaylee", "Keith", "Kelly", "Kelsey", "Kendall", "Kenneth", "Kevin", "Kiara", "Kimberly", 
    "Kyle", "Kylie", "Landon", "Laura", "Lauren", "Leah", "Leonardo", "Liam", "Lillian", "Lily", 
    "Logan", "Lucas", "Luis", "Luke", "Mackenzie", "Madeline", "Madelyn", "Madison", "Makayla", "Maria", 
    "Mariah", "Marissa", "Mark", "Mason", "Matthew", "Megan", "Melanie", "Melissa", "Michael", "Michelle", 
    "Miguel", "Mikayla", "Miles", "Molly", "Morgan", "Naomi", "Natalie", "Nathan", "Nathaniel", "Nevaeh", 
    "Nicholas", "Nicole", "Noah", "Nolan", "Olivia", "Owen", "Paige", "Parker", "Patrick", "Paul", 
    "Payton", "Penelope", "Peter", "Peyton", "Philip", "Piper", "Quinn", "Rachel", "Raegan", "Raymond", 
    "Rebecca", "Richard", "Riley", "Robert", "Rocco", "Ruby", "Ryan", "Sabrina", "Sadie", "Samantha", 
    "Samuel", "Sara", "Sarah", "Savannah", "Scott", "Sean", "Sebastian", "Serenity", "Seth", "Shane", 
    "Shawn", "Shelby", "Sierra", "Sophia", "Sophie", "Spencer", "Stella", "Stephanie", "Steven", "Summer", 
    "Sydney", "Tanner", "Taylor", "Thomas", "Timothy", "Travis", "Trevor", "Trinity", "Tristan", "Tyler", 
    "Valeria", "Valerie", "Vanessa", "Veronica", "Victoria", "Vincent", "Violet", "Vivian", "William", "Wyatt", 
    "Xavier", "Zachary", "Zoe", "Zoey"
];



let imgs = names.length;
let ctr = 1;

let btns = document.getElementById('theButtons');

function createImg()
{
    let a = "url(Cats/"
    if(ctr>400)
        {
            a+='t';
            a += String(ctr-400);
        }
    else
        {
            a += String(ctr);
        }
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


    let rand = Math.random() * names.length;

    newName.textContent = names[rand];
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

        for(let i =0; i < Math.min(4,liked.length);i++)
            {
                liked[i].style.animation="none";
                liked[i].classList.remove('prev');
            }
    
    }

}
