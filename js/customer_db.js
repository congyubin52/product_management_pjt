let customerDB = new Map();

const addCustomer = (id, name, mail, phone, regDate) => {
  customerDB.set(id, {
    c_id: id,
    c_name: name,
    c_mail: mail,
    c_phone: phone,
    c_regDate: regDate,
  });

  console.log(customerDB.get(id));
};
addCustomer(1, "재희", "ll@.com", "010-1234-1234", now);
addCustomer(2, "유빈", "ll@.com", "010-1234-1234", now);
addCustomer(3, "란희", "ll@.com", "010-1234-1234", now);
addCustomer(4, "승석", "ll@.com", "010-1234-1234", now);
addCustomer(5, "보영", "ll@.com", "010-1234-1234", now);

const searchCustomer = (id) => {
  return customerDB.get(id);
};
