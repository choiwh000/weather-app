$(function(){


    $.getJSON( 'https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=59229def0c12d575d02afbf50b4d4735&units=metric' , function(data){

        moment.lang('ko', {
            weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
            weekdaysShort: ["일","월","화","수","목","금","토"],
        });

        let weather = data.weather[0].id;
        let dt = data.dt;
        let today = moment(dt * 1000);

        let date = today.format('MM월 DD일 dddd');
        // console.log(date);
        $('#date').text(date);

        if (weather == 800) {
            weather = "맑음"
        }

        if (weather == 804 | 803 | 802 | 801) {
            weather = "흐림"
            }

        if (weather == 500) {
            weather = "비"
        }


        // console.log(date);
        
        let temp = data.main.temp;
        // console.log(temp, weather);


        $('#temp').text(Math.floor(temp) + "°" );
        $('#weather').text(weather);
        $('.t1').text(Math.floor(temp) + "°" );
        $('.w1').text(weather);


       $('.s1').css('background-image', 'url(./img/small' + weather + '.png)');
       $('#wicon').css('background-image', 'url(./img/' +  weather + '.png)');

    });

    $.getJSON( 'https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=59229def0c12d575d02afbf50b4d4735&units=metric' , function(data){

        // console.log(data);

        for(let i = 1; i < 40 ; i++ ) {
                

                let temp = data.list[i].main.temp;
                let weather = data.list[i].weather[0].id;
                // let weather1 = data.list[i].weather[0].main;
                let dt = data.list[i].dt;
                let today = moment(dt * 1000);
                let date = today.format('MM월 DD일 hh시mm분 A');

                // console.log(date, temp, weather, weather1);

                if (weather == 800) {
                    weather = "맑음"
                }

                if (weather == 804 | 803 | 802 | 801) {
                    weather = "흐림"
                }

                if (weather == 500) {
                    weather = "비"
                }
                



                if(i == 8){
                    $('.t2').text(Math.floor(temp) + "°");
                    $('.w2').text(weather);
                    $('.s2').css('background-image', 'url(./img/small' + weather + '.png)')
                }
                else if (i == 16) {
                    $('.t3').text(Math.floor(temp) + "°");
                    $('.w3').text(weather);
                    $('.s3').css('background-image', 'url(./img/small' + weather + '.png)')
                }
                else if (i == 24) {
                    $('.t4').text(Math.floor(temp) + "°");
                    $('.w4').text(weather);
                    $('.s4').css('background-image', 'url(./img/small' + weather + '.png)')
                }


            }


    });
    
    





    $('.alram').hide();

    
    $('.tdl').click(function(){
         
        $('.alram').show();

        
        var da = $(this).index();
        // console.log(da);
        var num = "1"
        var idnum = Number(da) + Number(num);

        $('#comp').click(function(){
            $('.alram').hide();
            $('.bot>.l1>.a'+ idnum).css('background-color', '#64A2FF');
            $('.bot>.l1>.a'+ idnum + '>a').css('color', '#fff'); 
            // console.log(idnum);                        
            // console.log('hi');

        })
           

        $('#modi').click(function(){
            $('.alram').hide();
            var msg = prompt('수정하시겠습니까?', '오늘의 할 일은 무엇인가요?');
            // console.log(msg);
            $('.bot>.l1>.a'+ idnum).html('<a>' + msg + '</a>');
        })


        $('#push').click(function(){
            $('.alram').hide();
            let obj = $('.bot>.l1>.a'+idnum).text();
            $('.bot>.l1>.a'+ idnum).hide();
            // console.log(obj);
            $('.l2').append('<li class="tdl"><a href="#">'+ obj + '</a></li>');
        })


        $('#nc').click(function(){
            $('.alram').hide();
            $('.bot>.l1>.a'+ idnum).hide();
            // console.log(idnum);
        })

    })

    var da = 0;
    var idnum = 0;


    $('#esc').click(function(){

        $('.alram').hide();
    })


    $('#title').click(function(){

        $('.bot').toggleClass('animation')
    })

    $('#line').click(function(){

        $('.bot').toggleClass('animation')
    })


    $('#mg').click(function(){
        $('#mg').val('');
    })


    $('#mg').keypress(function(e){
        // console.log(e.keyCode);


        if(e.keyCode == 13){
            let msg = $('#mg').val();
            // console.log(msg);

            if(msg == ""){
                return null;
            }
            
            let next = $('<li class= "tdl2"></li>');
            next.html( '<a>' + msg + '</a>');

            $('.tdl3').after( next );
            $('#mg').val('');
        }

    })





    $('.moon').click(function(){
        $('body').css('background-color', '#333');
        $('*').css('color', '#fff');
        $('.day').css('background-color', '#444');
        $('.day').css('box-shadow', '1px 2px 6px #333');
        $('#w').css('background-color', '#444');
        $('#d').css('background-color', '#444');
        $('#t').css('background-color', '#444');
        $('#sicon').css('background-color', '#444');
        $('.bot').css('background-color', '#444');
        $('.tdl').css('background-color', '#333');
        $('.tdl2').css('background-color', '#333');
        $('.tdl3').css('background-color', '#333');
        $('.alram').css('background-color', '#444');
        $('.alram').css('box-shadow', '1px 2px 6px #333');
        $('.alram li').css('border-bottom', '0.3px solid #fff');
        $('#esc').css('border-bottom', 'none');
        $('#mg').css('color', '#fff');
        $('.moon').toggleClass('fan fa-sun');


    })


});
