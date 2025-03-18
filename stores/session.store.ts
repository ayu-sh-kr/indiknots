import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {LoginResponse} from "~/domains/security/login.modal";

export const useSessionStore = defineStore('session', () => {
    const session = ref<LoginResponse>()

    const storeCredentials = (loginResponse: LoginResponse) => {
        session.value = loginResponse;
    }

    const updateSession = () => {
        /**
         * TODO: Use the refresh token to generate the new Session
         * TODO: Update the old session with new session
         */
    }

    return {session, createSession: storeCredentials, updateSession}
})

export type SessionStore = ReturnType<typeof useSessionStore>;