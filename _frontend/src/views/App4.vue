<template>
  <div class="row">
    <div class="col s4">
      <button @click="logout">log out</button>
      <button @click="vieww">view</button>

    </div>
    <div class="col s4">
    <div class="col s4"  style="margin:0 auto;">

      <button
        id="btnOn"
        >
          Decline<i class="material-icons left">block</i></button>
      </div>
      <div
        class="row"
        id='modelProcess'

	  <div
        class="=row"
      >
        <button
          id='btnStart'
          @click="startRequest"
          class="btn  waves-effect waves-light green  nodpadd"
          class="btn waves-effect waves-light green nodpadd"
          type="button"
          style="height: 50px;"
        >Start</button>
        >
          Start<i class="material-icons left">play_arrow</i></button>
        <button
          id='btnEnd'
          @click="doneRequest"
          class="btn waves-effect waves-light grey  pulse nodpadd"
        >End</button>
          class="btn waves-effect waves-light red nodpadd"
          type="button"
          style="height: 50px;"
        >
          End<i class="material-icons left">block</i></button>
      </div>

    </div>

    <div class="col s4">

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import io from 'socket.io-client';
import haversine from 'haversine';
export default {
			fillColor1: '#0000FF',
			customer_LatLng: {},
			driver: null,
			req_id: null,
			req_for_driver: {},
			socket: io('localhost:1234')
export default {
	mounted() {
		var self = this;
		self.hideComponents();
		// if (localStorage.token_key && localStorage.ref_token && localStorage.uid) {
		// 	axios({
		// 		method: 'post',
@@ export default {
		// At this point, the child GmapMap has been mounted, but
		// its map has not been initialized.
		// Therefore we need to write mapRef.$mapPromise.then(() => ...)
		self.driver = JSON.parse(localStorage.getItem('UserObj'));
		self.$refs.mapRef.$mapPromise
			.then(map => {
				//map.panTo({ lat: 1.38, lng: 103.8 });
@@ export default {
			//respone from server socket
			console.log('respone from server socket');
		});
		self.socket.emit('add-user', { username: localStorage.uid }); //register username to socket server
		var driver = JSON.parse(localStorage.getItem('UserObj'));
		self.socket.emit('add-user', { username: self.driver.Id }); //register username to socket server
		console.log('add user socket')
		console.log(self.driver.Id)
		self.socket.on('driver-receive-new-request', data => {
			var self = this;
			self.customer_LatLng = null;
export default {
	},
	methods: {
		hideComponents() {
			$('#modelRequest').hide();
			$('#modelProcess').hide();
		},
		acceptRequest() {
			$('#modelRequest').fadeOut();
			var self = this;
			$('#modelRequest').fadeOut();
			clearTimeout(self.timeOut);
			console.log('driver accept request');
			console.log(self.req_for_driver);
			self.socket.emit('driver-accept-request', self.req_for_driver);
			self.showDirectionFromDriverToCustomer();			
			self.showDirectionFromDriverToCustomer();
			$('#modelProcess').fadeIn();
		},
		declineRequest() {
			var self = this;
			$('#modelRequest').fadeOut();
			clearTimeout(self.timeOut);
			alert('driver decline request');
		},
		startRequest() {
export default {
			$('#modelRequest').fadeIn();
			self.timeOut = setTimeout(function() {
				self.declineRequest();
			}, 10000);
			}, 5000);
		},
		checc() {
			alert('Your toast was');
export default {
			console.log(this.coordinates);
			console.log(this.center);
		},
		
		updateCoordinates(location) {
			var self = this;
			var center_coordinates = {
export default {
				latitude: location.latLng.lat(),
				longitude: location.latLng.lng()
			};
			M.toast({
				html: 'Changed location success',
				classes: 'light-blue accent-3'
			});
			//console.log(haversine(center_coordinates, new_coordinates, { unit: 'meter' }));
			//console.log(haversine(center_coordinates, new_coordinates, {threshold: 100,unit: 'meter'}));
			//console.log('1center ' +center_coordinates.latitude +',' + center_coordinates.longitude );
export default {
				};
				//alert('Success');
				console.log('change location success');
				var driver = JSON.parse(localStorage.getItem('UserObj'));
				var newReq = {
					Id: 1,
					Id: driver.Id,
					Lat: self.coordinates.lat,
					Lng: self.coordinates.lng
				};