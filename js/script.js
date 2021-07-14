if (window.SimpleSlide){ /*Se existir*/
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: 'portfolio', 
        time: 5000, 
        nav:true
    });
}

if(window.SimpleAnime){
    new SimpleAnime();
}