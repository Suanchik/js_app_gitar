class LocalStorageUtil {
    constructor() {
        this.keyName = 'products'
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return [];
    }

    putProducts(id) {
        let product = this.getProducts();
        let mood = false;
 
        if(!product.includes(id)) {
            product.push(id);
            mood = true
        } else {
            product.splice(product.indexOf(id), 1)
        }
        localStorage.setItem(this.keyName, JSON.stringify(product));
        return {mood, product}
    }
};

const localStorageUtil = new LocalStorageUtil();

