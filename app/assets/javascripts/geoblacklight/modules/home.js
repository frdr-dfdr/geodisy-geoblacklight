import {redo} from './geosearch_scripts.js';
import {move_map} from './geosearch_scripts.js';
import {search_here} from './geosearch_scripts.js';

Blacklight.onLoad(function() {
  $('[data-map="home"]').each(function(i, element) {

    var geoblacklight = new GeoBlacklight.Viewer.Map(this);
    var data = $(this).data();

    geoblacklight.map.setZoom(2);
    geoblacklight.map.addControl(L.control.geosearch({
      baseUrl: data.catalogPath,
      dynamic: false,
      zoom: 8,
      center: [40.737, -73.923],
      searcher: function() {
        window.location.href = this.getSearchUrl();
      },
      staticButton: '<a class="search_here btn btn-primary"></a>'
    }));
  });
});