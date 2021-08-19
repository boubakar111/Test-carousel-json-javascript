$(function() {

    $.getJSON('data.json', function(json) {


        var mhtml = '<ul class="marquee-content">';
        $.each(json.data, function(key, val) {

            for (let i = 0; i < val.weight; i++) {
                mhtml += '<li><div class="img-responsive"><img src="' + val.brandName + '" /></div>';

                mhtml += '</li>';
            }

        });
        mhtml += '</ul>';
        $('.marquee').append($(mhtml));


        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    });
});