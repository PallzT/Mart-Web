$(document).ready(function() {
    $('#searchIcon').on('click', function() {
        $('#searchInput').fadeToggle('fast');
        $('#searchInput').focus();
    });

    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.isi').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        if ($matchingElement.lengeth === 0) {
            $('#searchNotFound').show();
        } else {
            $('#searchNotFound').hide()
        }
    });

    $('#searchInput').on('focusout', function() {
        $(this).fadeOut('fast');
    });

    $(document).on('keydown', function(event) {
        if (event.key === 'Escape') {
            $('#searchInput').fadeOut('fast');
        }
    });
});
