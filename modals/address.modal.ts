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
    zipcode!: string;
    alternatePhone!: Phone;
    addressType!: AddressType;
    referer!: string;

    constructor() {
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
            .zipcode(address.zipcode)
            .alternatePhone(address.alternatePhone)
            .landmark(address.landmark)
            .addressType(address.addressType)
            .referer(address.referer);

        return this;
    }

    build(): AddressModal {
        assert(this.modal.name != null, "Name is null");
        assert(this.modal.phone != null, "Phone must not be null")
        assert(this.modal.zipcode != null, "Zipcode must not be null");
        assert(this.modal.area != null, "Area must not be null");
        assert(this.modal.city != null, "City must not be null");
        assert(this.modal.state != null, "State must not be null");
        assert(this.modal.addressType != null, "Address Type must not be null");
        assert(this.modal.referer != null, "Referer id is must");

        return this.modal;
    }
}

export {AddressModal, AddressModalBuilder}