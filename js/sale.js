const addEvents = () => {
  console.log("addEvents() CALLED!!!");

  let productOnSaleBtn = document.querySelector(".s_reg_btn");
  productOnSaleBtn.addEventListener("click", function () {
    console.log("productOnSaleBtn CLICKED!!!");

    let c_id = parseInt(document.querySelector("div.c_id input").value);
    let p_no = parseInt(document.querySelector("div.p_no input").value);
    let s_price = parseInt(document.querySelector("div.s_price input").value);

    addSale(s_no, c_id, p_no, s_price, now, now);
    console.log(s_no, c_id, p_no, s_price, now, now);
    console.log("addSale SUCESS!!!");

    s_no++;
    listView.style.display = "block";
    listTable();
  });
};

const listTable = () => {
  let i = 0;

  let sale = searchSale();
  //   console.log(product[1]);
  saleDB.forEach(function (key, value) {
    let sale = key;
    let customer = searchCustomer(sale.c_id);
    let product = searchProduct(sale.p_no);
    let manufacture = searchManufacture(product.m_no);

    document.querySelector("div.list_view tbody td:first-child").textContent =
      customer.c_id;
    document.querySelector("div.list_view tbody td:nth-child(2)").textContent =
      customer.c_name;
    document.querySelector("div.list_view tbody td:nth-child(3)").textContent =
      customer.c_mail;
    document.querySelector("div.list_view tbody td:nth-child(4)").textContent =
      customer.c_phone;
    document.querySelector("div.list_view tbody td:nth-child(5)").textContent =
      customer.c_regDate;
    document.querySelector("div.list_view tbody td:nth-child(6)").textContent =
      product.p_no;
    document.querySelector("div.list_view tbody td:nth-child(7)").textContent =
      product.p_name;
    document.querySelector("div.list_view tbody td:nth-child(8)").textContent =
      product.p_price;
    document.querySelector("div.list_view tbody td:nth-child(9)").textContent =
      product.p_quantity;
    document.querySelector("div.list_view tbody td:nth-child(10)").textContent =
      product.p_reg_date;
    document.querySelector("div.list_view tbody td:nth-child(11)").textContent =
      manufacture.m_no;
    document.querySelector("div.list_view tbody td:nth-child(12)").textContent =
      manufacture.m_name;
    document.querySelector("div.list_view tbody td:nth-child(13)").textContent =
      manufacture.m_address;
    document.querySelector("div.list_view tbody td:nth-child(14)").textContent =
      manufacture.m_phone;
    document.querySelector("div.list_view tbody td:nth-child(15)").textContent =
      manufacture.m_manager;
    document.querySelector("div.list_view tbody td:nth-child(16)").textContent =
      manufacture.m_reg_date;
    document.querySelector("div.list_view tbody td:nth-child(17)").textContent =
      sale.s_no;
    document.querySelector("div.list_view tbody td:nth-child(18)").textContent =
      sale.s_price;
    document.querySelector("div.list_view tbody td:nth-child(19)").textContent =
      sale.s_reg_date;
  });
};
