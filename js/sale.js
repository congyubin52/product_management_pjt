const addEvents = () => {
    console.log('addEvents() CALLED!!!');

    let productOnSaleBtn = document.querySelector('div.menu_wrap a.sign_up');
    productOnSaleBtn.addEventListener('click', function() {
        console.log('productOnSaleBtn CLICKED!!!');
            
        let c_id = document.querySelector('div.c_id');
        let p_no = parseInt(document.querySelector('div.p_no'));
        let s_price = parseInt(document.querySelector('div.s_price'));

        addSale(s_no, c_id, p_no, s_price, now, now);
        console.log(s_no, c_id, p_no, s_price, now, now);
        console.log('addSale SUCESS!!!');

        s_no++;

    });
}


const listTable = () => {

    

    document.querySelector('div.list_view th:first-child').value
}