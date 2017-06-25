$(document).ready(function () {
	'use strict';
	loadProjects();

	

	$(".card").on("mouseenter", function () {
		$(".card-footer").show();
	});

	function loadProjects() {
		$.ajax({
			url: 'projects.json',
			success: function (projects) {
				projects.forEach(function (project) {
					renderProject(project);
				});
			},
			error: function (error) {
				console.log(error);
			}
		});
	}

	function renderProject(project) {
		var template = $.templates("#project");
		var html = template.render(project);
		$("#projects").append(html);
	}
});
