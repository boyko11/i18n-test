var dictionary = {
	
	language : "english",
	text : function(key) {
		return dictionary[language][key];
	}
		
};



var english = {};

english["donkeyKey"] = "donkey";
english["muleKey"] = "mule";

dictionary["english"] = english;


var bulgarian = {};

bulgarian["donkeyKey"] = "магаре";
bulgarian["muleKey"] = "муле";

dictionary["bulgarian"] = bulgarian;