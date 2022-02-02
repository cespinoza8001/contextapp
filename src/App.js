import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
