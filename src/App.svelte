<script>
	import Router from 'svelte-spa-router';
	import Index from './routes/Index.svelte';
	import Home from './routes/Home.svelte';
	
	// Add firebase to the app
	import { initializeApp } from "firebase/app";

	// Your web app's Firebase configuration
	const firebaseConfig = {
		// apiKey: "",
		// authDomain: "",
		// projectId: "",
		// storageBucket: "",
		// messagingSenderId: "",
		// appId: ""
	};

	// Initialize Firebase
	initializeApp(firebaseConfig);

	// All available routes for the app
	const routes = {
		'/': Index,
		'/home': Home,
	};
</script>

<Router routes={routes} />