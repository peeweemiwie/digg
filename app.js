// The Simple Feed Viewer application JavaScript should live here.
//
(function (window) {
    var util = window.util;

    // The API endpoint for each feeds data
    var API_BASE_URL = 'http://data.digg.com/api/v1/feed/trending/tweets';

    // An array of available feeds
    var FEEDS = [
        { slug: 'digg' },
        { slug: 'david_picks' },
        { slug: 'politics' },
        { slug: 'design' }
    ];
    
    // This is a sample API call.
    util.ajax({
        url: API_BASE_URL,
        data: {
            slug: 'digg'
        },
        success: function (data) {
            console.log('Success!', data);
        },
        error: function (responseText) {
            console.log('Error! :(', responseText);
        }
    });

})(this);
