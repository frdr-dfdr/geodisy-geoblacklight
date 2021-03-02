// basemaps

GeoBlacklight.Basemaps = {
  darkMatter: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  positron: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  positronLite: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  worldAntique: L.tileLayer(
    'https://cartocdn_{s}.global.ssl.fastly.net/base-antique/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  worldEco: L.tileLayer(
    'https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  flatBlue: L.tileLayer(
    'https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  midnightCommander: L.tileLayer(
    'https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}{retina}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://carto.com/attributions">Carto</a>',
      maxZoom: 18,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  openstreetmapHot: L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
      maxZoom: 19,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  openstreetmapStandard: L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      worldCopyJump: true,
      retina: '@2x',
      detectRetina: false
    }
  ),
  Esri_WorldStreetMap: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
  	    maxZoom: 16,
        worldCopyJump: true,
        retina: '@2x',
        detectRetina: false
      }
    ),
    Esri_WorldTopoMap: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri et al. (1)',
            worldCopyJump: true,
            maxZoom: 16,
            retina: '@2x',
            detectRetina: false,
          }
        ),
    OpenStreetMap_France: L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        	maxZoom: 20,
        	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
};