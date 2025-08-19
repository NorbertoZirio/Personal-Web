import "../styles/header.css";
import useHandleResize from "./widthDetector";

export default function Header() {
  const isMovile = useHandleResize();

  const styles = {
    container: {
      display: "flex",
      height: isMovile ? "65px" : "80px",
      width: "100%",
      alignItems: "center",
      position: "fixed",
      cursor: "pointer",
      zIndex: "10",
    },
    logoSection: {
      display: "flex",
      marginLeft: isMovile ? "5px" : "10px",
      alignItems: "center",
      gap: isMovile ? "5px" : "10px",
      height: "100%",
    },
    name: {
      fontFamily: "Branding",
      fontSize: isMovile ? "25px" : "30px",
    },
    list: {
      display: "flex",
      height: "50px",
      width: "100%",
      listStyleType: "none",
      justifyContent: "center",
      margin: "0",
      padding: "0",
      gap: isMovile ? "10px" : "20px",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoSection}>
        <img
          style={{
            backgroundColor: "white",
            borderRadius: "1000px",
            height: "80%",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          src="/acount-image.jpeg"
          alt="icono"
        />
        <h2 style={styles.name}>Name</h2>
      </div>
      <ul style={styles.list}>
        <li>
          <a id="menu" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a id="menu" href="#Proyect">
            Proyect
          </a>
        </li>
        <li>
          <a id="menu" href="#Tech">
            Tech
          </a>
        </li>
        <li>
          <a id="menu" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
      <a
        href="/Norberto-Resume.pdf" // Asegúrate de que el archivo esté en la carpeta public
        download="Norberto-Resume.pdf"
        style={{
          marginRight: "10px",
          height: "40px",
          width: "150px",
          borderRadius: "10px",
          fontWeight: "800",
          backgroundColor: "transparent",
          color: "white",
          border: "solid white 2px",
          fontFamily: "Branding",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        Resume
      </a>
    </div>
  );
}
