import {isValidAddressType} from "~/utils/GeneralUtils";
import {assert} from "@vueuse/shared";


class AddressModal implements Address{
    id!: string;
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
}


class AddressModalBuilder {
    private readonly modal: AddressModal;

    constructor() {
        this.modal = new AddressModal();
    }

    id(value: string): AddressModalBuilder {
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

export {AddressModal, AddressModalBuilder}