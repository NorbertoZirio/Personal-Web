import useHandleResize from "./components/widthDetector";

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
        ? `${window.innerHeight - 120 - 0.6}px`
        : `${window.innerHeight - 120}px`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      textAlign: "left",
    },
  };

  return (
    <div style={styles.hero}>
      <div style={styles.text}>
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "Titulos",
            margin: "0",
          }}
        >
          Hero title
        </h1>
        <p
          style={{
                      marginTop: "5%",
              lineHeight: "1.9"
          }}
        >
          Some description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laborum earum cupiditate vero omnis, rerum inventore optio,
          libero non modi suscipit perferendis totam labore commodi vitae.
          Blanditiis culpa modi sint in.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10%",
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
          >
            Call to action
          </button>
          <h3>What are you wating for?!</h3>
        </div>
      </div>
      <div>Carrusel</div>
    </div>
  );
}
