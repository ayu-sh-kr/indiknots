
export class ProductDTO implements ModalDTO<any>{
    id: number;
    name: string;
    description: string;
    category: ProductCategory;
    shape: ProductShape;
    material: ProductMaterial;
    technique: ProductTechnique;
    isAnimalFriendly: boolean;

    constructor(
        id: number,
        name: string,
        description: string,
        category: ProductCategory,
        shape: ProductShape,
        material: ProductMaterial,
        technique: ProductTechnique,
        isAnimalFriendly: boolean,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.shape = shape;
        this.material = material;
        this.technique = technique;
        this.isAnimalFriendly = isAnimalFriendly;
    }

    toEntity(): any {
        throw new Error("toEntity method not implemented.");
    }

    static convert(data: any): ProductDTO {
        return new ProductDTO(
            data.id,
            data.name,
            data.description,
            data.category,
            data.shape,
            data.material,
            data.technique,
            data.isAnimalFriendly
        );
    }
}