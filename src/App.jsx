import "./styles/App.css";
import useHandleResize from "./components/widthDetector";
import Home from "./Home";

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
    </main>
  );
}

export default App;
