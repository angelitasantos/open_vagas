// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//= require jquery
//= require jquery_ujs
//= require popper.js
//= require bootstrap
//= require_tree .

import 'bootstrap'
import './src/application.scss'

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("trix")
require("@rails/actiontext")

// Função de contador do summary / positions
$(document).ready(function(){
    $('#current').text($('.count-textarea').val().length);
    $('.count-textarea').keyup(function(){
        var characterCount = $(this).val().length;
        $('#current').text(characterCount);
    });

});





// ---------------------------------------------------------------------------------- //
// --------------------------- Barra de Navegação ----------------------------------- //
// ---------------------------------------------------------------------------------- //

$(function(){
    // Função para menu quando mobile
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        if(listaMenu.is(':hidden') == true){
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();
        }
    });

})
