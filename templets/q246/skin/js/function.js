/**
 * Created by 殇雪 on 2017/11/8.
 */
$(function () {
  window.scrollReveal = new scrollReveal({
    reset: false, move: '50px'
  });
  //右侧
  $(".aside li").hover(function () {
    $(this).find(".img1").hide();
    $(this).find(".img2").show()
    $(this).children(".ewm").show();
    $(this).children(".kuzx").css({"display": "block", "opacity": 1});
    $(this).children("div").animate({"right": "60px"});
  }, function () {
    $(this).find(".img2").hide();
    $(this).find(".img1").show();
    $(this).children(".phone_meassage").animate({"right": "-240px"});
    $(this).children(".kuzx").animate({"right": "-127px", "display": "none", "opacity": 0});
    $(this).children(".fx").animate({"right": "-127px"});
    $(this).children(".ewm").hide();
    $(this).children(".ss").animate({"right": "-205px"});
  })
  $("#goTopBtn").click(function () {
    $('body,html').animate({scrollTop: 0}, 600);
  })
  //    nav
  $(".menu").slide({
    type: "menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
    titCell: ".nLi", //鼠标触发对象
    targetCell: ".menu2", //titCell里面包含的要显示/消失的对象
    effect: "slideDown", //targetCell下拉效果
    delayTime: 300, //效果时间 
    triggerTime: 0, //鼠标延迟触发时间（默认150）
    returnDefault: true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
  });
  $(".navList .nLi:last-child").css({"background": "none"})
  //    banner
  $('#owl-demo').owlCarousel({
    singleItem: true,
    lazyLoad: true,
    navigation: false,
    addClassActive: true,
    autoPlay: 3000,
    loop: true
  });
  $('#owl-demo1').owlCarousel({
    singleItem: true,
    lazyLoad: true,
    navigation: false,
    addClassActive: true,
    autoPlay: 3000,
    loop: true
  });
  //    pro
  $(".pro .con li").hover(function () {
    $(this).find("p").stop().fadeToggle("slow")
    $(this).find(".model").stop().fadeToggle("slow")
  })
  $(".pro1 .con li").hover(function () {
    $(this).find("p").stop().fadeToggle("slow")
    $(this).find(".model").stop().fadeToggle("slow")
  })
  //展开下一级
  $(".sidebar ul.sidemenu li a").click(function () {
    $(this).parent().siblings().find("ul").stop().slideUp()//如果要点击其他缩上去则增加这句
    //$(this).next("ul").slideToggle(300);
  })
  //    当前选中项的所有父节点都显示出来，程序会将点击的li项默认添加.current
  $(".sidebar ul.sidemenu li.current").parents().show();
  $(".inside .container .article .list-text1 ul li").each(function () {
    var index = $(this).index()
    $(this).find(".num").html(index + 1)
  })
  function case1(data) {
    var html = data.html();
    var str = html.toUpperCase();
    data.empty().html(str);
  }
  if ($(".inside .container .title h4").length > 0) {
    case1($(".inside .container .title h4"))
  }
  $(".add11").on("click", function () {
    $(".sidemenu").slideToggle("slow")
  })
});