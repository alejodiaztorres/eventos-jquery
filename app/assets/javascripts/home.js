$(document).ready(function() {
    //Se registra cuando se hace un click
    $('p').click(function() {
        console.log('Click en el párrafo');
    })

    //Se registra cuando cambia de select
    $('select').change(function() {
        console.log('Cambió el select')
    })

    //Se registra cuando pasa sobre el
    $('.hover').hover(function() {
        console.log('Pasó el mouse')
    })

    //Se registra cuando da click en el input
    $('input').focus(function() {
        console.log('Tengo el foco')
    })

    //Se registra cuando ya no está en el input
    $('#blur').blur(function() {
        console.log('Perdí el foco')
    })

    $('#blur').blur(function() {
        console.log('Perdí el foco')
    })
})