//module
'use strict';
	
var authorisationForm = (function (){   
    var elShow = document.getElementById("show"),
	    elHide = document.getElementById("hide"),
		elAuthorisation = document.getElementById("authorisation"),
	    instance;
	

    function AuthorisationForm(formId) {
		var popup = popupList('window');
		  
		function show() {
			popup.show();
			authorisationForm.elHide.addEventListener("click", function(){ hide()}, false);
			authorisationForm.elAuthorisation.addEventListener("click", function(){ makeAuthorisation(this.form)}, false);
			authorisationForm.elShow.removeEventListener("click", function(){ show() }, false);
		}
		
		function hide() {
			popup.hide();
			authorisationForm.elHide.removeEventListener("click", function(){ hide()}, false);
		}
	 
		function showError(container, errorMessage) {
			var msgElem = document.createElement('span');
			
			container.className = 'error';
			msgElem.className = "error-message";
			msgElem.innerHTML = errorMessage;
			container.appendChild(msgElem);
		}

		function resetError(container) {
			container.className = '';
			if (container.lastChild.className == "error-message") {
				container.removeChild(container.lastChild);
			}
		} 
		
		function putHello() {
			var elUser = document.getElementById('userName');
		    elUser.innerText = "user";
			authorisationForm.elAuthorisation.elHide.removeEventListener("click", function(){ makeAuthorisation(this.form)}, false);
		}
		
		function doAuthorisation() {
			var promise = new Promise(function (resolve, reject) { 
			    var authorisationDelay = 5*1000;
				if (Math.random() > .5){
					setTimeout(function () {
						resolve("result")
					}, authorisationDelay);
				}
				else {
					reject("error");
				}
			}).then(
					function (result) {
						hide();
						putHello();
					},
					function (error) {
						
					}
				);
		}
	 
		function makeAuthorisation(form) {
			var values = {
				name: form.elements.name.value,
				email: form.elements.email.value
			}
			var rules = {
				name: 'isNotEmptyString',
				email: 'isEmail'
			}
		   var elementMap = {
				name: form.elements.name,
				 email: form.elements.email
			}


			var result = validator.validate(values, rules);
			if (!result.isValid) {
				var invalidParametrNames = Object.keys(result.errors);
				for (var i = 0; i < invalidParametrNames.length; i++) {
					var invalidParametrName = invalidParametrNames[i];
					resetError(elementMap[invalidParametrName].parentNode);
					showError(elementMap[invalidParametrName].parentNode, result.errors[invalidParametrName]);
				}
			}
			else {
				doAuthorisation();
			}
		}
		
		return {
			show: show,
			hide: hide,
			makeAuthorisation: makeAuthorisation
		};
	}  
	  
  
    return {
	    getInstance: function () {
		    if (!instance) {
			    instance = AuthorisationForm();
			
		    }
		    return instance;
	    },
		elShow: elShow,
		elHide: elHide,
		elAuthorisation: elAuthorisation
    };
})();	  

	
var show = authorisationForm.getInstance().show,
    hide = authorisationForm.getInstance().hide,
	makeAuthorisation = authorisationForm.getInstance().makeAuthorisation;
	
authorisationForm.elShow.addEventListener("click", show, false);
//authorisationForm.elShow.removeEventListener("click", show, false);
elshow.onclick = show;

function addEventListener(element, action, FN){
	element[action] = FN;
	
}
function removeEventListener(element, action, FN){
	if(element[action] === FN){
		delete element[action];
	}
	
}
addEventListener(elShow,'onclick', show);
removeEventListener(elShow,'onclick', show);	