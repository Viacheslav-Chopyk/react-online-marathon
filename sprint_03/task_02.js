// The product() function finds the product of an arbitrary number of arguments. 
// You must specify the desired execution context for the product() function by implementing a new getProduct() function bound to the context of the object, 
// which takes 2 additional arguments.


const product = function () {
    return [].reduce.call(arguments, function (res, elem) {
        return res * elem;
    }, this.product);
};

const getProduct = product.bind({ product: 10 }, 2, 3);
