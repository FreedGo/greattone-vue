<template>
	<div>
		<div class="nav">
			<mt-button size="small" @click.native.prevent="active = 'tab-container1'">热门帖</mt-button>
			<mt-button size="small" @click.native.prevent="active = 'tab-container2'">全站动态</mt-button>
			<mt-button size="small" @click.native.prevent="active = 'tab-container3'">知音动态</mt-button>
		</div>
		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
				<mt-tab-container-item id="tab-container1">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media" v-for="n in list">
							<a :href="'/e/space/?userid=7610'+n.id">
								<img class="mui-media-object mui-pull-left" :src="n.userinfo.userpic" :alt="n.username">
								<div class="mui-media-body">
									{{n.username}}
									<p class='mui-ellipsis'>{{n.userinfo.groupname}} | {{n.userinfo.level.name}} | {{n.newstime}} </p>
								</div>
							</a>
							<div class="mui-card">
								<!--页眉，放置标题-->
								<div class="mui-card-header">
									<div class="mui-media-body" v-if="">
										{{n.title}}
										<p>{{n.smalltext}}</p>
									</div>
								</div>
								<!--内容区-->
								<div class="mui-card-content">
									<a :href="n.titleurl">
										<img class="content-titlepic"  :src="n.titlepic" :alt="n.title">
										<span class="video-pl"></span>
									</a>
								</div>
								<!--页脚，放置补充信息或支持的操作-->
								<div class="mui-card-footer">
									<span class="mui-card-link">点击量：{{n.onclick}}</span>
									<span class="mui-card-link ">评论:{{n.plnum}}</span>
									<!--<span class="mui-card-link">点赞：{{n.onclick}}</span>-->
									<span class="mui-card-link  mui-icon mui-icon-redo"></span>
								</div>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default {
		name   : 'page-tab-container',
		data() {
			return {
				active: 'tab-container1',
				list:'',
				video:true,
			};
		},
		created(){
			this.getList()
		},
		methods: {
			getList(){
				var url  = 'http://m.greattone.net/e/appapi/';
				var data = {
					api      : 'info/list',
					classid  : 1,
					query    : 'isgood',
					pageIndex: 1
				};
				this.$http.post(url, data, {emulateJSON: true}).then(res => {
						this.list = res.body.data;
//        			console.log(res.body.data)
					}, res => {
						console.log('获取图片失败')
					}
				);
			}
		},

	};
</script>

<style lang="css" scoped>
	.content-titlepic{
		width:100%;
		height: auto;
	}

</style>
