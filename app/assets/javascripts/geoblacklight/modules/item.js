Blacklight.onLoad(function() {
  $('[data-map="item"]').each(function(i, element) {

    // get viewer module from protocol value and capitalize to match class name
    var viewerName = $(element).data().protocol,
      viewer;

    // get new viewer instance and pass in element
    viewer = new window['GeoBlacklight']['Viewer'][viewerName](element);
  });

  $('.truncate-abstract').each(function(i, element) {
      
    var lines = 12 * parseFloat(getComputedStyle(element).fontSize);
    if (element.getBoundingClientRect().height < lines) return;
    var id = element.id || 'truncate-' + i;

    element.id = id;
    $(element).addClass('collapse');

    var control = $('<button class="btn btn-link p-0 border-0 read_more" data-toggle="collapse" aria-expanded="false" data-target="#' + id + '" aria-controls="' + id + '">'+I18n.t('item.read_more')+'</button>');

    $(element).on('shown.bs.collapse', function() {
      control.text(I18n.t('item.close'));
    });
    $(element).on('hidden.bs.collapse', function() {
      control.text(I18n.t('item.read_more'));
    });

    control.collapse();
    control.insertAfter(element);
  });
});
