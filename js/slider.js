//module
var slider = (function () {    
    var instance;
        function Slider() {
			
			var getElementSlider = function() {
				var data = elementSlider.getInstance().data;
				var mainImage = elementSlider.getInstance().mainImage;
				var output="<p><img id='" + mainImage.imageSlider[0].id + "' src='" + mainImage.imageSlider[0].href + "' ></p><ul id='thumbs'>";
				
				for (var i in data.imageSlider) {
					output+="<li><a  href='" + data.imageSlider[i].href + "' title='" + data.imageSlider[i].title + "'> <img width='100' height='100' src='"
					+ data.imageSlider[i].href+"'></a></li>";
				}
				output+="</ul>";
				document.getElementById("container").innerHTML = output;
			}();
			
			var largeImg = document.getElementById('largeImg');
			var thumbs = document.getElementById('thumbs')
			/* предзагрузка */
			var imgs = thumbs.getElementsByTagName('img');
			for (var i = 0; i < imgs.length; i++) {
			  var url = imgs[i].parentNode.href;
			  var img = document.createElement('img');
			  img.src = url;
			}
			   // 

			function showThumbnail(href, title) {
			  largeImg.src = href;
			  largeImg.alt = title;
			}
			
			thumbs.onclick = function(e) {
			  var target = e.target;

			  while (target != this) {

				if (target.nodeName == 'A') {
				  showThumbnail(target.href, target.title);
				  return false;
				}

				target = target.parentNode;
			  }

			}
			
			return{
				showThumbnail: showThumbnail,
				getElementSlider: getElementSlider
			}
        }			
		return {
	    getInstance: function () {
		    if (!instance) {
			    instance = Slider();
			
		    }
		    return instance;
	    }
    };

})();
slider.getInstance();
