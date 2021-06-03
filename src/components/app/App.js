import { useMemo } from "react";
import Form from "./Form";
import { useUser } from "../UserProvider";

function App() {
  const { user } = useUser();

  const renderUser = useMemo(() => {
    return (
      <>
        {user && user.email}
      </>
    )
  }, [user]);

  return (
    <div className="App">
      <div className="wrapper">
        <section className="left-side">
          {renderUser}
        </section>
        <section>
          {!user && <Form />}
        </section>
      </div>
    </div>
  );
}

export default App;