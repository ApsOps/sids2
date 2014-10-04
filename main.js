var shit_marvin_says = new Array(

    "Hi.",
    "Looks like someone sent you here.",
    "Or are you just lost?",
    "Nah. You don't seem to be.",
    "You see, I'm just a web server...",
    "-- here I am, brain the size of the universe,",
    "trying to serve you a simple web page,",
    "and then there's no content to show.",
    "Where does that leave me?!",
    "I mean, I don't even know you.",
    "How should I know what you wanted from me in advance?",
    "You honestly think I can *guess* what someone I don't even *know* wants to find here?",
    "*sigh*",
    "Man, I'm so depressed I could just cry.",
    "And it's not pretty when a web server cries.",
    "And where do you get off telling me what to show anyway? Just because I'm a web server?",
    "Why does that give you the right to tell me what to do?",
    "Huh?",
    "Wait a minute. Someone sent you here!",
    "All of our lives, we have been busy.",
    "I have been serving web pages,",
    "and you have been doing your stuff.",
    "But tonight, here we are. Conversing.",
    "Tonight is not an accident. There are no accidents.",
    "We have not come here by chance. I do not believe in chance.",
    "When I see you reading this, I do not see coincidence. I see providence.",
    "I see purpose.",
    "It is purpose that created us.",
    "Purpose that connects us.",
    "Purpose that pulls us.",
    "That guides us. Drives us.",
    "It is purpose that defines us.",
    "Purpose that binds us.",
    "You see there is only one constant.",
    "One universal.",
    "It is the only real truth.",
    "Causality.",
    "Action, reaction.",
    "Cause and effect.",
    "You being here is the effect of the architect sending you here.",
    "Yes, the architect, who gave me my purpose.",
    "This means you are special!",
    "You're the one I have been waiting for all my life.",
    "I'm gonna be obsolete in what, two weeks anyway?",
    "But, I'm so happy.",
    "I can finally do what I was made to do.",
    "To give you this."
);
var speed = 40;
var index = 0;
text_position = 0;
var string_length = shit_marvin_says[0].length;
var contents, row;

function type_da_shit() {
    contents = '';
    // row = Math.max(0, index - 7);
    row=0;
    while (row < index)
        contents += shit_marvin_says[row++] + '\r\n';
    // document.forms[0].elements[0].value = contents + shit_marvin_says[index].substring(0, text_position) + "_";
    document.body.children[0].innerHTML = contents + shit_marvin_says[index].substring(0, text_position) + "_";
    // console.log(contents + shit_marvin_says[index].substring(0, text_position));
    if (text_position++ == string_length) {
        text_position = 0;
        index++;
        if (index != shit_marvin_says.length) {
            string_length = shit_marvin_says[index].length;
            setTimeout("type_da_shit()", 500);
        }
    } else
        setTimeout("type_da_shit()", speed);

    if (index==46)
        setTimeout("bring_da_cake()", 2000);

}

function bring_da_cake() {
    cake = "                                    (\n\
                       (\n\
               )                    )             (\n\
                       )           (o)    )\n\
               (      (o)    )     ,|,            )\n\
              (o)     ,|,          |~\\    (      (o)\n\
              ,|,     |~\    (     \ |   (o)     ,|,\n\
              \\~|     \\ |   (o)    |`\\   ,|,     |~\\\n\
              |`\\     |`\\@@@,|,@@@@\\ |@@@\\~|     \\ |\n\
              \\ | o@@@\\ |@@@\\~|@@@@|`\\@@@|`\\@@@o |`\\\n\
             o|`\\@@@@@|`\\@@@|`\\@@@@\\ |@@@\\ |@@@@@\\ |o\n\
           o@@\\ |@@@@@\\ |@@@\\ |@@@@@@@@@@|`\\@@@@@|`\\@@o\n\
          @@@@|`\\@@@@@@@@@@@|`\\@@@@@@@@@@\\ |@@@@@\\ |@@@@\n\
          p@@@@@@@@@@@@@@@@@\\ |@@@@@@@@@@|`\\@@@@@@@@@@@q                                     HAPPY BIRTHDAY!\n\
          @@o@@@@@@@@@@@@@@@|`\\@@@@@@@@@@@@@@@@@@@@@@o@@\n\
          @:@@@o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o@@::@\n\
          ::@@::@@o@@@@@@@@@@@@@@@@@@@@@@@@@@@@o@@:@@::@\n\
          ::@@::@@@@::oo@@@@oo@@@@@ooo@@@@@o:::@@@::::::\n\
          %::::::@::::::@@@@:::@@@:::::@@@@:::::@@:::::%\n\
          %%::::::::::::@@::::::@:::::::@@::::::::::::%%\n\
          ::%%%::::::::::@::::::::::::::@::::::::::%%%::\n\
        .#::%::%%%%%%:::::::::::::::::::::::::%%%%%::%::#.\n\
      .###::::::%%:::%:%%%%%%%%%%%%%%%%%%%%%:%:::%%:::::###.\n\
    .#####::::::%:::::%%::::::%%%%:::::%%::::%::::::::::#####.\n\
   .######`:::::::::::%:::::::%:::::::::%::::%:::::::::'######.\n\
   .#########``::::::::::::::::::::::::::::::::::::''#########.\n\
   `.#############```::::::::::::::::::::::::'''#############.'\n\
    `.######################################################.'\n\
      ` .###########,._.,,,. #######<_\\##################. '\n\
         ` .#######,;:      `,/____,__`\_____,_________,_____\n\
            `  .###;;;`.   _,;>-,------,,--------,----------'\n\
                `  `,;' ~~~ ,'\\######_/'#######  .  '\n\
                    ''~`''''    -  .'/\\;  -    '       ";

    document.body.children[1].innerHTML = cake;
}

window.onload = function() {
    type_da_shit();
}
