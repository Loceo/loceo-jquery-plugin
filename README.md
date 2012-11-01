#loceo-jquery-plugin
Loceo official plugin for jQuery

###API-Key
This API and plugin if free of charge under requests in the order of thousands per month. You can get current pricing and a developer key at https://loceo.se.


##Postalcode to city API
Enables you to resolve a postalcode to city. Returns a Geojson-object with coordinates.

```javascript
$('#postalcode_input').loceo('city', {key:null}, function(feature){
	if(feature!=null && feature.propertie!=null && feature.properties.city!=null){
		$('#city_output').val(feature.properties.city);
	}
});
```


##City to postalcode
Enables you to resolve a city to postalcodes. Notice you can get several hundred of postalcodes which can be to boxes. Returns a Geojson-object with coordinates.

```javascript
$('#city_input').loceo('postalcode', {key:null}, function(collection){
	if(collection!=null && collection.features!=null && collection.features[0]!=null){
		$('#postalcode_output').val(collection.features[0].properties.postalcode);
	}
});
```