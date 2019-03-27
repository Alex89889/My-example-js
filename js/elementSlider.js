//module
								
var elementSlider = (function () {      
    var instance;
	
    function ElementSlider() {
			var data =  { "imageSlider":[
			{
                "href":"img/product/img1-lg.jpg",
                "title":"Image 1"
            },
            {
                "href":"img/product/img2-lg.jpg",
                "title":"Image 2"
            },
            {
                "href":"img/product/img3-lg.jpg",
                "title":"Image 3"
            },
			{
                "href":"img/product/img4-lg.jpg",
                "title":"Image 4"
            },
			{
                "href":"img/product/img5-lg.jpg",
                "title":"Image 5"
            },
			{
                "href":"img/product/img6-lg.jpg",
                "title":"Image 6"
            }
            ]
			};
			var mainImage = {"imageSlider":[
			{
                "href":"img/product/img1-lg.jpg",
				"id":"largeImg"
            },
			]
			}
			
			return{
				data: data,
				mainImage:mainImage
			}

	}		
			
		return {
			getInstance: function () {
				if (!instance) {
					instance = ElementSlider();
			
				}
				return instance;
			}
		};
	
})();

//elementSlider.getInstance();

