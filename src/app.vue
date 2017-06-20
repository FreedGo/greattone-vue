<template>
    <div class="app">
        <!--头部-->
        <div class="head-warp">
            <mt-header fixed title=""></mt-header>
        </div>
        <!--/--头部-->

        <router-view></router-view>

        <!--底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-compose"></span>
                <span class="mui-tab-label">我要发帖</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopCar">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">个人中心</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-chat"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">我的消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/huodong">
                <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
                <span class="mui-tab-label">最新活动</span>
            </router-link>
        </nav>
        <!--/--底部-->
    </div>
</template>

<script>
    export default{
        data(){
            return {
                dec:'vue项目一'
            }
        },
        component:{

        }
    }
</script>

<style>
.head-warp{
    height:40px;
}
    .mui-bar-tab .router-link-active{
        color: #CA201D;
    }
    .mui-content{
        padding: 0 5px;
    }
.mui-content>.mui-table-view:first-child{
    margin-top: 10px;
}
</style>