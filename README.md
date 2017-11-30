# Seattle Shorelines App
A responsive web map of the City of Seattle's shoreline street end locations. All data and photos are from SDOT.

Lives at [SeattleShorelines.org](https://www.seattleshorelines.org).

## Background
The City of Seattle designated 149 public streets in Seattle that end on waterfronts as special rights of way to be preserved and improved for public use.

Though some street ends have been improved for public use, nearly two-thirds are in need of improvement, overgrown, or have private encroachments.

Seattle's Department of Transportation (SDOT) has an older web map. I created this one to provide a more mobile friendly version that also has better focus on the site photos.

## Data Sources

The points are from a shapefile SDOT sent me via email. I converted it to geojson without changing or adding any data or field names. 

Geojson data file is in ```/src/data/```

The original images were scraped from [SDOT's ArcGIS based web map](http://seattlecitygis.maps.arcgis.com/home/webmap/viewer.html?webmap=57fc67a4e679415ba3772df17ab6d48c&extent=-122.5985,47.4953,-122.0915,47.7177). They were of widely different resolutions and aspect ratios, so thumbnail images have been standardized by size and compressed. The ShorelineDetails component displays the originals.

Images are in ```/src/assets```

