// quotes

//store the quotations in arrays
quotes = new Array(34);
quotes[0] = "May the force be with you.";
quotes[1] = "No! No different! Only different in your mind.";
quotes[2] = "Hard to see, the dark side is.";
quotes[3] = "When nine hundred years old you reach, look as good you will not. Hmm?";
quotes[4] = "Mudhole? Slimy? My home this is.";
quotes[5] = "No! Try not. Do. Or do not. There is no try.";
quotes[6] = "Our own council we will keep on who is ready.";
quotes[7] = "Your weapons...you will not need them.";
quotes[8] = "Life creates it, makes it grow. It's energy surrounds us and binds us.";
quotes[9] = "I sense much fear in you.";
quotes[10]= "A Jedi's strength flows from the force.";
quotes[11]="Away with your weapon! I mean you no harm.";
quotes[12]="Oohhh. Jedi Master. Yoda. You seek Yoda.";
quotes[13]="Confer on you, the level of Jedi Knight the Council does.";
quotes[14]="Hmm. That face you make. Look I so old to young eyes?";
quotes[15]="Help you I can, yes.";
quotes[16]="A Jedi uses the Force for knowledge and defense, never for attack.";
quotes[17]="You must feel the Force around you.";
quotes[18]="A Jedi must have the deepest commitment, the most serious mind.";
quotes[19]="You must unlearn what you have learned.";
quotes[20]="Always two there are....no more...no less. A master and an apprentice.";
quotes[21]="Always with you it cannot be done.";
quotes[22]="Fear leads to anger, anger leads to hate, hate leads to suffering.";
quotes[23]="Only a fully trained Jedi Knight with the Force as his ally will conquer.";
quotes[24]="Not far. Yoda not far. Patience. Soon you will be with him.";
quotes[25]="Patience! For the Jedi it is time to eat as well.";
quotes[26]="Through the Force, things you will see. Other places.";
quotes[27]="I am wondering, why are you here.";
quotes[28]="Looking? Found someone you have I would say.";
quotes[29]="Ready, are you? What know you of ready?";
quotes[30]="Anger...fear...aggression. The dark side of the Force are they.";
quotes[31]="Fear is the path to the dark side.";
quotes[32]="For my ally is the Force. And a powerful ally it is.";
quotes[33]="Hey, dude!";
//calculate a random index
index = Math.floor(Math.random() * quotes.length);
//display the quotation
document.write("" + "\"" + quotes[index] + "\"\n");
//done
