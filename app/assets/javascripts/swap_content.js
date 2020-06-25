$(document).on('turbolinks:load', function() {
    $('#swap').click(function() {
        var origin = $('#origin'),
            destiny = $('#destiny'),
            originText = origin.text(),
            destinyText = destiny.text()

        origin.text(destinyText)
        destiny.text(originText)
    })
})