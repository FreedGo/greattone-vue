<template>
	<div class="list-warp">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in lists">
				<a class="swipe-link" :href="item.url">
					<img class="swipe-image" :src="item.pic" alt="">
				</a>
			</mt-swipe-item>
		</mt-swipe>
		<ul class="list">
			<li class="list-item" v-for="item in lists">
				<div class="user-info clearfix">
					<div class="userpic">
						<a :href="/e/space/?userid=item.user">
							<img :src="item." alt="">
						</a>
					</div>
					<div class="other-info">
						<div class="name">张三</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export  default {
		data(){
			return{
				msg:'1'
			}
		},
		props:[
			'lists'
		]
	}
</script>
<style>
.user-info{
	display: flex;
	flex-direction:row;
	flex-wrap: nowrap;
	justify-content:flex-start;/*排列在主轴上的对齐方式*/
	/*align-items：center;*/
}
	.userpic{
		/*flex-grow:0;*/
		flex:none;
	}
</style >