/*!
* Loceo Javascript Library 1.0.1
* Copyright 2012 All rights reserved.
* Use of this source code is governed by a BSD-style license that can be found at https://loceo.se
*/

(function($){
	var mets = {
		"init":function(opt){

		},
		"city":function(opt,callback){
			return this.each(function(){
				var synclock=false,timer=null;
				$(this).keyup(function(){
					if(timer){
						clearTimeout(timer);
					}
					var len=$(this).val().length;
					if(len>4&&len<10){
						var args={'q':$(this).val()};
						if(opt.key){
							args.key=opt.key;
						}
						if(synclock==false){
							timer = setTimeout(function() {
								synclock=true;
                				var jqxhr = $.getJSON("https://api.loceo.se/v1/geocoding/city?callback=?", args,
								function(data){
									if(typeof callback=='function' && data!=null){
										callback.call(this,data);
									}
									synclock=false;
								});
								if(jqxhr.error){
									jqxhr.error(function(){synclock=false;});
								}
            				}, 200);

						}
					}
				});
			});
		},
		"postalcode":function(opt,callback){
			return this.each(function(){
				var synclock=false,timer=null;
				$(this).keyup(function(){
					if(timer){
						clearTimeout(timer);
					}
					var len=$(this).val().length;
					if(len>2&&len<30){
						var args={'q':$(this).val()};
						if(opt.key){
							args.key=opt.key;
						}
						if(synclock==false){
							timer = setTimeout(function() {
								synclock=true;
								var jqxhr = $.getJSON("https://api.loceo.se/v1/geocoding/postalcode?callback=?", args,
								function(data){
									if(typeof callback=='function' && data!=null){
										callback.call(this,data);
									}
									synclock=false;
								});
								if(jqxhr.error){
									jqxhr.error(function(){synclock=false;});
								}
							}, 400);
						}
					}
				});
			});
		}
	};
	$.fn.loceo = function(m) {
		if ( mets[m] ) {
			return mets[m].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof m === 'object' || ! m ) {
			return mets.init.apply(this,arguments);
		} else {
			$.error('Method '+m+' does not exist on jQuery.loceo' );
		}
	};
})(jQuery);

