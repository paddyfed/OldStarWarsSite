if (document.querySelector('main')) {
    //store the quotations in arrays

    const quotes = []

    quotes.push("May the force be with you.");
    quotes.push("No! No different! Only different in your mind.");
    quotes.push("Hard to see, the dark side is.");
    quotes.push("When nine hundred years old you reach, look as good you will not. Hmm?");
    quotes.push("Mudhole? Slimy? My home this is.");
    quotes.push("No! Try not. Do. Or do not. There is no try.");
    quotes.push("Our own council we will keep on who is ready.");
    quotes.push("Your weapons...you will not need them.");
    quotes.push("Life creates it, makes it grow. It's energy surrounds us and binds us.");
    quotes.push("I sense much fear in you.");
    quotes.push("A Jedi's strength flows from the force.");
    quotes.push("Away with your weapon! I mean you no harm.");
    quotes.push("Oohhh. Jedi Master. Yoda. You seek Yoda.");
    quotes.push("Confer on you, the level of Jedi Knight the Council does.");
    quotes.push("Hmm. That face you make. Look I so old to young eyes?");
    quotes.push("Help you I can, yes.");
    quotes.push("A Jedi uses the Force for knowledge and defense, never for attack.");
    quotes.push("You must feel the Force around you.");
    quotes.push("A Jedi must have the deepest commitment, the most serious mind.");
    quotes.push("You must unlearn what you have learned.");
    quotes.push("Always two there are....no more...no less. A master and an apprentice.");
    quotes.push("Always with you it cannot be done.");
    quotes.push("Fear leads to anger, anger leads to hate, hate leads to suffering.");
    quotes.push("Only a fully trained Jedi Knight with the Force as his ally will conquer.");
    quotes.push("Not far. Yoda not far. Patience. Soon you will be with him.");
    quotes.push("Patience! For the Jedi it is time to eat as well.");
    quotes.push("Through the Force, things you will see. Other places.");
    quotes.push("I am wondering, why are you here.");
    quotes.push("Looking? Found someone you have I would say.");
    quotes.push("Ready, are you? What know you of ready?");
    quotes.push("Anger...fear...aggression. The dark side of the Force are they.");
    quotes.push("Fear is the path to the dark side.");
    quotes.push("For my ally is the Force. And a powerful ally it is.");
    quotes.push("Hey, dude!");

    //calculate a random index

    const index = Math.floor(Math.random() * quotes.length);

    //display the quotation

    const mainSection = document.querySelector('main');

    const pQuote = document.createElement('p');
    pQuote.textContent = `"${quotes[index]}"`;

    mainSection.prepend(pQuote);

    // document.write("" + "\"" + quotes[index] + "\"\n");

    //done
}