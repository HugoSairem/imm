import { useMemo } from "react";
import { Provider } from "./Context";
import Form from "./Form";
import { Actions } from "./Actions";
import { useUser } from "../UserProvider";

function App() {
  const { user } = useUser();
  const data = Actions();

  const renderUser = useMemo(() => {
    return (
      <>
        {user && user.email}
      </>
    )
  }, [user]);

  return (
    <Provider value={data}>
      <div className="App">
        <div className="wrapper">
          <section className="left-side">
            {renderUser}
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default App;