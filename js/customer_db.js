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
addCustomer(1, "재희1", "ll@.com", "010-1234-1234", now);
addCustomer(2, "재희2", "ll@.com", "010-1234-1234", now);
addCustomer(3, "재희3", "ll@.com", "010-1234-1234", now);
addCustomer(4, "재희4", "ll@.com", "010-1234-1234", now);
addCustomer(5, "재희5", "ll@.com", "010-1234-1234", now);

const searchCustomer = (id) => {
  return customerDB.get(id);
};
