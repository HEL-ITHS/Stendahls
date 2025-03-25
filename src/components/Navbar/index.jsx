import "./index.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="/">
            <img src="https://intranet.stendahls.dev/wp-content/uploads/2022/09/Stendahls-iO-blk.png"></img>
          </a>
        <li>
          <form>
            <input type="search"></input>
          </form>
        </li>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Our Work</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">News & Articles</a>
        </li>
        <li>
          <a href="/">Talks & Seminars</a>
        </li>
        <li>
          <a href="/">Open positions</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
