/**
 * Created by qiangxl on 2018/3/29.
 */



$(document).ready(function () {
    var percent = $("#percent")
    var myImg = $("#myImg")
    var svg = $('#svg')
    var circle = document.querySelectorAll("circle")[1]
    var inter = setInterval(function () {
        percent[0].innerText = parseInt(percent[0].innerText) + 1
        var percents = (parseInt(percent[0].innerText) + 1) / 100, perimeter = Math.PI * 2 * 170;
        circle.setAttribute('stroke-dasharray', perimeter * percents + " " + perimeter * (1- percents));
        if (parseInt(percent[0].innerText) == 100) {
            clearInterval(inter)
            percent.hide()
            svg.hide()
            myImg[0].src = "./img/card_first.png"
            myImg[0].onclick = function () {
                if(myImg[0].src.indexOf("card_end.png")!=-1){
                    percent.toggle()
                    percent[0].style.color = "#fff"
                }else{
                    //myImg.src = "./img/test1.png"
                    myImg.toggle()
                    //$(".swiper-container").style.display = "block"
                    var divs = $('.swiper-slide-active')[0].getElementsByTagName("DIV")

                    for (var i = 0; i < divs.length; i++) {
                        divs[i].style.opacity = 1
                    }
                }

            }
        }
    }, 10);

    var btn = $('.ans1,.ans2')
    var answer = []
    for (var k = 0; k < btn.length; k++) {
        console.log(btn[k])
        btn[k].onclick = (function () {
            return function () {
                console.log(222222)
                answer.push(this)
                if ($(this).attr("data") == "end") {
                    var isTrue = 0
                    for (var j = 0; j < answer.length; j++) {
                        if (answer[j].getAttribute("tag") == "true") {
                            isTrue++
                        }
                    }
                    if (isTrue == 1 || isTrue == 0) {
                        percent[0].innerText = "良友"
                    } else if (isTrue == 2) {
                        percent[0].innerText = "某刻"
                    } else if (isTrue == 3) {
                        percent[0].innerText = "两层"
                    } else if (isTrue == 4 || isTrue == 5) {
                        percent[0].innerText = "感人"
                    }
                    myImg[0].src = "./img/card_end.png"
                    myImg.toggle()
                    //percent.toggle()
                }
            }
        }());
    }
})


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        init: function () {
            //Swiper初始化了
            /*var divs = $('.swiper-slide-active')[0].getElementsByTagName("DIV")
            console.log(divs)
            for(var i in divs){
              console.log(divs[i])
              divs[i].style.opacity = 1
            }*/
        },
        slideChangeTransitionEnd: function () {
            var divs = $('.swiper-slide-active')[0].getElementsByTagName("DIV")
            //var divs = $('.question,.ans1,.ans2')
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.opacity = 1
            }
        },
        sliderMove: function () {
            var divs = $('.swiper-slide-active')[0].getElementsByTagName("DIV")
            //var divs = $('.question,.ans1,.ans2')
            for (var i = 0; i < divs.length; i++) {
                //divs[i].show()
                divs[i].style.opacity = 0
            }
        },
    },
});

