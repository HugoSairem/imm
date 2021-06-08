export default function post(url, body, action) {
  fetch("http://localhost:8000/" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export function get(url, body, action) {
  fetch("http://localhost:8000/" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log(err);
    });
};