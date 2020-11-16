//scroll
$(document).ready(function(){
//s

    var $menu = $('aside a');
    var $article = $('.articlelist article');
    var idx = 0;

    $menu.click(function(e){
      e.preventDefault();
      idx = $(this).index();

      $('html,body').animate({
        scrollTop : $article.eq(idx).offset().top
      },500);

      $menu.removeClass('in');
      $(this).addClass('in');

    });

    var bln = false;
    $(window).on('mousewheel',function wheelchange(e){

      if(bln) return;

      if(e.originalEvent.deltaY < 0){
        //up
        if(idx > 0){
          idx--;
          $menu.eq(idx + 1).removeClass('in');
          $menu.eq(idx).addClass('in');
        }
      }else{
        //down
        if(idx < $article.length-1){
          idx++;
          $menu.eq(idx - 1).removeClass('in');
          $menu.eq(idx).addClass('in');
        }        
      }

      $('html,body').animate({
        scrollTop : $article.eq(idx).offset().top
      },500);
      
      bln = true;
      setTimeout(function(){bln=false;},200);
    });

//e
});

//data.xml
$(function(){ 
    //s
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
            
            var imgSrc,name,detail,story,language1,mode,day,web,url1,url2,url3,url4,url5,url6,title1,title2,title3,title4,title5,title6,link1,link2,pdfView,webView,moreload;
            
            function funList(code){
                var mainHeader,mainstory,storymain,dango1,page22,page31,page32,type,btn1,btn2,btn3,btn4,btn5,btn6,pdfLink,webLink,moreBtn = ''

                $(data).find('item').each(function(i){
                    
                    imgSrc = $(this).find('imgSrc').text();
                    name = $(this).find('name').text();
                    detail = $(this).find('detail').text();
                    story = $(this).find('story').text();

                    language1 = $(this).find('language1').text();
                    language2 = $(this).find('language2').text();
                    language3 = $(this).find('language3').text();
                    language4 = $(this).find('language4').text();
                    
                    mode = $(this).find('mode').text();
                    day = $(this).find('day').text();
                    web = $(this).find('web').text();

                    link1 = $(this).find('link1').text();
                    link2 = $(this).find('link2').text();
                    pdfView = $(this).find('pdfView').text();
                    webView = $(this).find('webView').text();
                    moreload = $(this).find('moreload').text();

                    url1 = $(this).find('url1').text();
                    url2 = $(this).find('url2').text();
                    url3 = $(this).find('url3').text();
                    url4 = $(this).find('url4').text();
                    url5 = $(this).find('url5').text();
                    url6 = $(this).find('url6').text();
                    title1 = $(this).find('title1').text();
                    title2 = $(this).find('title2').text();
                    title3 = $(this).find('title3').text();
                    title4 = $(this).find('title4').text();
                    title5 = $(this).find('title5').text();
                    title6 = $(this).find('title6').text();


                    type = $(this).find('type').text();
                    
                    if( code == type){
                        mainstory = "<img src='"+imgSrc+"' alt=''>";  
                                                
                        mainHeader = "<h1>"+name+"</h1>";
                        storymain =  "<p>"+detail+"</p>";

                        page1 = "<p>"+story+"</p>";
                        page22 = "<p>"+mode+"</p>";
                        page31 = "<p>"+day+"</p>";
                        page32 = "<p>"+web+"</p>";

                        
                        dango1 = "<li><img src='"+language1+"' alt=''></li>";
                        dango1 += "<li><img src='"+language2+"' alt=''></li>";
                        dango1 += "<li><img src='"+language3+"' alt=''></li>";
                        dango1 += "<li><img src='"+language4+"' alt=''></li>";

                        btn1 = "<button type = 'button'><a href='"+url1+"' target='_blank'>"+title1+"</a></button>";
                        btn2 = "<button type = 'button'><a href='"+url2+"' target='_blank'>"+title2+"</a></button>";
                        btn3 = "<button type = 'button')'><a href='"+url3+"' target='_blank'>"+title3+"</a></button>";
                        btn4 = "<button type = 'button'><a href='"+url4+"' target='_blank'>"+title4+"</a></button>";
                        btn5 = "<button type = 'button'><a href='"+url5+"' target='_blank'>"+title5+"</a></button>";
                        btn6 = "<button type = 'button'><a href='"+url6+"' target='_blank'>"+title6+"</a></button>";                        

                        pdfLink = "<button type = 'button'><a href='"+link1+"' target='_blank'>"+pdfView+"</a></button>";
                        webLink = "<button type = 'button'><a href='"+link2+"' target='_blank'>"+webView+"</a></button>";
                        moreBtn = "<button type = 'button'><a href='#pjlist'>"+moreload+"</a></button>";
                    }
                   
                    $('.projectmain .projectsub .story h1').html(mainHeader);
                    $('.projectmain .projectsub .story p').html(storymain);

                    $('.projectmain .projectimg').html(mainstory)
                    $('.projectmain .projectsub .btn #more').html(moreBtn);
                    $('.projectmain .projectsub .btn #webview').html(webLink);
                        
                    $('.clickopen .pjstand .projectimg').html(mainstory);
                    $('.clickopen .projectsub .story h1').html(mainHeader);
                    $('.clickopen .projectsub .story p').html(page1);
                    $('.clickopen .projectsub .btn #pdfdown').html(pdfLink);
                    $('.clickopen .projectsub .btn #webview2').html(webLink);
                    
                    $('.clickopen .projectsub .pagebtn #on1').html(btn1);
                    $('.clickopen .projectsub .pagebtn #on2').html(btn2);
                    $('.clickopen .projectsub .pagebtn #on3').html(btn3);
                    $('.clickopen .projectsub .pagebtn #on4').html(btn4);
                    $('.clickopen .projectsub .pagebtn #on5').html(btn5);
                    $('.clickopen .projectsub .pagebtn #on6').html(btn6);

                    $('.clickopen .projectsub .language ul').html(dango1);

                    $('.clickopen .projectsub .datapage .mode p').html(page22);                    
                    $('.clickopen .projectsub .datapage .day p').html(page31);
                    $('.clickopen .projectsub .datapage .web p').html(page32);   
                    
                    $('.projectmain .navigator a, .hiddennav .navigator a').removeClass('on');
                    $(".projectmain .navigator a[href='"+code+"'], .hiddennav .navigator a[href='"+code+"']").addClass('on');
                    
                });
            //
            }
                funList('p01');
                

                $('.projectmain .btn #more').click(function(){                
                    $('.clickopen').css({display:"block"});
                    $('.hiddennav').css({opacity:"1"});
                });
                $('.clickopen .up, aside a').click(function(){
                    $('.clickopen').css({display:"none"});
                    $('.hiddennav').css({opacity:"0"});
                });
                $('.projectmain .navigator a').click(function(){
                  $('.projectmain .projectimg img').css({
                    animation: "moving .8s forwards ease-in-out"
                  });
                });
                   
                $('.projectmain .navigator a,.hiddennav .navigator a').on('click',changePage);

                var idx = 0;
                function changePage(e){
                    e.preventDefault();
                    idx = $(this).index();
                    
                    var type = $(this).attr('href');
                    funList(type);                
                    history.pushState({page:type},'pageHistory','');
                };
    

                $(window).on('popstate',function(){
                    var type;                
                    try{
                        type = history.state.page;
                    }catch{
                        type = 'p01';
                    }
                    funList(type);
                });

            
        //
        }
    });
    //e
})

//pentagon
$(function(){
    //s
        var skills = [
      {   "captions" : [
          "HTML5",
          "CSS3",
          "Javascript",
          "Photoshop",
          "jQuery"
        ],
        "values" : [
          0.90,
          0.90,
          0.75,
          0.80,
          0.70
        ]
      }  
    ];
    
    var canvas = $('canvas');

    var penIndex = 0;
    var valIndex = 0;
    var width = 0;
    var height = 0;
    var penRotate = Math.PI;
    var sides = 5;
    var mode = 2 * Math.PI/sides;
  
    function getXY(i, radius){
        return{
            "x": Math.sin(penRotate + mode * i) * radius * width + width/2,
            "y": Math.cos(penRotate + mode * i) * radius * height + height/2
        };        
    }

    canvas.each(function(index){
      width = $(this).width();
      height = $(this).height();
      var ctx = $(this)[0].getContext('2d');
      ctx.canvas.width = width;
      ctx.canvas.height = height;
      ctx.textAlign="center";
      ctx.font="1.2em Ubuntu";      
      color = "#737373";

      for(var i=0;i<sides;i++){
        ctx.beginPath();
        xy = getXY(i,0.3);
        ctx.strokeStyle = "#4f4f4f";
        ctx.moveTo(width*0.5,height*0.5);
        ctx.lineTo(xy.x,xy.y);
        ctx.setLineDash([2,5]);
        xy = getXY(i+1, 0.3);
        ctx.lineTo(xy.x,xy.y);
        xy = getXY(i,0.36);
        ctx.fillText(skills[penIndex].captions[valIndex],xy.x, xy.y+9);
        valIndex++;
        ctx.closePath();
        ctx.stroke();
      }
      for (var i = 0; i < sides; i++) {
        ctx.beginPath();
        xy = getXY(i, 0.25);
        ctx.strokeStyle = color;
        ctx.lineTo(xy.x, xy.y);
        xy = getXY(i+1, 0.25);
        ctx.lineTo(xy.x, xy.y);
        ctx.closePath();
        ctx.stroke();
        }
      for (var i = 0; i < sides; i++) {
          ctx.beginPath();
          xy = getXY(i, 0.2);
          ctx.strokeStyle = color;
          ctx.lineTo(xy.x, xy.y);
          xy = getXY(i+1, 0.2);
          ctx.lineTo(xy.x, xy.y);
          ctx.closePath();
          ctx.stroke();
        }
      for (var i = 0; i < sides; i++) {
          ctx.beginPath();
          xy = getXY(i, 0.15);
          ctx.strokeStyle = color;
          ctx.lineTo(xy.x, xy.y);
          xy = getXY(i+1, 0.15);
          ctx.lineTo(xy.x, xy.y);
          ctx.closePath();
          ctx.stroke();
        }
      for (var i = 0; i < sides; i++) {
          ctx.beginPath();
          xy = getXY(i, 0.1);
          ctx.strokeStyle = color;
          ctx.lineTo(xy.x, xy.y);
          xy = getXY(i+1, 0.1);
          ctx.lineTo(xy.x, xy.y);
          ctx.closePath();
          ctx.stroke();
        }
        color2();
        function color2(){
          valIndex = 0;
          ctx.beginPath();
          
          ctx.fillStyle = "rgba(203,219,254, 0.5)";
          ctx.strokeStyle = "rgba(225,203,227, 0.6)";
          ctx.lineWidth =0;
          
          var value = skills[penIndex].values[valIndex];
          xy = getXY(i, value * 0.3);
          ctx.moveTo(xy.x,xy.y);

          for (var i = 0; i < sides; i++) {
            xy = getXY(i, value * 0.3);
            ctx.lineTo(xy.x,xy.y);
            valIndex++;
            value = skills[penIndex].values[valIndex];
          }
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
          valIndex = 0; 
        }
  });

    //e
});
//
