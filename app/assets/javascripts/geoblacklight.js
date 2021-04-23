//= require handlebars.runtime
//= require geoblacklight/geoblacklight
//= require geoblacklight/basemaps
//= require geoblacklight/controls
//= require geoblacklight/viewers

// The sprockets assets pipeline can't merge geoblacklight/modules from our app
// as well as the geoblacklight gem. Solution is to manually add the full logical paths 
// in modules instead of merely adding the modules directory for a recursive search

//The following line will tell sprockets to add the modules directory from our app,
// but we need to manually list all the files within modules that we want sprockets
// to look for in the geoblacklight gem asset location.
//= require geoblacklight/modules

// After importing modules from our app, look for these files...If the file 
// has been overridden in our app it does not need to be specified here
//= require geoblacklight/modules/download
//= require geoblacklight/modules/help_text
//= require geoblacklight/modules/layer_opacity
//= require geoblacklight/modules/metadata
//= require geoblacklight/modules/metadata_download_button
//= require geoblacklight/modules/results
//= require geoblacklight/modules/util

//= require geoblacklight/downloaders
//= require leaflet-iiif
//= require esri-leaflet
//= require readmore
