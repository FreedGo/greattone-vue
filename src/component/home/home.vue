<template>
    <div class="tmpl">
        <div class="swipe-warp">
            <swiper :lists="list"></swiper>
        </div>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-1"><router-link  to="/guangchang">
                    <span class="mui-icon ">
                        <img src="../../images/gc.png" alt="音乐广场">
                    </span>
                    <div class="mui-media-body">音乐广场</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-2"><router-link  to="/huodong">
                    <span class="mui-icon">
                        <img src="../../images/xw.png" alt="音乐资讯">
                    </span>
                    <div class="mui-media-body">音乐资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-3"><router-link  to="/huodong">
                    <span class="mui-icon ">
                        <img src="../../images/zb.png" alt="直播中心">
                    </span>
                    <div class="mui-media-body">直播中心</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-4"><router-link  to="/huodong">
                    <span class="mui-icon ">
                        <img src="../../images/hx.png" alt="直播中心">
                    </span>
                    <div class="mui-media-body">网络海选</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-5"><router-link  to="/huodong">
                    <span class="mui-icon ">
                         <img src="../../images/ls.png" alt="音乐老师">
                    </span>
                    <div class="mui-media-body">音乐老师</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-6"><router-link  to="/huodong">
                    <span class="mui-icon ">
                        <img src="../../images/qh.png" alt="琴行教室">
                    </span>
                    <div class="mui-media-body">琴行教室</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-7"><router-link  to="/huodong">
                    <span class="mui-icon ">
                        <img src="../../images/pp.png" alt="乐器品牌">
                    </span>
                    <div class="mui-media-body">乐器品牌</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-8"><router-link  to="/huodong">
                    <span class="mui-icon ">
                        <img src="../../images/lt.png" alt="声粉论坛">
                    </span>
                    <div class="mui-media-body">声粉论坛</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4 home-page-9"><router-link  to="/huodong">
                    <span class="mui-icon ">
                        <img src="../../images/yp.png" alt="乐谱中心">
                    </span>
                    <div class="mui-media-body">乐谱中心</div></router-link></li>
            </ul>
        </div>

    </div>
</template>

<script>
    import swiper from '../swipe/swiper.vue';
    export default{
        data(){
            return{
                dec:'home',
                list:[]
            }
        },
        created(){
	        this.getHomeLunbo()
        },
        methods:{
		    getHomeLunbo(){
			    var url = 'http://m.greattone.net/e/appapi/';
			    var data = {
				    api:'extend/getAdvList',
				    classid:5
			    };
			    this.$http.post(url,data,{emulateJSON:true}).then(res=>{
					    this.list = res.body.data;
//        			console.log(res.body.data)
				    },res=>{
					    console.log('获取图片失败')
				    }
			    );
		    }
	    },
        components:{
        	swiper
        }

    }
</script>

<style>
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        color: #fff;
        padding: 5px;
    }
    .home-page-1>a{
        background-color: #EF5802!important;
    }
    .home-page-2>a{
        background-color: #E79A12!important;
    }
    .home-page-3>a{
        background-color: #5EA222!important;
    }
    .home-page-4>a{
        background-color: #E70300!important;
    }
    .home-page-5>a{
         background-color: #349B9B!important;
     }
    .home-page-6>a{
          background-color: #CF42A3!important;
      }
    .home-page-7>a{
        background-color: #DBC218!important;
    }
    .home-page-8>a{
        background-color: #7DBD63!important;
    }
    .home-page-9>a{
        background-color: #3999DE!important;
    }



</style>