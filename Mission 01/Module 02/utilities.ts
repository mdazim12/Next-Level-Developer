    // Utility Types

    type Product  = {
        id : number;
        name : string;
        price : number;
        stock : number;
        color? : string;
    }

    // type ProductSummary = {
    //     id : number;
    //     name : string;
    //     price : number;
    // }


    type ProductSummary = Pick <Product,'id' | 'name' | 'price'>;

    type ProductWithOutStock = Omit<Product,'stock' | 'color'>

    type ProductWithColor = Required<Product>

    const Product1: ProductWithColor = {
        id : 222,
        name : 'Mouse',
        price : 20,
        stock : 100,
        color : 'black'
    }

    type OptionalType = Partial<Product>

    type ProductReadOnly = Readonly<Product>

    const emptyObj : Record<string,unknown> = {  }

    const product1 = {
        id : 222,
        name : 'Mouse',
        price : 20,
    }










