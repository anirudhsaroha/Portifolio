import AnchorLink from "react-anchor-link-smooth-scroll";

const NaviLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow-400" : ""
      } hover:text-yellow-400 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {

  return (
    <nav className={`bg-pink-500 z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-serif text-3xl font-bold">AS</h4>

        {/* DESKTOP NAV */}
          <div className="flex justify-between gap-16 font-serif text-sm font-semibold">
            <NaviLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NaviLink
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NaviLink
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NaviLink
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NaviLink
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;