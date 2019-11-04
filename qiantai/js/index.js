$(function(){

    // 动态调节当前选择的样式
    $("#zhiwei").on("click","li",function(){
        $("#zhiwei ul > li").removeClass('current');
        $(this).addClass('current');
    })

    $("#zhiwei ul > li:nth-child(2)").trigger('click');

    // 动态调节当前选择的样式
    $("#didian").on("click","li",function(){
        $("#didian ul > li").removeClass('current');
        $(this).addClass('current');
    })

    $("#didian ul > li:nth-child(2)").trigger('click');

    // 动态调节当前选择的样式
    $("#fuli").on("click","li",function(){
        $("#fuli ul > li").removeClass('current');
        $(this).addClass('current');
    })

    $("#fuli ul > li:nth-child(2)").trigger('click');

    // 动态调节模态框中span的样式
    $("#baomingModal form .buttons_sex").on("click","span",function(){
        $("#baomingModal form .buttons_sex > span").removeClass("current");
        $(this).addClass("current");
    })

    $("#baomingModal form .buttons_sex > span:first-child").trigger("click");

    var baseURL = "http://203.195.246.58:7777";

    // function区

    // 向职业框加入数据
    function initData_zhiye(){
        var url = "/JobType/findAll";

        $.get(baseURL + url, function(result){
            result.data.forEach(function(item){
                var Li = (`
                    <li>
                        <div class="yiji" value = "`+item.id+`">`+item.name+`</div>
                        <div class="erji">
                            <ul class="erji_ul shadow">
                                
                            </ul>
                        </div>
                    </li>
                `);

                $("#zhiwei > ul").append(Li);
            })
        })
    }

    // 向地点框加入数据
    function initData_didian(){
        var url = "/Province/findAll";

        $.get(baseURL + url, function(result){
            result.data.forEach(function(item){
                var Li = (`
                    <li>
                        <div class="yiji" value = "`+item.id+`">`+item.name+`</div>
                        <div class="erji">
                            <ul class="erji_ul shadow">
                                
                            </ul>
                        </div>
                    </li>
                `);

                $("#didian > ul").append(Li);
            })
        })
    }

    // 向福利框加入数据
    function initData_fuli(){
        var url = "/Welfare/findAll";

        $.get(baseURL + url, function(result){
            result.data.forEach(function(item){
                var Li = (`
                    <li>
                        <div class="yiji">`+item.name+`</div>
                        <div class="erji">
                            <ul class="erji_ul shadow">
                                
                            </ul>
                        </div>
                    </li>
                `);

                $("#fuli > ul").append(Li);
            })
        })
    }

    // .funciton区

    // js区
    initData_zhiye();
    initData_fuli();
    initData_didian()
    // 点击报名参加弹出模态框
    $(".gongzuo > .wrapper > .information").on("click","button",function(){
        if(this.className == "btn btn-primary"){
            $("#baomingModal").modal('show');
        }
    })

    // 点击×或close关闭模态框
    $("#baomingModal .close").click(function(){
        $("#baomingModal").modal('hide');
    })

    $("#btn_close").click(function(){
        $("#baomingModal").modal('hide');
    })

    // 点击取消关闭模态框
    $("#btn_close").click(function(){
        $("#baomingModal").modal('hide');
    })

    // 向职业框加入数据
    // function initData_zhiye(){
    //     var url = "/JobType/findAll";

    //     $.get(baseURL + url, function(result){
    //         result.data.forEach(function(item){
    //             var Li = (`
    //                 <li>
    //                     <div class="yiji" value = "`+item.id+`">`+item.name+`</div>
    //                     <div class="erji">
    //                         <ul class="erji_ul shadow">
                                
    //                         </ul>
    //                     </div>
    //                 </li>
    //             `);

    //             $("#zhiwei > ul").append(Li);
    //         })
    //     })
    // }

    // 鼠标放到职位一级导航显示二级导航并获取数据
    $("#zhiwei > ul").on("mouseenter","li",function(result){
        var id = $(this).find("div.yiji").attr("value");
        $("#zhiwei > ul > li > div.erji > ul").empty();
        var url = "/Jobs/findAll";
        $.get(baseURL + url, function(result){
            result.data.forEach(function(item){
                if(item.jobTypeId == id){
                    var newLi = (`
                        <li value = "`+item.id+`">`+item.name+`</li>
                    `);

                    $("#zhiwei > ul > li > div.erji > ul").append(newLi);
                }
            })
        });
    })


    // 鼠标放到省份一级导航显示二级导航并获取数据
    $("#didian > ul").on("mouseenter","li",function(result){
        var id = $(this).find("div.yiji").attr("value");
        $("#didian > ul > li > div.erji > ul").empty();
        var url = "/City/findAll";
        $.get(baseURL + url, function(result){
            result.data.forEach(function(item){
                if(item.provinceId == id){
                    var newLi = (`
                        <li value = "`+item.id+`">`+item.name+`</li>
                    `);

                    $("#didian > ul > li > div.erji > ul").append(newLi);
                }
            })
        });
    })
    // JS区
    
})

