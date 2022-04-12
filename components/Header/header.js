class Header {
    handleShopping() {
        shopping.render();
        ROOT_PRODUCTS.classList.add('hide');
        ROOT_SHOPPING.classList.remove('hide');
    }
    render(count) {
        const html = `
        <div class="header_block">
            <h1>Guitar shop</h1>
            <img src="img/shopping-cart.png" class="header__img" onclick="header.handleShopping()"/>
            <div class="header__counter">
                ${count}
            </div>
        </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
};

const header = new Header();
// header.render(localStorageUtil.getProducts().length)
