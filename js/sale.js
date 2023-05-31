const addEvents = () => {
    console.log('addEvents() CALLED!!!');

    let productOnSaleBtn = document.querySelector('.s_reg_btn');
    productOnSaleBtn.addEventListener('click', function() {
        console.log('productOnSaleBtn CLICKED!!!');
            
        let c_id = parseInt(document.querySelector('div.c_id'));
        let p_no = parseInt(document.querySelector('div.p_no'));
        let s_price = parseInt(document.querySelector('div.s_price'));

        addSale(s_no, c_id, p_no, s_price, now, now);
        console.log(s_no, c_id, p_no, s_price, now, now);
        console.log('addSale SUCESS!!!');

        s_no++;
        listView.style.display = "block";
        listTable();

    });
}


const listTable = () => {
    let i = 0;

    while (i < s_no ) {
        let sale = searchSale(i);
        let customer = searchCustomer(sale[1]);
        let product = searchProduct(sale[2]);
        // let manufacture = searchManufacture(product[1]);
        console.log(product[1]);

        // document.querySelector('div.list_view tbody td:first-child').textContent = customer[0];
        // document.querySelector('div.list_view tbody td:nth-child(2)').textContent = customer[1];
        // document.querySelector('div.list_view tbody td:nth-child(3)').textContent = customer[2];
        // document.querySelector('div.list_view tbody td:nth-child(4)').textContent = customer[3];
        // document.querySelector('div.list_view tbody td:nth-child(5)').textContent = customer[4];
        // document.querySelector('div.list_view tbody td:nth-child(6)').textContent = product[0];
        // document.querySelector('div.list_view tbody td:nth-child(7)').textContent = product[1];
        // document.querySelector('div.list_view tbody td:nth-child(8)').textContent = product[2];
        // document.querySelector('div.list_view tbody td:nth-child(9)').textContent = product[3];
        // document.querySelector('div.list_view tbody td:nth-child(10)').textContent = product[4];
        // document.querySelector('div.list_view tbody td:nth-child(11)').textContent = manufacture[0];
        // document.querySelector('div.list_view tbody td:nth-child(12)').textContent = manufacture[1];
        // document.querySelector('div.list_view tbody td:nth-child(13)').textContent = manufacture[2];
        // document.querySelector('div.list_view tbody td:nth-child(14)').textContent = manufacture[3];
        // document.querySelector('div.list_view tbody td:nth-child(15)').textContent = manufacture[4];
        // document.querySelector('div.list_view tbody td:nth-child(16)').textContent = manufacture[5];
        // document.querySelector('div.list_view tbody td:nth-child(17)').textContent = sale[0];
        // document.querySelector('div.list_view tbody td:nth-child(18)').textContent = sale[3];
        // document.querySelector('div.list_view tbody td:nth-child(19)').textContent = sale[4];


        i++;

    }

    
}