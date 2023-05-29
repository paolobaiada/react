import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import GithubUserlist from "./Components/GitHubUserList";

function App() {
  return (
    <Routes>
      <Route path="/Counter" element={<Counter />} />
      <Route path="/users" element={<GithubUserlist />}>
        <Route index element={<h1>Aggiungi un utente e selezionalo</h1>} />
        <Route path=":username" element={<ShowGithubUser />} />
      </Route>
    </Routes>
  );
}

export default App;
