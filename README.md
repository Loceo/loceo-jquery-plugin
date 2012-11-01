#Loceo jQuery Plugin
The geodetic and geocoding-plugin for jQuery

The underlying REST API is located at https://loceo.se/documentation/postalcode.

###API-Key
This API and plugin is free of charge for requests in the order of thousands per month. You can get current pricing and your own developer key at https://loceo.se.


##Postalcode to city
Enables you to resolve a postalcode to city. Returns a Geojson-feature with coordinates.

End-point: https://api.loceo.se/v1/geocoding/city

```javascript
$('#postalcode_input').loceo('city', {key:null}, function(feature){
	if(feature!=null && feature.propertie!=null && feature.properties.city!=null){
		$('#city_output').val(feature.properties.city);
	}
});
```


##City to postalcode
Enables you to resolve a city to postalcodes. Notice you can get several hundred of postalcodes which can be to boxes. Returns a Geojson-featureCollection with coordinates.

End-point: https://api.loceo.se/v1/geocoding/postalcode

```javascript
$('#city_input').loceo('postalcode', {key:null}, function(collection){
	if(collection!=null && collection.features!=null && collection.features.length>0){
		$('#postalcode_output').val(collection.features[0].properties.postalcode);
	}
});
```