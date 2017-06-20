<template>
	<div class="swipe-warp">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in lists">
				<a class="swipe-link" :href="item.url"><img class="swipe-image" :src="item.pic" alt=""></a>
			</mt-swipe-item>
		</mt-swipe>
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
	.mint-swipe{
		/*height:187.5px;*/
		position: relative;
		padding:0 10px;
		margin-top: 10px;
	}
	.swipe-link{
		display: inline-block;
		width:100%;
		height: auto ;
	}
	.swipe-image{
		width: 100%;
		height: auto;
		display: block;
	}
	.mint-swipe-items-wrap>div{
		height:auto;
	}
	.mint-swipe-items-wrap{
		height: auto;
	}
	.swipe-link{
		display: block;
	}
</style >