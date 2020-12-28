const product = function () {
    return [].reduce.call(arguments, function (res, elem) {
        return res * elem;
    }, this.product);
};

const contextObj = {
    product: 10
}

const getProduct = function (a, b) {
    return product.apply(contextObj, [a, b, 2, 3])
}