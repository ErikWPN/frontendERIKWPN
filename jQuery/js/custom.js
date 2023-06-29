// instacia jquary e evita conflito
// jQuery( function ($){
$(document).ready(function(){

    $('.olw-carousel').owlCaroseul();

    let titulso = $('h4') // tag
    
    let items = $('.faeture-item') // class
    
    let destaques = $('#featured') //id

    console.log(titulso.first());
});
    // Configuração de produtos!

    //$('.featured-item a').addClass('btn btn-dark stretch-link');

    //$('.featured-item:firt h4').append('.<span class="badge bg-secondary">Novo</span>')



    $('featued-item:first h4').dblclick( function(){

        $(this).css({
            'color' : '#f00',
            'background' : '#ff0',
            'font-weight' : '100',
        });
  
});
/*
 * Manipulação de eventos
 */
$('featured-item a').on('click', function(event){

    event.preventDefault();

    alert('Produto esgotado');

})
// console.log$($('h4').text());