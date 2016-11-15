<script>
import Vue from 'vue'
import datetime from './components/datetime'

var app = new Vue({
  el: '#app',
  template:`<div>
  				<date :message="message"></date>
  			</div>`,

  data: {
    message: "create by ybb",
  },
})
</script>