import {isEmail, isValidAccountType, isValidGender} from "~/utils/GeneralUtils";
import {assert} from "@vueuse/shared";

class AccountModal implements Account{
    id!: string;
    firstName!: string;
    middleName?: string;
    lastName!: string;
    email!: string;
    gender!: Gender;
    phone!: Phone;
    accountType!: AccountType;

    constructor() {
    }

}


class AccountModalBuilder {
    private readonly modal!: AccountModal;

    constructor() {
        this.modal = new AccountModal();
    }

    id(value: string) {
        this.modal.id = value
        return this;
    }

    firstName(value: string) {
        this.modal.firstName = value;
        return this;
    }

    middleName(value?: string) {
        this.modal.middleName = value;
        return this;
    }

    lastName(value: string) {
        this.modal.lastName = value;
        return this;
    }

    email(value: string) {
        if (!isEmail(value)) throw new Error(`Not a valid email: ${value}`)
        this.modal.email = value;
        return this;
    }

    phone(value: Phone) {
        this.modal.phone = value;
        return this
    }

    gender(value: string) {
        if (!isValidGender(value)) throw new Error(`Not a valid gender: ${value}`);
        this.modal.gender = value as Gender;
        return this;
    }

    accountType(value: string) {
        if(!isValidAccountType(value)) throw new Error(`Not a valid account type: ${value}`)
        this.modal.accountType = value as AccountType;
        return this
    }

    fromAccount(account: Account) {
        this.id(account.id)
            .firstName(account.firstName)
            .middleName(account.middleName)
            .lastName(account.lastName)
            .phone(account.phone)
            .email(account.email)
            .gender(account.gender)
            .accountType(account.accountType);

        return this;
    }

    build() {
        if(!this.modal.firstName && ! this.modal.lastName && !this.modal.email && !this.modal.phone && !this.modal.gender) {
            throw new Error("Incomplete details to create Account Modal");
        }

        assert(!this.modal.firstName, "First name must not be null");
        assert(!this.modal.lastName, "Last name must not be null");
        assert(!this.modal.phone, "Phone Number must not be null");
        assert(!this.modal.email, "Email must not be null");
        assert(!this.modal.gender, "Gender must not be null");
        assert(!this.modal.accountType, "Account type must not be null")

        return this.modal;
    }
}

export {AccountModal, AccountModalBuilder}



