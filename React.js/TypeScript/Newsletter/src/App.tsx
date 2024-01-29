import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import { TUser } from "types/TUser";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState<TUser>({name: '', email: ''});
  const hasUser = Boolean(user.name && user.email);

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {!hasUser && <Form setUser={setUser} />}
      <Footer />
    </div>
  )
}

export default App;
