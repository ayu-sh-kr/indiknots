import {RestClient} from "@ayu-sh-kr/dota-rest";

export enum EnquiryType {
    GENERAL_INQUIRY = 'General Enquiry',
    PRODUCT_INQUIRY = 'Product Enquiry',
    PRICE_INQUIRY = 'Price Enquiry'
}

export interface ContactFormData {
    name: string | undefined,
    email: string | undefined
    phone: string | undefined,
    inquiry: EnquiryType,
    description?: string
}


export class ConnectService {

    private restClient!: RestClient

    constructor(
        private url: string, private toast: ToastService
    ) {

        this.restClient = RestClient
            .create()
            .baseUrl(url)
            .build();
    }

    async processContactUsForm(formData: ContactFormData) {
        const voidEntity = await this.restClient.get<void>()
            .uri('/connect/v1/contact-us')
            .body(formData)
            .retrieve()
            .toVoid();

        return voidEntity.status === 202;
    }

}