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

    const fetchAddresses = async (session?: Session) => {
        /**
         * TODO: Use the session to fetch the address associated with account
         * TODO: Update the addresses in the store
         */
        const response = await fetch('/data/address.json');
        if (response.status === 200) {
            const result = await response.json() as Address[];
            addresses.value = result.map(address => {
                return AddressModal.builder().fromAddress(address).build();
            })
        }
    }

    const existsById = (id: number) => {
        return addresses.value.some(address => address.id === id)
    }

    const createAddress = (address: AddressModal) => {
        console.log(`Id during create: ${address.id}`)
        addresses.value.push(address);
    }


    const saveAddress = (address: AddressModal) => {
        console.log(`Id during save: ${address.id}`)
        if(existsById(address.id)) {
            updateAddress(address)
        } else {
            createAddress(address)
        }
    }

    const updateAddress = (newAddress: AddressModal) => {
        console.log(`Id during update: ${newAddress.id}`)
        const index = addresses.value.findIndex(address => address.id === newAddress.id);
        if(index !== -1) {
            addresses.value.splice(index, 1, newAddress);
        }
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


    return {account, addresses, fetchAccount, fetchAddresses, saveAddress, deleteAddress, generateAddressIndex}

})