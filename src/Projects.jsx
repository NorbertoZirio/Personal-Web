import "./styles/projects.css";
import Card from "./components/card";

export default function Projects() {
  const timbiriche = {
    url: "/Screenshot_2025-08-16_14-13-23.png",
    title: "EComerce",
    info: "This is an EComerce named TIMBIRICHE...",
  };

  const wheaterApp = {
    url: "/Screenshot_2025-08-16_14-15-08.png",
    title: "Wheater App",
    info: "A Wheater App services whit Graphics...",
  };

  const pokemonGame = {
    url: "/Screenshot_2025-08-16_14-17-18.png",
    title: "Pokemon Memory Game",
    info: "A memory game whit pokemons :)...",
  };

  const tictactoe = {
    url: "/Screenshot_2025-08-16_14-21-45.png",
    title: "TIC-TAC-TOE",
    info: "A funy game whit all the logic...",
  };

  return (
    <div
      id="Proyect"
      style={{
        marginTop: "120px",
        height: `${window.innerHeight - 120}px`,
        width: "100%",
        color: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <Card
          url={timbiriche.url}
          title={timbiriche.title}
          info={timbiriche.info}
        ></Card>
        <Card
          url={wheaterApp.url}
          title={wheaterApp.title}
          info={wheaterApp.info}
        ></Card>
        <Card
          url={pokemonGame.url}
          title={pokemonGame.title}
          info={pokemonGame.info}
        ></Card>
        <Card
          url={tictactoe.url}
          title={tictactoe.title}
          info={tictactoe.info}
        ></Card>
      </div>
      <div
        id="Tech"
        style={{
          width: "100%",
          height: "25%",
          marginTop: "auto",
          backgroundColor: "#170F2D",
          border: "solid white 1px",
          color: "white",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            height: "80%",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2
            style={{
              marginRight: "10px",
            }}
          >
            Working In:
          </h2>
          <svg
            className="newTecnologies"
            style={{
              height: "50%",
              width: "auto",
              fill: "#00BCFF",
              fillRule: "evenodd",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>tailwind</title>
            <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z" />
          </svg>
          <svg
            className="newTecnologies"
            style={{
              height: "50%",
              width: "auto",
              backgroundColor: "white",
              fill: "#2f74BF",
              fillRule: "evenodd",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>typescript</title>
            <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
          </svg>
          <svg
            className="newTecnologies"
            style={{
              height: "50%",
              width: "auto",
              fill: "#ff5d01",
              fillRule: "evenodd",
            }}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Astro</title>
            <path d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z" />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            height: "80%",
            width: "50%",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              marginRight: "10px",
              marginLeft: "10px",
            }}
          >
            Next Project:
          </h2>
        </div>
      </div>
    </div>
  );
}
