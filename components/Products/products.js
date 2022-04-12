class Products {
    handleSetLocationStorage(el, id) {
        const {mood, product} = localStorageUtil.putProducts(id);
        if(mood) {
            el.classList.add('gitar_info__add_active')
            el.classList.remove('gitar_info__add')
            el.innerHTML = 'В корзине'
        } else {
            el.classList.remove('gitar_info__add_active')
            el.classList.add('gitar_info__add')
            el.innerHTML = 'Добавить'
        }
        header.render(product.length)
        
    }
    render() {
        const korzinaCount = localStorageUtil.getProducts()
        let htmlCatalog = '';
        CATALOG.forEach(el => {
            let activeClass = '';
            let activeText = '';

            if(korzinaCount.includes(el.id)) {
                activeText = 'В корзине';
                activeClass = 'gitar_info__add_active'
            } else {
                activeText = 'Добавить';
                activeClass = 'gitar_info__add'
            }

            htmlCatalog += `
                    <div class="gitar_block">
                        <div class="gitar_info">
                            <img class="gitar_info__img" src="${el.img}"/>
                            <div class="gitar_info__name">${el.name}</div>
                            <div class="${activeClass}" onclick="products.handleSetLocationStorage(this, '${el.id}')">${activeText}</div>
                            <div class="gitar_info__price">${el.price.toLocaleString()} p.</div>
                        </div>
                    </div>
            `;
        })
        const html = `
            <div class="products_container">
                ${htmlCatalog}
            </div>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
};

const products = new Products();

// products.render()