<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="txtName">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Phone</label>
        <input type="text" class="form-control" id="txtPhone">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Address</label>
        <input type="text" class="form-control" id="txtAddress">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Note</label>
        <input type="text" class="form-control" id="txtNote">
      </div>
      <button type="button" class="btn btn-primary" @click="AddRequest()">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'HelloWorld',
	msg: 'hi every',
	props: {
		msg: String
	},

	// mounted() {
	//   var self = this;
	//   axios.get('http://localhost:1234/user/all')
	//     .then(res => {
	//       self.list = res.data;
	//     })
	//     .catch(err => {
	//       console.log(err);
	//     })
	// },

	methods: {
		AddRequest() {
			alert('test' + document.getElementById('txtName').value);
			var self = this;
			var objToPost = {
				Name: document.getElementById('txtName').value,
				Address: document.getElementById('txtAddress').value,
				Phone: document.getElementById('txtPhone').value,
				Note: document.getElementById('txtNote').value
			};
			axios
				.post('http://localhost:1234/Request/add', objToPost)
				.then(res => {
					alert('succes ');
				})
				.catch(err => {
					console.log(err);
				});
			// // alert(JSON.stringify(c));
			//self.$emit('userSelected', c);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
