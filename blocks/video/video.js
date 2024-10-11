var anchors = document.querySelector('main').querySelectorAll('a');
anchors.forEach(function(anchor) {
    var href = anchor.href;
    // Check if the href contains a YouTube link
    if (href.includes('youtube.com/watch')) {
        // Extract the video ID
        var videoId = href.split('v=')[1].split('&')[0];
		alert(videoId);
        // Create the iFrame
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + videoId;
        iframe.width = '560';
        iframe.height = '315';
        // Replace the anchor tag with the iFrame
        anchor.parentNode.replaceChild(iframe, anchor);
    }
});
