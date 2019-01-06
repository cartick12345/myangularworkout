export class ProductsServices {

    products:any[] = [{ productCode: 111, productName: "sony" },
    { productCode: 222, productName: "lg" }];

    displayArray = [];
    addProduct(a, b) {
        var newObj = { productCode: a, productName: b };
        this.products.push(newObj);
        return this.products;
    }
    viewProduct() {
        return this.products;
        
    }
    editProduct(i){
       var newEditObj = {productCode:this.products[i].productCode, productName:this.products[i].productName,ival :i} ;
       //console.log(newEditObj);
       return newEditObj;
    }
    updateProduct(a,b,c){
            var updateObj = {productCode : a,productName : b};
            this.products.splice(c,1);
            this.products.splice(c,0,updateObj);
            return this.products;
    }
    productSearch(c) {
        this.displayArray = [];
        var l = this.products.length;
        for (var i = 0; i < l; i++) {
            if (this.products[i].productName.startsWith(c)) {
                this.displayArray.push(this.products[i]);
                //console.log(displayArray);
            }
        }
        return this.displayArray;
        /* return this.products.filter(x=> {
             return x.productName.toLowerCase().startsWith(c);});*/
    }
    deleteProduct(i) {
        this.products.splice(i, 1);
        return this.products;
    }
}