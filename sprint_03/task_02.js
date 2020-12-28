const product = function () {
    return [].reduce.call(arguments, function (res, elem) {
        return res * elem;
    }, this.product);
};

const getProduct = product.bind({ product: 10 }, 2, 3);
