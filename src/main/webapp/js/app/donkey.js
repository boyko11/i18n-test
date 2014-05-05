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
			url : "/i18n-test/stable",
		}).done(function(data) {
			var stableTemplateSource   = $("#stable-template").html();
			var template = Handlebars.compile(stableTemplateSource);
			var populatedTemplateHtml    = template(data);
			$("#stable-template-populated").html(populatedTemplateHtml);
		}).fail(function() {
			alert("Hey there donkey, error happened.");
		}).always(function() {
			console.log("complete");
		});
		
});