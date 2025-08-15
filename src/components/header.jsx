import { useEffect, useState } from "react";
import '../styles/header.css'

export default function Header() {
  const [isMovile, setIsMovile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMovile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const styles = {
    container: {
      display: "flex",
      height: isMovile ? "65px" : "80px",
      width: "100%",
      alignItems: "center",
      position: "fixed",
      cursor: "pointer",
    },
    logoSection: {
      display: "flex",
      marginLeft: isMovile ? "5px" : "10px",
      alignItems: "center",
      gap: isMovile ? "5px" : "10px",
      height: "100%"
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
            objectFit: "cover"
          }}
          src="/acount-image.jpeg"
          alt="icono"
        />
        <h2 style={styles.name}>Name</h2>
      </div>
      <ul style={styles.list}>
        <li>Home</li>
        <li>Proyect</li>
        <li>Tech</li>
        <li>Contact</li>
      </ul>
      <button
        style={{
          marginRight: "10px",
          height: "50%",
          aspectRatio: "3/1",
          borderRadius: "10px",
          fontWeight: "800",
          backgroundColor: "transparent",
          color: "white",
          border: "solid white 2px",
          fontFamily: "Branding",
        }}
      >
        Resume
      </button>
    </div>
  );
}
