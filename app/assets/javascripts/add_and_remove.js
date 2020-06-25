$(document).on('turbolinks:load', function() {
    var prependLi = "<li>Sobre la lista</li>",
        appendLi = "<li>Bajo la lista</li>"

    $('#list').append(appendLi)
    $('#list').prepend(prependLi)

    $('#emptyList').click(function() {
        $('#list').empty()
    })

    $('#removeList').click(function() {
        $('#list').remove()
    })

})