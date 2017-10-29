(function($) {
    $.fn.slide = function () {
        return this.each(function () {
            var $this = $(this),
                $list = $this.find('.banner'),
                $banner = $list.children(),
                $prev = $this.siblings('.al'),
                $next = $this.siblings('.ar'),
                i = 0,
                len = $banner.size();

            $list.prepend($banner.eq(len - 1));
            $list.prepend($banner.eq(len - 2));

            var isMove = false;

            $next.on('click', function(){
              var $this = $(this),
                $list = $this.siblings('.carousel').find('.banner'),
                $banner = $list.children();
              $list.append($banner.eq(0));
              $this.siblings('.carousel').find('.banner').children().removeClass('on').eq(2).addClass('on');
            });

            $prev.on('click', function(){
              var $this = $(this),
                  $list = $this.siblings('.carousel').find('.banner'),
                  $banner = $list.children();
              $list.prepend($banner.eq(len - 1));
              $(this).siblings('.carousel').find('.banner').children().removeClass('on').eq(2).addClass('on');
            });
        })
    }
})(jQuery);
