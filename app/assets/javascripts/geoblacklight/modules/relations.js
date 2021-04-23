// Try overriding relations.js from geoblacklight
Blacklight.onLoad(function () {
    $('[data-relations="true"]').each(function (i, element) {
        var $elem = $(element);
        var attributes = $elem.data();
        //var relation_url = attributes['url'] + '/relations';
        var url = attributes['url'];
        var url_split = url.split('?');
        url_split[0] = url_split[0].concat('/relations');
        var relation_url = url_split.join('?');

        $.ajax({
            url: relation_url,
            type: 'GET',
            success: function (data) {
                $elem.append($(data).hide().fadeIn(200));
            }
        })
    });
});
