import "../styles/card.css";

export default function Card({ url, title = "Title", info = "Info" }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#170F2D",
        border: "solid white 1px",
        height: "90%",
        width: "90%",
        color: "white",
        boxSizing: "border-box",
        margin: "5%",
        borderRadius: "20px",
        display: "flex",
        transition: "transform 0.2s",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "100%",
          boxSizing: "border-box",
          padding: "2%",
        }}
      >
        <h3
          style={{
            margin: "0",
            padding: "0",
            marginBottom: "10px",
            fontFamily: "Titulos",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: "0",
            padding: "0",
            fontFamily: "Texto",
          }}
        >
          {info}
        </p>
      </div>
      <div
        className="image"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
}
