import Fin from "./components/fin.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        gap: "30px",
        fontSize: "20px",
        borderBottom: "1px solid #eee"
      }}>
        <div style={{ fontWeight: 700,fontSize:"30px" }}>Shopping Mart</div>

        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link style={{ color: "#444", textDecoration: "none" }} to="/">Home</Link>
          <Link style={{ color: "#444", textDecoration: "none" }} to="/shop">Shop</Link>
          <Link style={{ color: "#444", textDecoration: "none" }} to="/cart">Cart</Link>
          <Link style={{ color: "#444", textDecoration: "none" }} to="/contact" className="link-secondary">Contact us</Link>
        </nav>
      </header>

      <Fin />
    </>
  );
}

export default App;
