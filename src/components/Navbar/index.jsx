import "./index.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="/">
            <img src="https://intranet.stendahls.dev/wp-content/uploads/2022/09/Stendahls-iO-blk.png"></img>
          </a>
        </li>
        <li>
          <a href="/">Navitem</a>
        </li>
        <li>
          <a href="/">Navitem</a>
        </li>
        <li>
          <a href="/">Navitem</a>
        </li>
        <li>
          <a href="/">Navitem</a>
        </li>
        <li>
          <a href="/">Navitem</a>
        </li>
        <li>
          <form>
            <input type="search"></input>
          </form>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
