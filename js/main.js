var myQuote = document.getElementById("qoute");
var quoteList =[
    {
        quoteText:"Be yourself; everyone else is already taken.",
        quoteAuther:"Oscar Wilde"
    },
    {
        quoteText:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        quoteAuther:"Marilyn Monroe"
    },
    {
        quoteText:"So many books, so little time.",
        quoteAuther:"Frank Zappa"
    },
    {
        quoteText:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        quoteAuther:"Albert Einstein"
    },
    {
        quoteText:"A room without books is like a body without a soul.",
        quoteAuther:"Marcus Tullius Cicero"
    },
    {
        quoteText:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        quoteAuther:"Bernard M. Baruch"
    },
    {
        quoteText:"You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        quoteAuther:"William W. Purkey"
    },
    {
        quoteText:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        quoteAuther:"Dr. Seuss"
    },
    {
        quoteText:"You only live once, but if you do it right, once is enough.",
        quoteAuther:"Mae West"
    },
    {
        quoteText:"Be the change that you wish to see in the world.",
        quoteAuther:"Mahatma Gandhi"
    },
    {
        quoteText:"In three words I can sum up everything I've learned about life: it goes on.",
        quoteAuther:"Robert Frost"
    },
    {
        quoteText:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        quoteAuther:"J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        quoteText:"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        quoteAuther:"Albert Camus"
    },
    {
        quoteText:"If you tell the truth, you don't have to remember anything.",
        quoteAuther:"Mark Twain"
    },
    {
        quoteText:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        quoteAuther:"Maya Angelou"
    },
    {
        quoteText:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
        quoteAuther:"C.S. Lewis, The Four Loves"
    },
    {
        quoteText:"To live is the rarest thing in the world. Most people exist, that is all.",
        quoteAuther:"Martin Luther King Jr."
    },
    {
        quoteText:"We accept the love we think we deserve.",
        quoteAuther:"Stephen Chbosky"
    },
    {
        quoteText:"Without music, life would be a mistake.",
        quoteAuther:"Friedrich Nietzsche"
    },
    {
        quoteText:"I am so clever that sometimes I don't understand a single word of what I am saying.",
        quoteAuther:"Oscar Wilde"
    },
    {
        quoteText:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        quoteAuther:"Ralph Waldo Emerson"
    },
    {
        quoteText:"Insanity is doing the same thing, over and over again, but expecting different results.",
        quoteAuther:"Marilyn Monroe"
    },
    {
        quoteText:"It is better to be hated for what you are than to be loved for what you are not",
        quoteAuther:"Andre Gide"
    },
    {
        quoteText:"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        quoteAuther:" H. Jackson Brown Jr."
    },
]

function changequote() {
    var randomNum = Math.floor(Math.random()*(quoteList.length - 0 + 1))
    myQuote.innerHTML = `
                        <p class="fs-5">“ ${quoteList[randomNum].quoteText} ”</p>
                        <p class="m-0 text-secondary">~ ${quoteList[randomNum].quoteAuther}</p>
                        `;
}