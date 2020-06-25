$(document).on('turbolinks:load', function() {
    $('#changeHref').click(function() {
        console.log($('a').attr('href'))
        $('a').attr('href', 'https://www.facebook.com')
    })
})