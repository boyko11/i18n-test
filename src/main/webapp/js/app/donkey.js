$(document).ready(function() {
	
	   i18n.init(function(t) {
		  // translate nav
		  $(".dictionary").i18n();

		  // programatical access
		  //var appName = t("app.name");
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