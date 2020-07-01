$(function () {
    // 右边边栏脚本
   $(".aside li").hover(function () {
        $(this).find(".img1").hide();
        $(this).find(".img2").show()
        $(this).children(".ewm").show();
        $(this).children("div").css({"display":"block","opacity":1});
        $(this).children("div").animate({ "right": "60px"});
    }, function () {
        $(this).find(".img2").hide();
        $(this).find(".img1").show();
        $(this).children(".phone_meassage").animate({ "display": "none", "opacity":0,"right": "-240px" });
        $(this).children(".qq_online").animate({ "right": "-127px", "display": "none","opacity":0 });
        $(this).children(".fx").animate({ "right": "-127px", "display": "none","opacity":0 });
        $(this).children(".ewm").hide();
        $(this).children(".search_box").animate({ "right": "-205px", "display": "none","opacity":0  });
    })
    $(".fx div").hover(function () {
        var index = $(this).index() + 1;
        $(this).find("img").attr("src", "images/sshare" + index + ".png");
    }, function () {
        var index = $(this).index() + 1;
        $(this).find("img").attr("src", "images/share" + index + ".png");
    })
    $("#goTopBtn").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })
     $(".top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 600);
    })
    // 手机左边弹出菜单
    $(".menu_icon").click(function () {
        $(".black_cloth").show();
        $(".wrap_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_footer").animate({ "left": "250px" }, 200);
    })
    $(".black_cloth").click(function () {
        $(".black_cloth").hide();
        $(".wrap_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_footer").animate({ "left": "0" }, 200);
    })
    // 手机左边弹出菜单下拉
    $(".wrap_menu>li.menu_lists>a").click(function () {
        if ($(this).parent().find(".wrap_menu_2").css("display") == "block") {
            $(this).parent().find(".wrap_menu_2").slideUp();
            $(this).parent().find("p").html("+");
            return;
        }
        $(".wrap_menu_2").slideUp();
        $(".wrap_menu li p").html("+");
         $(this).parent().find("p").html("-");
        $(this).parent().find(".wrap_menu_2").slideDown();
    })
    //点击导航弹出左边菜单
    $(".navigation").click(function () {
        $(".black_cloth").show();
        $(".wrap_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_footer").animate({ "left": "250px" }, 200);
    })
    //点击叉叉关闭左边弹出菜单
    $(".menu_close").click(function(){
         $(".black_cloth").hide();
        $(".wrap_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_footer").animate({ "left": "0" }, 200);
    })
    //手机底部
    if ($(window).width() < 768) {
        var height = $(".wap_footer").height() + 20;
        $(".pad").css("height", height + "px");
    }
    //手机底部点击分享
    $(".cancel").click(function () {
        $(".wap_share").slideUp(400);
    })
    $(".shares").click(function () {
        $(".wap_share").slideDown(400);
    })
    function share() {
        var width = $(".wap_share").width();
        var iconWidth = width * 0.2;
        var marginWidth = width * 0.04;
        var size = $(".wap_share .wap_share_box>div>a").size();
        var parentWidth = (iconWidth * size) + marginWidth * (size + 1);
        $(".wap_share .wap_share_box>div>a").css({ "width": iconWidth + "px", "marginLeft": marginWidth + "px" });
        $(".wap_share .wap_share_box>div").css("width", parentWidth + "px");
    }
    share();
    //手机底部点击搜索
    $(".w_searchButton").click(function () {
        var width = $(".wap_footer").width();
        if ($(".wap_search_input").css("left") == width + "px") {
            $(".wap_search_input").animate({ "left": 0 }, 300);
        } else {
            $(".wap_search_input").animate({ "left": "100%" }, 300);
        }
    })
    
    //手机菜单下拉
    var n = 0;
    $(".phone-menuicon").click(function () {
        $(".phone-menulist").slideToggle(200);
        n++;
        $(this).find("img").css("transform", "rotate(" + 180 * n + "deg)");
    })
     $(".phone_jia").append('<i class="jia">+</i><i class="jian">-</i>')
    $(".menu_list_body li a.sub1_a,.phone-menulist li a.sub1_a").click(function () {

        $(this).parent().siblings().find("i.jia").show()
        $(this).parent().siblings().find("i.jian").hide()
        $(this).parent().siblings().find(".sub2").slideUp()
        $(this).parent().siblings().find("a.sub1_a").removeClass("cur")
        $(this).siblings(".sub2").slideToggle()
        $(this).toggleClass("cur")
        $(this).find("i.jia").toggle()
        $(this).find("i.jian").toggle()
    })
    $(".sub2 li a.sub2_a").click(function () {
        $(this).parent().siblings().find(".sub3").slideUp()
        $(this).siblings(".sub3").slideToggle()

    })
    //模拟placeholder
    function inputplaceholder() {
        $('.feedback_list_box input').bind('input propertychange', function () {
            $(this).next().html("");
        });
        $(".feedback_list_box input").focus(function () {
            $(".feedback_list_box input").each(function (i) {
                var self = $(".feedback_list_box input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".feedback_list_box input").blur(function () {
            $(".feedback_list_box input").each(function (i) {
                var self = $(".feedback_list_box input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    inputplaceholder();
    function textareaplaceholder() {
        $('.feedback_list_box textarea').bind('input propertychange', "textarea", function () {
            $(this).next().html("");
        });
        $(".feedback_list_box textarea").focus(function () {
            $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".feedback_list_box textarea").blur(function () {
            $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    textareaplaceholder();
    function inputplaceholder1() {
        $('.ss input').bind('input propertychange', function () {
            $(this).next().html("");
        });
        $(".ss input").focus(function () {
            $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".ss input").blur(function () {
            $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    inputplaceholder1();
    //展开下一级
    $("ul.sidemenu li a").click(function () {
	  $(this).parent().siblings().find("ul").slideUp()//如果要点击其他缩上去则增加这句
      $(this).next("ul").slideToggle(300);
    })
    //当前选中项的所有父节点都显示出来，程序会将点击的li项默认添加.current
    $("ul.sidemenu li.current").parents().show();

		
})