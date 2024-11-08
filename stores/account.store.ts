import {defineStore} from 'pinia';
import {ref} from 'vue';
import {AddressModal} from "~/modals/address.modal";
import type {AccountModal} from "~/modals/account.modal";


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

    const deleteAddress = (id: number) => {
        addresses.value = addresses.value.filter(address => address.id !== id);
    }

    const generateAddressIndex = () => {
        let current = 0;
        addresses.value.forEach(address => {
            if(current < address.id) {
                current = address.id;
            }
        });

        return current + 1;
    }


    return {account, addresses, fetchAccount, fetchAddresses, addAddress, deleteAddress, generateAddressIndex}

})