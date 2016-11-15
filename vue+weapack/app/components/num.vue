<template id="template">
	<div class="num">{{count}}<transition @enter="enter" @leave="leave"><span class="addNum" v-show="isClick">+1</span></transition></div>
</template>

<script>
import Vue from 'vue'

export default Vue.component('num',{
	props:['count'],
	data: function(){
		return {
			isClick : false
		}
	},
	template: '#template',
	watch: {
		count:function(value,oldvalue){
			this.isClick = true;
		}
	},
	methods: {
		enter: function(el,done){
			this.isClick = false;
		},
		leave: function(){
			this.isClick = false;
		}
	}
})
</script>

<style scoped>
	/*动画 */
	@keyframes changeBig{
		0% {
			visibility: visible;
			transform: scale3d(1,1,1);
			-webikt-transform: scale3d(1,1,1);
		}
		100% {
			transform: translate3d(50%, -30%, 0) scale3d(2,2,2);
			-webikt-transform: translate3d(50%, -30%, 0) scale3d(2,2,2);
			visibility: hidden;
		}
	}

	@-webkit-keyframes changeBig{
		0% {
			visibility: visible;
			transform: scale3d(1,1,1);
			-webikt-transform: scale3d(1,1,1);
		}
		100% {
			transform: translate3d(50%, -30%, 0) scale3d(2,2,2);
			-webikt-transform: translate3d(50%, -30%, 0) scale3d(2,2,2);
			visibility: hidden;
		}
	}

	.num {
		position: absolute;
		left: 50%;
		font-size: 22px;
	}

	.addNum {
		display: inline-block;
		animation: changeBig .4s forwards;
	    -webikt-animation: changeBig .4s forwards;
	}
</style>