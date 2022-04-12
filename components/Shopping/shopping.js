class Shopping {
    showProducts() {
        ROOT_SHOPPING.classList.add('hide');
        ROOT_PRODUCTS.classList.remove('hide');
    }

    deletGuiter(id) {
        const {mood, product} = localStorageUtil.putProducts(id);
        this.render(true);
        products.render();
        header.render(product.length)
    }

    render(hide = false) {
        const korzinaCount = localStorageUtil.getProducts();
        let htmlShopping = '';
        let summ = 0;
        CATALOG.forEach(el => {
            if(korzinaCount.includes(el.id)) {
                htmlShopping += `
                <div class="shopping_list">
                    <div class="img_grid">
                        <img class="img" src="${el.img}" alt="img"/>
                        <div class="price">${el.price.toLocaleString()} p.</div>
                    </div>
                    <div class="info_grid">
                        <div class="iks" onclick="shopping.deletGuiter('${el.id}')">&times;</div>
                        <div>${el.name}</div>
                    </div>
                </div>
            `;
            summ += el.price
            }
        });
        const html = 
        `
            <div class="shopping_block">
                <div class="back_block">
                    <img class="back" src="img/back.png" onclick="shopping.showProducts()" />
                    <span class="summ">
                        сумма 
                        <span class="summNum">
                        ${summ.toLocaleString()} p.
                        <span>
                        <span class="pay">
                            оплатить
                        <span>
                    </span>
                </div>
                ${htmlShopping ? htmlShopping : `<div><img class="img_2" src="img/guitar-playing.png" alt="img"/><div class="none">вы ничего не выбрали</div></div>` }
            </div>
        `
        ROOT_SHOPPING.innerHTML = html;
        if(!hide) {
            ROOT_SHOPPING.classList.add('hide');
        }
    }

}

const shopping = new Shopping();

shopping.render();