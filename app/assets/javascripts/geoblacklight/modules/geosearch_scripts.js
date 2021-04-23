$( document ).ready(function() {
    $('.redo').text(I18n.t('map.redo_search'));
    // append after checkbox
    $('.move_map').append(" "+I18n.t('map.move_map_search'));
    //$('.search_here').text(I18n.t('map.search_here'));
    $('.search_here > .btn').text(I18n.t('map.search_here'));
});
