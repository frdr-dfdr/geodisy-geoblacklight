Blacklight.onLoad(function() {
  $('[data-map="home"]').each(function(i, element) {

    var geoblacklight = new GeoBlacklight.Viewer.Map(this);
    var data = $(this).data();
      
    geoblacklight.map.setZoom(2);
    geoblacklight.map.addControl(L.control.geosearch({
      baseUrl: data.catalogPath,
      dynamic: false,
      zoom: 2,
      center: [55.885798, -102.478689],
      searcher: function() {
        window.location.href = this.getSearchUrl();
      },
      staticButton: '<a class="search_here btn btn-primary"></a>'
    }));
  });
});
