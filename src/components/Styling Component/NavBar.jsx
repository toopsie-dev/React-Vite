import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={style["navbar"]}>
        <div className={style["logo"]}>
          <h2>Logo here</h2>
        </div>
        <ul className={style["navbar-items"]}>
          <li>
            <a href="" style={{ textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li>
            <a href="" style={{ textDecoration: "none" }}>
              About
            </a>
          </li>
          <li>
            <a href="" style={{ textDecoration: "none" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
