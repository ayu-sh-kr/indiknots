import {defineStore} from 'pinia';

import type {LoginResponse} from "~/domains/security/login.service";
import {useLocalStorage} from "@vueuse/core";

export const useSessionStore = defineStore('session', () => {
    const session = useLocalStorage<LoginResponse>(
      "credentials", {accessToken: ''}
    );

    const storeCredentials = (loginResponse: LoginResponse) => {
       session.value = loginResponse;
    }

    const getSession = (): LoginResponse => {
      return session.value
    }

    return {session, createSession: storeCredentials, getSession}
})

export type SessionStore = ReturnType<typeof useSessionStore>;