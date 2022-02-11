<script>
    import Layout from './__layout.svelte';
    import ChatArea from '../lib/chats/ChatArea.svelte';
    import RoomSettings from '../lib/chats/RoomSettings.svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { replace } from 'svelte-spa-router';

    // Initialize the auth getter function
    const auth = getAuth();

    // State to check whether user is in room
    let isInRoom = false;

    // Function to check whether user is in room
    function handleUserInRoom(e) {
        isInRoom = e.detail.isInRoom;
    }

    // Perform redirects if user is not logged in
    onAuthStateChanged(auth, user => {
        if (!user) replace('/');
    });
</script>

<Layout>
    <section class="grid md:grid-cols-4 md:gap-x-4 md:mt-8">
        <div class="md:col-span-3">
            <ChatArea {isInRoom} />
        </div>
        <div class="mt-4 p-2 md:p-0 md:mt-0">
            <RoomSettings on:user-in-room={handleUserInRoom}/>
        </div>
    </section>
</Layout>