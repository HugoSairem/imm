import { useEffect, useState } from "react";

export const Actions = () => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const login = (newUser) => {
    fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setUser([
            {
              id: data.id,
              ...newUser,
            },
            ...user,
          ]);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    login,
  };
};