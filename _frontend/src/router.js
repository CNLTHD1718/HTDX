import Vue from 'vue';
import Router from 'vue-router';
import App1 from './views/App1.vue';
import App2 from './views/App2.vue';
import App3 from './views/App3.vue';
import App4 from './views/App4.vue';
import Home from './views/Home.vue';
import Login from './views/auth/Login.vue';

Vue.use(Router);

var router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		}
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '*',
			redirect: { name: 'not found' }
		}
	]
});

export default router;
