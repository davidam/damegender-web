
var logos = [
    "img/logos/davidam.png",
    "img/logos/1024px-Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
    "img/logos/The_Kiss_Klimt_Google_Cultural_Institute.jpg",
    "img/logos/800px-Bartolomé_Esteban_Perez_Murillo_014.jpg",
    "img/logos/800px-Igualtat_de_sexes.svg.png",
    "img/logos/Ada_Lovelace.jpg",    
    "img/logos/Grace_Murray_Hopper.jpg",
    "img/logos/adaneva.jpg",
    "img/logos/stolen_kiss.jpg",
    "img/logos/xfiles.png",
    "img/logos/Edith_Clarke.jpg",
    "img/logos/Hedy_Lamarr.jpg",
    "img/logos/Karen_Sparck.jpg",
    "img/logos/Margaret_Hamilton_1995.jpg",
    "img/logos/RozsaPeter.jpg",
    "img/logos/Shirley_Ann_Jackson.jpg",
    "img/logos/Angela_Ruiz_Robles.jpg",
    "img/logos/juanmartin.jpg",    
    "img/logos/gender.png",    
    "img/logos/debianwomen-bcn-2014.jpg",
    "img/logos/jakob_and_elizabeth.jpg",
    "img/logos/heteropython.png",    
    "img/logos/Marie_Curie.jpg",
    "img/logos/Irene_Montero_2020.jpg",
];

var size = logos.length;
var x = Math.floor(size*Math.random());
document.getElementById('logo').src=logos[x];

var sentences = [
    "In the Free Software all people are males, Teresa",
    "Down with the patriarchy that is going to fall, that is going to fall, above the feminism that is going to win, that is going to win.",
    "The Forbes people must be gays, Teresa, they are men generally.",
    "Fundamento is name of female in Spain, Teresa",
    "Isa has a problem similar to Andrea, you don't know if it's male or female, easily, Teresa",
    "Teresa says that the usa people must not divided the names by races, it must be done by nations.",
    "Dame is about David Arroyo Menéndez and he is a male, Teresa, you know.",
    "Teresa, do you think that Inés means in Spain? In-ES? Make sense?",
    "INE thinks in INE terms and it runs perfect Teresa, perfect, you know.",
    "Mary is the name most used in United States of America, Teresa.",
    "Teresa, Margaret is in the top, too.",
    "I like the female with last letter 'a' are feminines, Teresa.",
    "In United States of America, there 1898 people using Abril and 1329 using April. So curious, Teresa.",
    "Teresa says the computer people has not ethical values.",
    "David feels than Python won to the rest of scripting languages, such as Gregorio and Jesus",
    "Who is worst? Who is exploiting my labor force or who is violating my body? A violator could be your killer because he is afraid by the law, with the labor exploitation you are useful for this person because you are his slave. Conclusion don't allow labor explotation by violators.",
]

var size = sentences.length
var x = Math.floor(size*Math.random())

document.getElementById('sentence').innerHTML=sentences[x];
