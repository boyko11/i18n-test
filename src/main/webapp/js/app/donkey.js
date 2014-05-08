$(document).ready(function() {
	
	   i18n.init(function(t) {
		  // translate nav
		  $(".dictionary").i18n();

		  // programatical access
		  //var appName = t("app.name");
		});
	   
	   Handlebars.registerHelper('i18next', function(i18n_key) {
	       var result = i18n.t(i18n_key);
	      
	       return new Handlebars.SafeString(result);
	     });

		$.ajax({
		    //GET JSON FROM SERVER
			url : "/i18n-test/stable",
		}).done(function(data) {
		    //GET THE TEMPLATE
			var stableTemplateSource = $("#stable-template").html();
			
			//COMPILE THE HTML TEMPLATE
			var template = Handlebars.compile(stableTemplateSource);
			
			//MARRY the JSON received from the server with the HTML TEMPLATE
			//In other words: Populate the template with the dynamic data to produce the final HTML
			var populatedTemplateHtml = template(data);
			
			//DISPLAY the populated html to the user
			$("#stable-template-populated").html(populatedTemplateHtml);
			
		}).fail(function() {
			alert("Hey there donkey, error happened.");
		}).always(function() {
			console.log("complete");
		});
		
});