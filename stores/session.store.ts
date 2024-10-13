import {defineStore} from 'pinia';
import {ref} from 'vue';

const useSessionStore = defineStore('session', () => {
    const session = ref<Session>()

    const createSession = (credentials: Credentials) => {
        /**
         * TODO: Create an API call to generate JWT and Refresh Token
         * TODO: Store the session in the store
         */
    }

    const updateSession = () => {
        /**
         * TODO: Use the refresh token to generate the new Session
         * TODO: Update the old session with new session
         */

    }

    return {session, createSession, updateSession}
})