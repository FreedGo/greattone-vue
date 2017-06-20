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
					<mt-cell v-for="n in list">
						{{n.title}}
					</mt-cell>
					<ul class="list">
						<li class="list-item" v-for="n in list">
							<div class="user-info">
								<div class="titlepic">
									<a :href="'/e/space/?userid=7610'+n.id">
										<img :src="n.userinfo.userpic" :alt="n.username">
									</a>
								</div>
							</div>
							<div class="tie-info">
								<h3>{{n.username}}</h3><h3>{{n.userinfo.groupname}}</h3><h3>{{n.userinfo.level.name}}</h3>
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
				list:''
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
	ul,li{
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.titlepic{
		width:100px;
		height:100px;
	}
	.titlepic img{
		width:100px;
		height:100px;
	}
	.item {
		display: inline-block;
	}

	.nav {
		padding: 10px;
	}

	.link {
		color: inherit;
		padding: 20px;
		display: block;
	}
</style>
