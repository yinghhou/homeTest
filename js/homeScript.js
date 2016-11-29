/**
 *      Author:Bates Wang
 *      Time: 2016/6/23.
 */
var mySwiper = new Swiper('.swiper-container', {
    "direction":"vertical",
    "speed":600,
    "prevButton":".swiper-button-prev",
    "nextButton":".swiper-button-next",
    "pagination" : '.swiper-pagination',
    "paginationClickable" :true,
    "initialSlide" :0,
    "shortSwipes" : true,
    "longSwipesRatio" : 0.1,
    "observer":true,
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    }
});
(function(){
    var
        $nextPage = $(".next-btn"),
        $nextPageTrigger = $(".swiper-button-next"),
        $animateNextPage = $("#print-btn"),
        $flicker = $(".no-1"),
        $flickerTarget = $("#flicker"),
        $takePhotoAlign = $(".move-n4-0"),
        space = null;
    $flicker.on("touchend",function(){
        $flickerTarget.addClass("flicker-two");
        space = setTimeout(function(){
            $nextPageTrigger.trigger("click");
            clearTimeout(space);
        },1000);
    });
    $nextPage.on("touchend",function(){
        $nextPageTrigger.trigger("click");
    });
    $animateNextPage.on("touchend",function(){
        var
            $movePic = $(".move-n4-3"),
            $moveHand = $(".move-n4-7");
        $movePic.animate({"left":"33px","bottom" :"238px"},2000,function(){
            $(".move-n4-3-2,.move-n4-3-3").css({"opacity":"1"});
            $movePic.css({"zIndex":"4"});
            $moveHand.animate({"right":"0", "bottom":"0"},800);
        });
    });
    $takePhotoAlign.click(function(){
        var
            $movePic = $(".move-n4-3"),
            $moveHand = $(".move-n4-7");
        $movePic.css("zIndex",1);
        $movePic.removeAttr("style");
        $moveHand.removeAttr("style");
        $(".move-n4-3-2,.move-n4-3-3").css({"opacity":"0"});
        $flickerTarget.removeClass("flicker-two");
        $(".swiper-pagination-bullet").eq(0).trigger("click");
    });
})();

function Loading(){
    this.init.apply(this,arguments)
}
Loading.prototype.init=function(id,aImg,handler){
    var
        oCon=document.getElementById(id),
        aData=[],
        iImgCount=aImg.length,
        iLoaded=0;
    if(!oCon){return;}
    for(var i=0;i<iImgCount;i++){
        (function(i){
            var oImg=new Image();
            var ele = document.getElementById("txt");
            oImg.onload=function(){
                var w = Math.ceil(++iLoaded/iImgCount*100)+"%";
                oCon.style.width=w;
                ele.innerHTML = w;
                this.onload=null;
                var aTmp=document.createElement("img");
                aTmp.src=this.src;
                aData.push(aTmp);
                if(aData[i]&&aData.length==iImgCount){
                    handler(aData);
                }
            };
            oImg.src=aImg[i];
        })(i);
    }
};
var aImg=[
    "images/btn_again.png",
    "images/img_printer2.png",
    "images/img_printer3.png",
    "images/img_printer4.png",
    "images/n_10_arrow.png",
    "images/n_10_bg.png",
    "images/n_10_btn_buy.png",
    "images/n_10_btn_share.png",
    "images/n_10_img_ice.png",
    "images/n_10_img_printer1.png",
    "images/n_10_img_printer2.png",
    "images/n_10_img_printer3.png",
    "images/n_1_bg_img.png",
    "images/n_1_img_penguin.png",
    "images/n_1_img_text.png",
    "images/n_1_next.png",
    "images/n_2_bg_img.png",
    "images/n_2_img_penguin2.png",
    "images/n_3_bg_color.png",
    "images/n_3_btn_print.png",
    "images/n_3_img_phone.png",
    "images/n_3_img_pic.png",
    "images/n_3_pic_hand.png",
    "images/n_4_bg_color.png",
    "images/n_4_icon_next.png",
    "images/n_4_img_hand.png",
    "images/n_4_img_notbook.png",
    "images/n_4_img_picture.png",
    //"images/n_4_img_plant.png",
    "images/n_4_img_printer.png",
    "images/n_4_logo.png",
    "images/n_4_text.png",
    "images/n_4_text2.png",
    "images/n_4_text3.png",
    "images/n_5_arrow.png",
    "images/n_5_bg.png",
    "images/n_5_img_file.png",
    "images/n_5_img_paper.png",
    "images/n_5_img_phone.png",
    "images/n_5_img_photo.png",
    "images/n_5_text.png",
    "images/n_6_img_bg.png",
    "images/n_6_books.png",
    "images/n_6_men.png",
    "images/n_6_bag.png",
    "images/n_6_img_paper.png",
    "images/n_6_img_printer3.png",
    "images/n_6_img_printer4.png",
    "images/n_6_text.png",
    "images/n_7_img_becket.png",
    "images/n_7_img_pop.png",
    "images/n_7_subway_slow.gif",
    "images/n_7_text.png",
    "images/n_8_bg.png",
    "images/n_8_img_eskimo.png",
    "images/n_8_img_girl.png",
    "images/n_8_img_men_left.png",
    "images/n_8_img_men_right.png",
    "images/n_8_img_penguin.png",
    "images/phone.png",
    "images/n_8_text.png",
    "images/n_9_bg.png",
    "images/n_9_img_girl.png",
    "images/n_9_img_hearts.png",
    "images/n_9_img_paper.png",
    "images/n_9_img_printer.png",
    "images/n_9_text.png",
    "images/img_printbtn_star.png",
    "images/img_mum.png",
    "images/n_12_bg.png",
    "images/n_12_img_coffee.png",
    "images/n_12_img_hand.png",
    "images/n_12_img_phone.png",
    "images/n_12_img_QQfriend.png"
];
var eleImg = $("img");
var eleBg = $(".bg-load");
var arr = [];
var newLoading = new Image();
newLoading.src = "images/loading_bg.png";
newLoading.onload=function(){
    new Loading("load",aImg,function(){
        eleImg.each(function(i){
            eleImg.eq(i).attr("src",eleImg.eq(i).data("src"));
        });
        eleBg.each(function(j){
            arr.push("url("+eleBg.eq(j).data('bg')+")");
            eleBg.eq(j).css("backgroundImage",arr[j]);
        });

        var timer = setTimeout(function(){
            $(".loading").fadeOut(800);
            document.getElementById("loop").play();
            clearTimeout(timer);
        },800);
    });
};
var media = document.getElementById("loop");
var timer2 = null;
media.loop = true;
media.load();
var $media = $(".music-icon");
$media.on("touchend",function(){
    $media.toggleClass("toggle-icon");
    if($media.hasClass("toggle-icon")){
        media.pause();
    }else{
        media.play();
    }
});
//$(".buy").click(function(){
//    var sequence = $(this).data("sequence");
//    $.ajax({
//        "type":"GET",
//        "url":"URL",
//        "data":sequence,
//        "success":function(res){
//
//        },
//        "error":function(err){
//
//        }
//    });
//    return false;
//});