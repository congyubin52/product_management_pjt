// product, manufacture, sale DB => Map

const productDB = new Map();
const manufactureDB = new Map();
const saleDB = new Map();

//add to product table

const addProduct = (
  p_no,
  m_no,
  p_name,
  p_price,
  p_quantity,
  p_reg_date,
  p_mod_date
) => {
  productDB.set(p_no, {
    p_no: p_no,
    m_no: m_no,
    p_name: p_name,
    p_price: p_price,
    p_quantity: p_quantity,
    p_reg_date: p_reg_date,
    p_mod_date: p_mod_date,
  });
};

addProduct(1, 1, "A상품", 10000, 50, now, now);
addProduct(2, 2, "B상품", 500, 100, now, now);
addProduct(3, 3, "C상품", 15000, 20, now, now);
addProduct(4, 4, "D상품", 20000, 10, now, now);
addProduct(5, 5, "E상품", 30000, 30, now, now);

const searchProduct = (p_no) => {
  return productDB.get(p_no);
};

//add to manufacture table

const addManufacture = (
  m_no,
  m_name,
  m_address,
  m_phone,
  m_manager,
  m_reg_date,
  m_mod_date
) => {
  manufactureDB.set(m_no, {
    m_no: m_no,
    m_name: m_name,
    m_address: m_address,
    m_phone: m_phone,
    m_manager: m_manager,
    m_reg_date: m_reg_date,
    m_mod_date: m_mod_date,
  });
};

addManufacture(
  1,
  "A제조사",
  "AAA시 aaa구 123-456",
  "010-1478-5236",
  "A대리",
  now
);
addManufacture(
  2,
  "B제조사",
  "BBB시 bbb구 789-123",
  "010-1234-5678",
  "B대리",
  now
);
addManufacture(
  3,
  "C제조사",
  "CCC시 ccc구 456-789",
  "010-4567-5236",
  "C대리",
  now
);
addManufacture(
  4,
  "D제조사",
  "DDD시 ddd구 120-345",
  "010-4968-1597",
  "D대리",
  now
);
addManufacture(
  5,
  "E제조사",
  "EEE시 eee구 678-301",
  "010-1968-2389",
  "E대리",
  now
);

const searchManufacture = (m_no) => {
  return manufactureDB.get(m_no);
};
//add to sale table

const addSale = (s_no, c_id, p_no, s_price, s_reg_date, s_mod_date) => {
  saleDB.set(s_no, {
    s_no: s_no,
    c_id: c_id,
    p_no: p_no,
    s_price: s_price,
    s_reg_date: s_reg_date,
    s_mod_date: s_mod_date,
  });
};

const searchSale = (s_no) => {
  return saleDB.get(s_no);
};
