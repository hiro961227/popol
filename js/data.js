$(function(){
//
$(function(){ 
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
            
            var imgSrc,name,detail,story,language1,mode,day,web,url1,url2,url3,url4,url5,url6,title1,title2,title3,title4,title5,title6,link1,link2,pdfView,webView,link3,moreload;
            
            function funList(code){
                var mainHeader,mainstory,storymain,dango1,page21,page22,page31,page32,type,btn1,btn2,btn3,btn4,btn5,btn6,pdfLink,webLink,moreBtn = ''

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
                    link3 = $(this).find('link3').text();
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

                        btn1 = "<button onclick='window.open('"+url1+"')'><span>"+title1+"</span></button>";
                        btn2 = "<button onclick='window.open('"+url2+"')'><span>"+title2+"</span></button>";
                        btn3 = "<button onclick='window.open('"+url3+"')'><span>"+title3+"</span></button>";
                        btn4 = "<button onclick='window.open('"+url4+"')'><span>"+title4+"</span></button>";
                        btn5 = "<button onclick='window.open('"+url5+"')'><span>"+title5+"</span></button>";
                        btn6 = "<button onclick='window.open('"+url6+"')'><span>"+title6+"</span></button>";                        

                        pdfLink = "<button onclick='window.open('"+link1+"')'><span>"+pdfView+"</span></button>";
                        webLink = "<button onclick='window.open('"+link2+"')'><span>"+webView+"</span></button>";
                        moreBtn = "<button onclick='window.open('"+link3+"')'><span>"+moreload+"</span></button>";
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
                    $('.clickopen .projectsub .btn #webview').html(webLink);
                    
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
                    
                    $('aside a').removeClass('in');
                    $("aside a[href='"+code+"']").addClass('in');
                    
                });
            //
            }
            funList('p01');
                
                   
                // $('aside a').on('click',changePage);

                // var idx = 0;
                // //var len = $('aside a').length;
                // function changePage(e){
                //     e.preventDefault();
                //     idx = $(this).index();
                    
                //     var type = $(this).attr('href');
                //     funList(type);                
                //     history.pushState({page:type},'pageHistory','');
                // };
    
                // $(window).on('mousewheel',function(e){
                //     if(!$('.clickpage').hasClass('open')){
                //         if (e.originalEvent.deltaY < 0){
                //             if(idx > 1){
                //                 idx--;
                //                 funList('p0'+idx);
                //             }
                //         }else{
                //             if(idx < len){
                //                 idx++;
                //                 funList('p0'+idx);
                //             }
                //         }
                //     }                
                // });  
            

            $(window).on('popstate',function(){
                var type;                
                try{
                    console.log(type);
                    type = history.state.page;
                }catch{
                    type = 'p01';
                }
                funList(type);
            });

            
        //
        }
    });
})

//
});