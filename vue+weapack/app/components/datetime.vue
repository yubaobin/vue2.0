<template id="template">
	<div>
		<div>{{time}}</div>
		<div>{{today}}</div>
		<di ><num :count="count"></num></di>
		<span class="message" :style="moveCss" @click="add()">{{message}}</span>
	</div>
</template>

<script>
import Vue from 'vue'
import getToDay from '../util/date'
import num from './num'

export default Vue.component('date',{
	props:['message'],
	data: function(){
		return {
			time : '',
			count:0,
			width:window.innerWidth,
			height:window.innerHeight,
			//移动css
			moveCss: {
				top: '0px',
				left: '0px'
			}
		}
	},
	template: '#template',
	created : function(){
		setInterval(() => {
			let date = new Date();
			let day = date.toLocaleDateString().replace(/\//g,'\-');
			let hour = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			this.time = day + " " + hour + ":" + minutes + ":" + seconds;
		},1000)
		setInterval(() => {
			this.moveCss.left = Math.floor(Math.random()*this.width) + 'px';
			this.moveCss.top = Math.floor(Math.random()*this.height) + 'px';
		},500)
	},
	computed:{
		today: function(){
			return getToDay(new Date().getDay());
		}
	},
	methods: {
		add: function(){
			this.count ++;
		}
	}
})
</script>

<style scoped> 
	.message {
		position: relative;
		transition: all 1s;
		cursor: pointer;
	}
</style>