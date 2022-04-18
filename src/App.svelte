<script>
	import Router from 'svelte-spa-router';
	import Index from './routes/Index.svelte';
	import Home from './routes/Home.svelte';
	
	// Add firebase to the app
	import { initializeApp } from "firebase/app";

	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyAn8YfzltEBukcZgrPAuR9Vx7Cig2NSK8g",
  		authDomain: "cloud-chat-52a60.firebaseapp.com",
  		projectId: "cloud-chat-52a60",
  		storageBucket: "cloud-chat-52a60.appspot.com",
  		messagingSenderId: "854328703576",
  		appId: "1:854328703576:web:a20874f6a25670da76a82d"
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