/*
  @licstart  The following is the entire license notice for the 
  JavaScript code in this page. 
  
  Copyright (C) 2022  David Arroyo Menéndez davidam@gmail.com
  
  The JavaScript code in this page is free software: you can 
  redistribute it and/or modify it under the terms of the GNU 
  General Public License (GNU GPL) as published by the Free Software 
  Foundation, either version 3 of the License, or (at your option) 
  any later version.  The code is distributed WITHOUT ANY WARRANTY; 
  without even the implied warranty of MERCHANTABILITY or FITNESS 
  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details. 
  
  As additional permission under GNU GPL version 3 section 7, you 
  may distribute non-source (e.g., minimized or compacted) forms of 
  that code without the copy of the GNU GPL normally required by 
  section 4, provided you include this license notice and a URL 
  through which recipients can access the Corresponding Source. 
  
  @licend  The above is the entire license notice 
  for the JavaScript code in this page.  
*/

function allLanguagesHide() {
    $('.programming-languages-content').show();
    $('.gcc').hide();
    $('.btn-gcc').css('background-color', 'rgb(23, 162, 184)');
    $('.python').hide();
    $('.btn-python').css('background-color', 'rgb(23, 162, 184)');
    $('.ruby').hide();
    $('.btn-ruby').css('background-color', 'rgb(23, 162, 184)');
    $('.r').hide();
    $('.btn-r').css('background-color', 'rgb(23, 162, 184)');
    $('.bash').hide();
    $('.btn-bash').css('background-color', 'rgb(23, 162, 184)');
    $('.perl').hide();
    $('.btn-perl').css('background-color', 'rgb(23, 162, 184)');
    $('.emacs').hide();
    $('.btn-emacs').css('background-color', 'rgb(23, 162, 184)');
    $('.tcl').hide();
    $('.btn-tcl').css('background-color', 'rgb(23, 162, 184)');
    $('.js').hide();
    $('.btn-js').css('background-color', 'rgb(23, 162, 184)');    
}

function allBtn(toggle) {
    if (toggle == 'show') {
	$('.btn-debian').show();
	$('.btn-gnu').show();
	$('.btn-kernel').show(); 
	$('.btn-gcc').show();
	$('.btn-python').show();
	$('.btn-bash').show(); 
	$('.btn-r').show();
	$('.btn-ruby').show();
	$('.btn-perl').show();
	$('.btn-tcl').show();
	$('.btn-js').show();
	$('.btn-emacs').show();
	$('.btn-gutenberg').show();
	$('.btn-amazon').show();
	$('.btn-imdb').show();	
	$('.btn-scientists-wikipedia').show();
    }

    if (toggle == 'hide') {
	$('.btn-debian').hide();
	$('.btn-debian').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-gnu').hide();
	$('.btn-gnu').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-kernel').hide();
	$('.btn-kernel').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-gcc').hide();
	$('.btn-gcc').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-python').hide();
	$('.btn-python').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-bash').hide();
	$('.btn-bash').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-r').hide();
	$('.btn-r').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-ruby').hide();
	$('.btn-ruby').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-perl').hide();
	$('.btn-perl').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-tcl').hide();
	$('.btn-tcl').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-js').hide();
	$('.btn-js').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-emacs').hide();
	$('.btn-emacs').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-gutenberg').hide();
	$('.btn-gutenberg').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-amazon').hide();
	$('.btn-amazon').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-imdb').hide();
	$('.btn-imdb').css('background-color', 'rgb(23, 162, 184)');
	$('.btn-scientists-wikipedia').hide();
	$('.btn-scientists-wikipedia').css('background-color', 'rgb(23, 162, 184)');	
    }
}
    
function allKnowledgeHide() {
    $('.knowledge-content').hide();
    $('.gutenberg').hide();
    $('.amazon').hide();
    $('.imdb').hide();
    $('.btn-gutenberg').css('background-color', 'rgb(23, 162, 184)');
    $('.btn-amazon').css('background-color', 'rgb(23, 162, 184)');
    $('.btn-imdb').css('background-color', 'rgb(23, 162, 184)');    
}

function allDebianGNULinuxHide() {
    $('.free-software').hide();
    $('.free-software-content').hide();    
    $('.gnu').hide();
    $('.kernel').hide();
    $('.debian').hide();
}

function buttonsProgrammingShow() {
    $('.btn-gcc').show();
    $('.btn-python').show();
    $('.btn-bash').show();
    $('.btn-r').show();
    $('.btn-ruby').show();
    $('.btn-tcl').show();
    $('.btn-perl').show();
    $('.btn-perl').show();
    $('.btn-emacs').show();
}

var logos = [
    "img/logos/Eva_marie_saint_marlon_brando.jpg",
    "img/logos/Kissing_the_War_Goodbye.jpg",
    "img/logos/der-kuss.jpg",
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
    "img/logos/korocastellano.jpg",
    "img/logos/Catherine_DIgnazio.jpg",
    "img/logos/Madres_Plaza_Mayo.jpg",
    "img/logos/Familiares_de_Detenidos_Desaparecidos_de_Chile.jpg",
    "img/logos/Eva_marie_saint_marlon_brando.jpg",
    "img/logos/Kissing_the_War_Goodbye.jpg",
    "img/logos/der-kuss.jpg",
    "img/logos/memorialcenter11s.jpg",
    "img/logos/Lauren_Klein.jpg"
];

var size = logos.length;
var x = Math.floor(size*Math.random());
document.getElementById('logo').src=logos[x];


$('.btn-free-software').click(function() {
    $('.free-software').show();
    $('.free-software-content').show();
    $('.btn-free-software').css('background-color', 'purple');
    $('.programming').hide();
    $('.programming-languages-content').hide();
    $('.btn-programming').css('background-color', 'rgb(23, 162, 184)');    
    $('.knowledge').hide();
    $('.knowledge-content').hide();
    $('.btn-knowledge').css('background-color', 'rgb(23, 162, 184)');
    $('.most-used-names').hide();
    allBtn('hide');
    $('.debian').show();    
    $('.btn-debian').show();
    $('.btn-debian').css('background-color', 'purple');
    $('.btn-gnu').show();
    $('.btn-kernel').show(); 

});

$('.btn-programming').click(function() {
    allBtn('hide');    
    $('.knowledge').hide();
    $('.knowledge-content').hide();
    $('.btn-knowledge').css('background-color', 'rgb(23, 162, 184)');    
    $('.free-software').hide();
    $('.free-software-content').hide();
    $('.btn-free-software').css('background-color', 'rgb(23, 162, 184)');
    $('.programming').show();
    $('.programming-languages-content').show();
    $('.btn-programming').css('background-color', 'purple'); 
    $('.gcc').show();
    $('.btn-gcc').css('background-color', 'purple');     
    $('.most-used-names').hide();
    $('.gnu').hide();
    $('.kernel').hide();
    $('.debian').hide();
    buttonsProgrammingShow();
});

$('.btn-knowledge').click(function() {
    $('.knowledge').show();
    $('.knowledge-content').show();
    $('.btn-knowledge').css('background-color', 'purple');
    $('.free-software').hide();
    $('.free-software-content').hide();
    $('.btn-free-software').css('background-color', 'rgb(23, 162, 184)');
    $('.programming-languages').hide();    
    $('.programming-languages-content').hide();
    $('.btn-programming').css('background-color', 'rgb(23, 162, 184)');
    allBtn('hide');
    $('.btn-gutenberg').show();
    $('.btn-amazon').show();
    $('.btn-imdb').show();    
    $('.gutenberg').show();
    $('.amazon').hide();
    $('.imdb').hide();    
});


$('.btn-gcc').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();
    $('.gcc').show();
    $('.btn-gcc').css('background-color', 'purple');
});

$('.btn-r').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.r').show();
    $('.btn-r').css('background-color', 'purple');
});

$('.btn-bash').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.bash').show();
    $('.btn-bash').css('background-color', 'purple');
});


$('.btn-python').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.python').show();
    $('.btn-python').css('background-color', 'purple');
});

$('.btn-ruby').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.ruby').show();
    $('.btn-ruby').css('background-color', 'purple');
});

$('.btn-bash').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.bash').show();
    $('.btn-bash').css('background-color', 'purple');
});

$('.btn-perl').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();
    $('.perl').show();
    $('.btn-perl').css('background-color', 'purple');
});

$('.btn-emacs').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.emacs').show();
    $('.btn-emacs').css('background-color', 'purple');
});

$('.btn-tcl').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.tcl').show();
    $('.btn-tcl').css('background-color', 'purple');
});

$('.btn-js').click(function() {
    allLanguagesHide();
    $('.programming-languages').show();    
    $('.js').show();
    $('.btn-js').css('background-color', 'purple');
});

$('.btn-debian').click(function() {
    allBtn('hide');
    $('.debian').show();
    $('.btn-debian').css('background-color', 'purple');    
    $('.gnu').hide();
    $('.kernel').hide();
    $('.btn-kernel').show();
    $('.btn-debian').show();
    $('.btn-gnu').show();
});

$('.btn-gnu').click(function() {
    allBtn('hide');
    $('.debian').hide();
    $('.gnu').show();
    $('.btn-gnu').css('background-color', 'purple');
    $('.kernel').hide();
    $('.btn-kernel').show();
    $('.btn-debian').show();
    $('.btn-gnu').show();
});

$('.btn-kernel').click(function() {
    allBtn('hide');    
    $('.debian').hide();
    $('.gnu').hide();
    $('.kernel').show();
    $('.btn-kernel').css('background-color', 'purple');
    $('.btn-debian').show();
    $('.btn-gnu').show();
    $('.btn-kernel').show();
    $('.kernel').show();    
});

$('.btn-most-used-names').click(function() {
    $('.most-used-names').show();
    $('.free-software').hide();
    $('.free-software-content').hide();
    $('.knowledge').hide();
    $('.knowledge-content').hide();
});

$('.btn-gutenberg').click(function() {
    allKnowledgeHide();
    $('.knowledge-content').show();
    $('.gutenberg').show();
    $('.btn-gutenberg').css('background-color', 'purple');
});

$('.btn-amazon').click(function() {
    allKnowledgeHide();
    $('.knowledge-content').show();    
    $('.amazon').show();
    $('.btn-amazon').css('background-color', 'purple');
});

$('.btn-imdb').click(function() {
    allKnowledgeHide();
    $('.knowledge-content').show();
    $('.imdb').show();
    $('.btn-imdb').css('background-color', 'purple');    
});
