import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div>
            <div className=" bg-base-100 shadow-sm ">
<div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>Technologies</li>
        <li><a>Projects</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <img src={Logo} alt="Logo"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-[#D91B7E]"><a>Home</a></li>
        <li><a>Technologies</a></li>
        <li><a>Projects</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn bg-white border-0">Sign In</a>
    <a className="btn rounded-4xl bg-[#D91B7E] text-white">Sign Up</a>
  </div>
 </div>
</div>
        </div>
    );
};

export default Nav;