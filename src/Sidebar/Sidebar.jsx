import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import "./Sidebar.css";

const Sidebar = ({handleChange}) => (
  <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />

    </section>
  </>
)

export default Sidebar