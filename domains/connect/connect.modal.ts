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


