import "./styles/App.css";
import useHandleResize from "./components/widthDetector";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./contact";

function App() {
  const styles = {
    main: {
      border: "solid white 2px",
      position: "absolute",
      top: "120px",
      left: useHandleResize ? "15%" : "10%",
      width: useHandleResize ? "70%" : "80%",
      height: `${3 * window.innerHeight - 120}px`,
    },
  };

  return (
    <main style={styles.main}>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}

export default App;
