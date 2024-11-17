declare module '*.svg' {
    const content: any;
    export default content;
}

declare type ProductSize = {
    length: number,
    width: number,
    unit: string,
    stock: ProductStock
}

declare interface ProductPrice {
    size: ProductSize;
    value: number;
    sale_percentage: number
    price_type: ProductPriceType
}

declare interface ProductImage {
    url: string,
    text: string
}

declare type ProductMaterial = "WOOL" | "VISCOSE" | "SILK" | "JUTE" | "PET" | "BOMBOO_SILK" | "TENCIL" | "OTHER";
declare type ProductCategory = "TRADITIONAL" | "MODERN" | "ABSTRACT" | "GEOMETRIC" | "FLORAL" | "UNSHAPED" | "DHURRIES" | "PLAYROOM" | "DESIGNER" | "CUSHION&PILLOW" | "ACCESSORIES";
declare type ProductPriceType = "MERCHANT" | "CUSTOMER";
declare type ProductShape = "ROUNDED" | "RECTANGLE" | "SQUARE" | "RUNNER" | "UNSHAPED" | "OTHER";
declare type ProductTechnique = "HAND_KNOTTED" | "HAND_TUFTED" | "HAND_LOOMED" | "FLAT_WEAVE" | "PATCH_WORK" | "SHAGGY" | "OTHER";
declare type ProductStockStatus = "SOLD_OUT" | "AVAILABLE";


declare interface Product {
    id: string;
    name: string;
    img: ProductImage[];
    description: string;
    category: ProductCategory;
    color: string;
    shape: ProductShape;
    material: ProductMaterial;
    technique: ProductTechnique;
    prices: ProductPrice[];
    sale: boolean;
    animal_friendly: boolean;
}

const schema = {
    "id": "",
    "name": "",
    "category": ["TRADITIONAL", "MODERN", "ABSTRACT", "GEOMETRIC", "FLORAL", "UNSHAPED", "DHURRIES", "PLAYROOM", "DESIGNER", "CUSHION&PILLOW", "ACCESSORIES"],
    "size": [
        {
            "length": "",
            "width": "",
            "unit": ""
        }
    ],
    "color": "",
    "material": ["WOOL", "VISCOSE", "SILK", "JUTE", "PET", "BOMBOO_SILK", "TENCIL", "OTHER"],
    "technique": ["HAND_KNOTTED", "HAND_TUFTED", "HAND_LOOMED", "FLAT_WEAVE", "PATCH_WORK", "SHAGGY", "OTHER"],
    "rug_type": ["INDOOR", "OUTDOOR"],
    "shape": ["ROUNDED", "RECTANGLE", "SQUARE", "RUNNER", "UNSHAPED", "OTHER"],
    "price": [
        {
            "size": {
                "length": "",
                "width": "",
                "unit": ""
            },
            "price": "",
            "sale_percentage": "",
            "type": ["Merchant", "Customer"]
        }
    ],
    "sale": true,
    "stock": {
        "value": "false",
        "quantity": 0
    },
    "animal_friendly": ""
}

declare type InputState = "ERROR" | "DEFAULT" | "SUCCESS";

declare interface CartItem {
    productId: string
    quantity: number
    size: ProductSize
    color: string
    price: ProductPrice
}

declare type ProductSizeOption = {
    label: String,
    value: ProductSize
}

declare type ProductStock = {
    status: ProductStockStatus,
    quantity: number
}

declare type ProductSort = "Alphabetical" | "Alphabetical-Reverse" | "Price - High to Low" | "Price - Low to High" | "Stock" | "None"

declare type ProductFilter = {
    material: ProductMaterial[],
    category: ProductCategory[],
    technique: ProductTechnique[],
    price: PrizeFilter,
    filterType: FilterType
}

declare type PrizeFilter = {
    value: number,
    range: RangeType
}

declare type FilterType = "UNION" | "INTERSECTION";

declare type NONE = "NONE";

declare type RangeType = "OFF-Range" | "IN-Range";

declare type Gender = "Male" | "Female" | "Other";

declare interface Phone {
    code: string,
    number: string
}

declare interface Account {
    id: string
    firstName: string,
    middleName?: string  ,
    lastName: string,
    email: string,
    gender: Gender,
    phone: Phone,
    accountType: AccountType
}

declare type AddressType = "Home" | "Work";

declare interface Address {
    id: number,
    name: string,
    phone: Phone,
    zipcode: string,
    locality: string
    area: string,
    city: string,
    state: string,
    country: string,
    landmark: string
    alternatePhone: Phone,
    addressType: AddressType,
    referer: string
}

declare type AccountType = "MERCHANT" | "USER"

declare interface Session {
    id: string,
    jwt: string,
    refreshToken: string
}

declare interface Credentials {
    email: string,
    password: string
}

declare interface Nav {
    label: string,
    to: string
}
