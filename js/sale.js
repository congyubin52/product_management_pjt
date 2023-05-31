const addEvents = () => {
  console.log("addEvents() CALLED!!!");

  let productOnSaleBtn = document.querySelector(".s_reg_btn");
  productOnSaleBtn.addEventListener("click", function () {
    console.log("productOnSaleBtn CLICKED!!!");

    let c_id = parseInt(document.querySelector("div.c_id input").value);
    let p_no = parseInt(document.querySelector("div.p_no input").value);
    let s_price = parseInt(document.querySelector("div.s_price input").value);
    let s_now = getTime();
    addSale(s_no, c_id, p_no, s_price, s_now, s_now);
    console.log(s_no, c_id, p_no, s_price, s_now, s_now);
    console.log("addSale SUCESS!!!");

    s_no++;
    listView.style.display = "block";
    listTable();

    document.querySelector("div.c_id input").value = "";
    document.querySelector("div.p_no input").value = "";
    document.querySelector("div.s_price input").value = "";

    resetBtn.addEventListener("click", function () {
      saleDB.clear();
      s_no = 1;
    });
  });
};

const listTable = () => {
  console.log("listTable() CALLED!!!");
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = ``;
  saleDB.forEach(function (key, value) {
    let sale = key;
    let customer = searchCustomer(sale.c_id);
    let product = searchProduct(sale.p_no);
    let manufacture = searchManufacture(product.m_no);

    tbody.innerHTML += `
     <tr>
              <td>${customer.c_id}</td>
              <td>${customer.c_name}</td>
              <td>${customer.c_mail}</td>
              <td>${customer.c_phone}</td>
              <td>${customer.c_regDate}</td>
              <td>${product.p_no}</td>
              <td>${product.p_name}</td>
              <td>${product.p_price}</td>
              <td>${product.p_quantity}</td>
              <td>${product.p_reg_date}</td>
              <td>${manufacture.m_no}</td>
              <td>${manufacture.m_name}</td>
              <td>${manufacture.m_address}</td>
              <td>${manufacture.m_phone}</td>
              <td>${manufacture.m_manager}</td>
              <td>${manufacture.m_reg_date}</td>
              <td>${sale.s_no}</td>
              <td>${sale.s_price}</td>
              <td>${sale.s_reg_date}</td>
              
    </tr>
    `;
    console.log("SUCCESS");
  });
};
