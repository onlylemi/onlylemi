/**
 * Created by fabiomadeira on 25/02/15.
 */

// redirect
window.location.href="http://onlylemi.github.io"; 

// jQuery for page scrolling feature
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});


