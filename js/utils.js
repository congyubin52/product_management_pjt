let s_no = 1;

const getTime = () => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};

let now = getTime();
