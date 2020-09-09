const http = new easyHTTP();

// const res = http.get("http://jsonplaceholder.typicode.com/users");
// res.then((res) => console.log(res)).catch((err) => console.log(err));

// post user

const data = {
  title: "jon doe",
  body: "i am jon doe",
};

// const res = http.post("http://jsonplaceholder.typicode.com/users", data);
// res.then((res) => console.log(res)).catch((err) => console.log(err));

// PUT user
// const res = http.put("http://jsonplaceholder.typicode.com/users/5", data);
// res.then((res) => console.log(res)).catch((err) => console.log(err));

const res = http.delete("http://jsonplaceholder.typicode.com/users/5");
res.then((res) => console.log(res)).catch((err) => console.log(err));
