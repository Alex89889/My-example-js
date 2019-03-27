//module
var validator = (function () {    
   
    var emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	var errorText = {
            isNotEmptyString: "Поле не заполнено.",
            isEmail: "Некорректно введен 'E-mail'"
        }  
	  
	var ruleMap = {
		isNotEmptyString: isNotEmptyString,
		isEmail: isEmail
	}

	
	function isNotEmptyString(value) { 
	    var result = false;
		
		if (typeof(value) === 'string' && value.length > 0) {
			result = true;
		}
		 return result;
	}
	
	function isEmail(value) {
		var result = false;
		
		if (isNotEmptyString(value) && emailRegExp.test(value)) {
		 	result = true;
		}
		return result;
	}
	
	function checkRule(value, ruleName) {
	    return ruleMap[ruleName](value);
	}
	
    function validate(values, rules) {
		
	  var errors = {};
	  var isValid = true;

	  var parametrNames = Object.keys(values);
	  
	  for (var i = 0; i < parametrNames.length; i++) {
		var parametrName = parametrNames[i];
		
	
      if (!checkRule(values[parametrName], rules[parametrName])) {
           errors[parametrName] = errorText[rules[parametrName]];
		   isValid = false;
        }
		
 
	  }
    
	  return {
		  isValid: isValid,
		  errors: errors
	  };
	  

    }
	

    return {
        validate:  validate
     }
 

})();

