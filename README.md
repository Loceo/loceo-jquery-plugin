#Loceo jQuery Plugin
The geodetic and geocoding-plugin for jQuery

The underlying REST API is located at https://loceo.se/documentation/postalcode.

###API-Key
This API and plugin is free of charge for requests in the order of thousands per month. You can get current pricing and your own developer key at https://loceo.se.


##Postalcode to city
Enables you to resolve a postalcode to city. Returns a Geojson-feature with coordinates.

```javascript
$('#postalcode_input').loceo('city', {key:null}, function(feature){
	if(feature!=null && feature.properties!=null && feature.properties.city!=null){
		$('#city_output').val(feature.properties.city);
	}
});
```

End-point: https://api.loceo.se/v1/geocoding/city

##City to postalcode
Enables you to resolve a city to postalcodes. Notice you can get several hundred of postalcodes which can be to boxes. Returns a Geojson-featureCollection with coordinates.

```javascript
$('#city_input').loceo('postalcode', {key:null}, function(collection){
	if(collection!=null && collection.features!=null && collection.features.length>0){
		$('#postalcode_output').val(collection.features[0].properties.postalcode);
	}
});
```

End-point: https://api.loceo.se/v1/geocoding/postalcode

##How to use
1. Download this plugin and [jQuery](http://jquery.com) (or use [Google CDN](http://jquery.com/download/))

2. Include jQuery and this plugin right before the `</body>`-tag.

 ```html
 <script type="text/javascript" src="jquery.min.js"></script>
 <script type="text/javascript" src="jquery.loceo.js"></script>
 ```

3. Initiate the desired plugin using the examples from above. Put this `<script>`-tag right before the `</body>`-tag (after code in step 2). Change `#postalcode_input` and `#city_output` to your desired html-elements. Optional: Change `null` to your developer-key.

 ```html
 <script type="text/javascript">
	$(document).ready(function(){
		$('#postalcode_input').loceo('city', {key:null}, function(feature){
			if(feature!=null && feature.properties!=null && feature.properties.city!=null){
				$('#city_output').val(feature.properties.city);
			}
		});
	});
 </script>
 ```

4. Satisfaction!

Not working? Study example.html, [Tutorials:How_jQuery_Works](http://docs.jquery.com/Tutorials:How_jQuery_Works "docs.jquery.com/Tutorials:How_jQuery_Works") and [id-selector](http://api.jquery.com/id-selector/ "api.jquery.com/id-selector/"). Still not working? Check Loceos end-point in your browser.