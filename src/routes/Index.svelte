<script>
    import Layout from './__layout.svelte';
    import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    import { userDetails } from '../stores/userStore';
    import { replace } from 'svelte-spa-router';

    // Initialize the auth getter function
    const auth = getAuth();

    // Function to handle user sign in
    function handleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(({user}) => {
            // Add newly signed user details to the user store
            console.log('Sign in');
            $userDetails = {
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }
            replace('/home');
        })
        .catch(err => console.log(err));
    }
</script>

<Layout>
    <!-- Title -->
    <section class="px-2">
        <h1 class="font-bold text-center text-3xl py-16 md:text-6xl dark:text-white">
            CloudChat - Custom Chatrooms For Amazing Conversations.
        </h1>
        <!-- Description -->
        <p class="text-gray-900 text-base pb-8 md:text-xl md:text-center dark:text-gray-50">
            CloudChat allows users to create custom chatrooms to have amazing conversations with 
            people online. Share your stories, make new friends and have a great time.
        </p>
        <!-- Sign in button -->
        <div class="text-center">
            <button 
                class="bg-purple-600 text-white text-sm px-8 py-2 border-2 border-purple-600 rounded-md
                hover:bg-white hover:text-black 
                dark:hover:bg-gray-900 dark:hover:text-white
                duration-200"
                on:click={handleSignIn}
            >
                Sign in with Google
            </button>
        </div>
    </section>
</Layout>