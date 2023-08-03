import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <NavItem page={"Home"} currentPage={"Home"} />
      <NavItem page={"Portfolio"}  currentPage={"Portfolio"} />
      <NavItem page={"Contact"} currentPage={"Contact"} />
      <NavItem page={"Resume"} currentPage={"Resume"} />
    </ul>
  );
}
