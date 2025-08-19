import "./styles/contact.css";

export default function Contact() {
  /*const handleSend = (e) => {
    e.preventDefault();

    const name = document.querySelector("#Name");
    const contact = document.querySelector("#contact");
    const mesage = document.querySelector("#comentario");

    const buildMessage = () => {
      return `Name: ${name.value}
              Contact: ${contact.value}
              Message: ${mesage.value}`;
    };
    console.log(buildMessage());
    const text = encodeURIComponent(buildMessage());
    console.log(text);

    window.open(`https://web.telegram.org/k/#@ZerefNZR`, "_blank");
  };*/

  return (
    <div
      id="Contact"
      style={{
        marginTop: "120px",
        height: `${window.innerHeight - 120}px`,
        width: "100%",
        //backgroundColor: "white",
        display: "flex",
      }}
    >
      <form
        action="https://formsubmit.co/norbertozirio@gmail.com"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          color: "white",
          alignItems: "center",
        }}
      >
        <h2>Wanna write me a message?</h2>
        <label htmlFor="Name">Name</label>
        <input id="Name" name="Name" type="text" placeholder="Jon" />
        <label htmlFor="contact">Your Contacts</label>
        <input
          id="contact"
          name="contact"
          type="text"
          placeholder="eample@email.com, +01 xxx xxx, ..."
        />
        <label htmlFor="comentario">Your coment or mesage...</label>
        <textarea
          style={{
            maxWidth: "60%",
            minWidth: "100px",
            height: "60px",
            maxHeight: "120px",
            minHeight: "40px",
          }}
          name="comentario"
          id="comentario"
          placeholder="Your coment or mesage..."
        ></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="#Home" />
        <button
          style={{
            marginTop: "10%",
            height: "40px",
            aspectRatio: "3/1",
            borderRadius: "10px",
            color: "white",
            fontFamily: "Branding",
            fontWeight: "800",
            backgroundColor: "#170F2D",
            border: "solid white 2px",
          }}
          type="submit"
        >
          Send
        </button>
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gridAutoRows: "50px",
          width: "40%",
          alignItems: "center",
          alignSelf: "center",
          textAlign: "left",
        }}
      >
        <svg
          style={{
            height: "80%",
            width: "80%",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>gmail</title>
          <path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
        <h3 id="contacts">norbertozirio@gmail.com</h3>
        <svg
          style={{
            height: "80%",
            width: "80%",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>whatsapp</title>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
        </svg>
        <h3 id="contacts">+53 586 571 62</h3>
        <svg
          style={{
            height: "80%",
            width: "80%",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>twitter</title>
          <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
        </svg>
        <h3 id="contacts">@ZirioRoche</h3>
      </div>
    </div>
  );
}
