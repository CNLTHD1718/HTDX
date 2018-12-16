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
			path: '/App1',
			name: 'App1',
			component: App1,
			meta: { requiresAuth: true, App1Auth: true }
		},
		{
			path: '/App2',
			name: 'App2',
			component: App2,
			meta: { requiresAuth: true, App2Auth: true }
		},
		{
			path: '/App3',
			name: 'App3',
			component: App3,
			meta: { requiresAuth: true, App3Auth: true }
		},
		{
			path: '*',
			redirect: { name: 'not found' }
		}
	]
});

export default router;
