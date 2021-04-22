$( document ).ready(function() {
    $('.redo').text(I18n.t('map.redo_search'));
    $('.move_map').text(I18n.t('map.move_map_search'));
    //$('.search_here').text(I18n.t('map.search_here'));
    $('.search_here').html('<a href="#" class="btn btn-primary">'+I18n.t('map.search_here')+'</a>');

});
