import {isValidAddressType} from "~/utils/GeneralUtils";
import {assert} from "@vueuse/shared";
import {isNotBlank} from "~/utils/GeneralUtils";
import type {FormError} from "#ui/types";


class AddressModal implements Address{
    id!: number;
    name!: string;
    phone!: Phone;
    area!: string;
    city!: string;
    locality!: string
    landmark!: string;
    state!: string;
    country!: string
    zipcode!: string;
    alternatePhone!: Phone;
    addressType!: AddressType;
    referer!: string;

    constructor() {
    }

    static builder() {
        return new AddressModalBuilder();
    }

    getAdministrativeAddress() {
        return `${this.city}, ${this.state}, ${this.country} - ${this.zipcode}`
    }

    toAddress(): Address {
        return {
            id: this.id, name: this.name, phone: this.phone, area: this.area, city: this.city,
            locality: this.locality, landmark: this.landmark, state: this.state, country: this.country,
            zipcode: this.zipcode, alternatePhone: this.alternatePhone, addressType: this.addressType, referer: this.referer
        }
    }
}


class AddressModalBuilder {
    private readonly modal: AddressModal;

    constructor() {
        this.modal = new AddressModal();
    }

    id(value: number): AddressModalBuilder {
        this.modal.id = value;
        return this;
    }

    name(value: string): AddressModalBuilder {
        this.modal.name = value;
        return this;
    }

    phone(value: Phone): AddressModalBuilder {
        this.modal.phone = value;
        return this;
    }

    locality(value: string): AddressModalBuilder {
        this.modal.locality = value;
        return this;
    }

    area(value: string): AddressModalBuilder {
        this.modal.area = value;
        return this;
    }

    city(value: string): AddressModalBuilder {
        this.modal.city = value;
        return this;
    }

    landmark(value: string): AddressModalBuilder {
        this.modal.landmark = value;
        return this;
    }

    state(value: string): AddressModalBuilder {
        this.modal.state = value;
        return this;
    }

    country(value: string): AddressModalBuilder {
        this.modal.country = value;
        return this;
    }

    zipcode(value: string): AddressModalBuilder {
        this.modal.zipcode = value;
        return this;
    }

    alternatePhone(value: Phone): AddressModalBuilder {
        this.modal.alternatePhone = value;
        return this;
    }

    addressType(value: string): AddressModalBuilder {
        if(!isValidAddressType(value)) throw new Error(`Not a valid address type: ${value}`)
        this.modal.addressType = value as AddressType;
        return this;
    }

    referer(value: string): AddressModalBuilder {
        this.modal.referer = value;
        return this;
    }

    fromAddress(address: Address): AddressModalBuilder {
        this.id(address.id)
            .name(address.name)
            .phone(address.phone)
            .locality(address.locality)
            .area(address.area)
            .city(address.city)
            .state(address.state)
            .country(address.country)
            .zipcode(address.zipcode)
            .alternatePhone(address.alternatePhone)
            .landmark(address.landmark)
            .addressType(address.addressType)
            .referer(address.referer);

        return this;
    }

    build(): AddressModal {
        assert(isNotBlank(this.modal.name), "Name is required in address.");
        assert(isNotBlank(this.modal.phone.number), "Phone number is required in address.")
        assert(isNotBlank(this.modal.zipcode), "Zipcode is required in address.")
        assert(isNotBlank(this.modal.locality), "Locality is required in address.")
        assert(isNotBlank(this.modal.area), "Area is required in address.")
        assert(isNotBlank(this.modal.city), "City is required in address.")
        assert(isNotBlank(this.modal.state), "State is required in address.")
        assert(isNotBlank(this.modal.country), "Country is required in address.")
        assert(isNotBlank(this.modal.addressType), "Address Type is required in address.")

        return this.modal;
    }
}

const validateAddress = (address: Address) => {
    const errors: FormError[] = [];

    if(!isNotBlank(address.name)) errors.push({path: 'name', message: 'Name is required'})
    if(!isNotBlank(address.phone.number)) errors.push({path: 'phone', message: 'Phone is required'})
    if(!isNotBlank(address.zipcode)) errors.push({path: 'zipcode', message: 'Zipcode is required'})
    if(!isNotBlank(address.locality)) errors.push({path: 'locality', message: 'Locality is required'})
    if(!isNotBlank(address.area)) errors.push({path: 'area', message: 'Area is required'})
    if(!isNotBlank(address.city)) errors.push({path: 'city', message: 'City is required'})
    if(!isNotBlank(address.state)) errors.push({path: 'state', message: 'State is required'})
    if(!isNotBlank(address.country)) errors.push({path: 'country', message: 'Country is required'})
    if(!isNotBlank(address.addressType)) errors.push({path: 'addressType', message: 'Address Type is required'})

    return errors;
}

const getLocalAddress = (address: Address) => {
    return `${address.area}, ${address.locality}, ${address.state}, ${address.country} - ${address.zipcode}`
}

export {AddressModal, AddressModalBuilder, validateAddress, getLocalAddress}