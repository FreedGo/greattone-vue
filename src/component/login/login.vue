<template>
    <div class="tmpl">
        <mt-header title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						自动登录
						<div id="autoLogin" class="mui-switch">
							<div class="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
			</form>
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
				<div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
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



</style>