$(document).on('turbolinks:load', function() {
    //Esconde el párrafo
    $('#hide').click(function() {
        $('#target_par').hide('fast');
    })

    //Muéstra el párrafo
    $('#show').click(function() {
        $('#target_par').show('slow', function() {
            $('body').append('<p>show finished</p>')
        })
    })

    //Forma de esconder y mostrar el párrafo en slide
    $('#slide').click(function() {
        $('#target_par').slideToggle('slow', function() {
            $('body').append('<p>SlideToggle finished</p>')
        })
    })

    //Desaparece el texto en forma como invisible
    $('#fadeOut').click(function() {
        $('#target_par').fadeOut('slow')
    })

    //Muestra el texto en forma como invisible
    $('#fadeIn').click(function() {
        $('#target_par').fadeIn('slow', function() {
            $('body').append('<p>SlideToggle finished</p>')
        })
    })

    //Parecido al fade, funciona para mostrar y esconder desapareciendo lentamente el texto
    $('#fadeToggle').click(function() {
        $('#target_par').fadeToggle('slow', function() {
            $('body').append('<p>SlideToggle finished</p>')
        })
    })
})