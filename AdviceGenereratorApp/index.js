let randomQuotes= [

    "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
    "When we have respect for ourselves and others, we gravitate towards connections that encourage that.",
    "Anger is the ultimate destroyer of your own peace of mind.",
    "In any project, the important factor is your belief. Without belief there can be no successful outcome.",
    "A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful L. R. Ellert, Success In Life Persistence",
    "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.",
    "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
    "The fact is that grief today is a family matter as much as it is an individual one.",
    "Children really brighten up a household. They never turn the lights off.",
    "No one would have crossed the ocean if he could have gotten off the ship in the storm.",
    "Congratulations! today is your day. You're off to Great Places! You're off and away.",
    "No one would have crossed the ocean if he could have gotten off the ship in the storm.",
    "Appreciate those early influences and what they've done for you.",
    "Emotional empathy is what motivates us to help others.",
    "The true wealth of a nation lies not in it's gold or silver but in it's learning, wisdom and in the uprightness of its sons.",
    "Be honest in your feelings, for they are the surest conduit to knowledge",
    "Make the decision, make another. Remake one past, you cannot",
    "I think beauty comes from actually knowing who you are. That's real beauty to me. Elllen DeGeneres Beautiful",
    "Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine.",
    "If you want to see a rainbow you have to learn to see the rain.",
    "I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it.",
    "If I can help people I'll do it by giving them a chance to help themselves; and if I can uplift or inspire, let it be by example, inference and suggestion, rather than by injunction and dictation.",
    "Reading without reflecting is like eating without digesting.",
    "We must dare to think unthinkable thoughts.",
    "Remember to focus on goals that are within your control.",
    "To love your neighbor as yourself, after all, is the great injunction of every religion.",
    "A positive philosophy turns into a positive attitude, which turns into positive actions, which turns into positive results, which turns into a positive lifestyle.",
    "I learned really to practice mustard seed faith, and positive thinking, and remarkable things happened. ",
    "Constantly learn new things, develop your skills and learn new ones, more knowledge equals more motivation. ",
    "I can give you a six-word formula for success: Think things through, then follow through"
    ]
    
    let randomNum =  Math.floor(Math.random()*randomQuotes.length);
    document.getElementById("quotes").innerHTML = `"${randomQuotes[randomNum]}"`;
    document.getElementById("no").innerHTML = `${randomNum + 1}`;
    
    document.addEventListener("click",randomizeQuote)
    function randomizeQuote(){
    let rand =  Math.floor(Math.random()*randomQuotes.length);
    document.getElementById("quotes").innerHTML = `"${randomQuotes[rand]}"`;
    document.getElementById("no").innerHTML = `${rand + 1}`
    }

    