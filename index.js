const render = () => {
    products.render()
    header.render(localStorageUtil.getProducts().length)
};

render();

