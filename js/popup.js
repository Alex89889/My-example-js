//module

var popupList = (function () {    
   return function(popupId) {
	    var popup = document.getElementById(popupId),
			wrap;
		
		function createWrap(elId){
			
			var el = document.createElement('div');
			el.style.display = 'block';
		    el.style.opacity = '0.8';
		    el.style.position = 'fixed';
		    el.style.left = '0';
		    el.style.right = '0';
		    el.style.top = '0';
		    el.style.bottom = '0';
		    el.style.padding = '16px';
		    el.style['background-color'] = 'rgba(1, 1, 1, 0.725)';
		    el.style['z-index'] =  '100';
		    el.style.overflow = 'auto';
			el.id = elId;
			return el;
			
		}
		
	   	var show = function() {
			if(!wrap){
				popup.style.display = "block";
				wrap = createWrap('wrap');
                document.body.appendChild(wrap);
			}
		    
        
        };
 
        var hide = function() {	
            if(wrap){
				popup.style.display = "none";
				document.body.removeChild(wrap);
			    wrap = undefined;
			}			
          
			
        };
 
        return {
            show:  show,
            hide : hide 
        }
   }
 

})();
 

