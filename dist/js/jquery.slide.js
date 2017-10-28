(function($) {
    $.fn.slide = function () {
        return this.each(function () {
            var $this = $(this),
                $list = $this.find('.banner'),
                $banner = $list.children(),
                i = 0,
                len = $banner.size();

            $list.prepend($banner.eq(len - 1));
            $list.prepend($banner.eq(len - 2));

            var isMove = false;

            $(document).on('click', '.ar', function(){
              var $this = $(this),
                $list = $this.siblings('.carousel').find('.banner'),
                $banner = $list.children();
              if(isMove) return;
              isMove = true;
              $banner.eq(0).animate({width: 0}, 500, 'linear', function(){
                $list.append($banner.eq(0));
                $(this).removeAttr('style');
                $this.siblings('.carousel').find('.banner').children().removeClass('on').eq(2).addClass('on');
                isMove = false;
              });
            });

            $(document).on('click', '.al', function(){
              var $this = $(this),
                $list = $this.siblings('.carousel').find('.banner'),
                $banner = $list.children(),
                width = $banner.eq(0).width();
              if(isMove) return;
              isMove = true;
              $list.prepend($banner.eq(len - 1));
              $this.find('.banner').children().eq(0).css({width: 0}).animate({width: width}, 500, 'linear', function(){
                $(this).removeAttr('style');
                $this.siblings('.carousel').find('.banner').children().removeClass('on').eq(2).addClass('on');
                isMove = false;
              });
            });
        })
    }
})(jQuery);
