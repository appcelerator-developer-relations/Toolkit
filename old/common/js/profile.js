//Insert profile info into the presentation
$(function() {
	$.getJSON('/profile/profile.json', function(profileData) {
		//replace profile data
		$('.profile_name').html(profileData.name);
		$('.profile_title').html(profileData.title);
		$('.profile_company').html(profileData.company);
		$('.profile_company').html(profileData.company);
		
		//replace images
		$('.profile_headshot').attr('src', profileData.headshot);
		$('.profile_logo').attr('src', profileData.logo);
		
		//insert any known badges
		$.each(profileData.badges, function(idx, elem) {
			$('.profile_badges').append('<img src="/common/images/badges/'+elem+'.png"/>');
		});
		
		//insert link bar
		$('.profile_link_bar').append('<ul>');
		$.each(profileData.links, function(key, val) {
			$('.profile_link_bar').append('<li><a href="'+val+'">'+key+'</a></li>');
		});
		$('.profile_link_bar').append('</ul>');
	});
});