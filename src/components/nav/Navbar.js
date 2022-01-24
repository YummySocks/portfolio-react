


function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            My Portfolio
          </a>
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
            <span>4046807224</span>
          </div>
          <div className="itemContainer">
            {/* <Mail className="icon" /> */}
            <span>patrickdsutcliffe@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar