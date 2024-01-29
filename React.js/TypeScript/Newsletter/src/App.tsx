import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { TUser } from "types/TUser";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState<TUser>({name: '', email: ''});
  const hasUser = Boolean(user.name && user.email);

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {!hasUser && <Form setUser={setUser} />}
    </div>
  )
}

export default App;
