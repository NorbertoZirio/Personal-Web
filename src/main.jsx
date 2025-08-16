import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <Sidebar></Sidebar>
    <App></App>
  </StrictMode>
);
