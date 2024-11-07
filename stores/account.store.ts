import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {AccountModal} from "~/modals/account.modal";
import type {AddressModal} from "~/modals/address.modal";


export const useAccountStore = defineStore('account', () => {

    const account = ref<AccountModal>();

    const addresses = ref<AddressModal[]>([]);

    const fetchAccount = (session: Session) => {
        /**
         * TODO: Use the session to fetch the account details
         * TODO: Update the account details in the store
         */
    }

    const fetchAddresses = (session: Session) => {
        /**
         * TODO: Use the session to fetch the address associated with account
         * TODO: Update the addresses in the store
         */
    }

    const addAddress = (address: AddressModal) => {
        addresses.value.push(address);
    }


    return {account, addresses, fetchAccount, fetchAddresses, addAddress}

})