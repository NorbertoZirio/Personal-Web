import useHandleResize from "./components/widthDetector";
import Carrusel from "./components/carrusel";

export default function Home() {
  const isMovile = useHandleResize();

  const styles = {
    hero: {
      display: "flex",
      width: "100%",
      flexDirection: isMovile ? "column" : "row",
    },
    text: {
      width: isMovile ? "100%" : "50%",
      height: isMovile
        ? `${(window.innerHeight - 120) * 0.4}px`
        : `${window.innerHeight - 120}px`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "left",
    },
  };

  function contactMe() {
    const input = document.getElementById("Name");
    if (!input) {
      return console.log("No encontrado");
    }

    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus();
  }

  return (
    <div id="Home" style={styles.hero}>
      <div style={styles.text}>
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "Titulos",
            margin: "0",
          }}
        >
          Front-end Developer
        </h1>
        <p
          style={{
            marginTop: "5%",
            lineHeight: "1.9",
            fontFamily: "Texto",
            fontWeight: "900",
          }}
        >
          I am a passionate front-end developer specialized in building
          intuitive and engaging user experiences. I focus on React to create
          dynamic, scalable interfaces, making the most of its components and
          ecosystem. My proficiency in HTML5, CSS3, and modern JavaScript allows
          me to bring polished, responsive designs to life. I enjoy
          collaborating with multidisciplinary teams to transform ideas into
          high-quality digital products.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10%",
            alignItems: "center",
          }}
        >
          <button
            style={{
              height: "40px",
              aspectRatio: "3/1",
              borderRadius: "10px",
              color: "white",
              fontFamily: "Branding",
              fontWeight: "800",
              backgroundColor: "#170F2D",
              border: "solid white 2px",
            }}
            onClick={contactMe}
          >
            Contact Me!!
          </button>
          <h3>What are you wating for?!</h3>
        </div>
      </div>
      <Carrusel></Carrusel>
    </div>
  );
}
