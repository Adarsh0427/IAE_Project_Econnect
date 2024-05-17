import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header
      className="absolute md:fixed h-header bg-white z-40 w-full"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="relative flex justify-center max-w-full-content mx-auto h-header items-center">
        <a
          href="/"
          target="_self"
          className="flex flex-col justify-between items-center min-w-[300px] ml-3"
        >
          <img src="/Ekonnect.png" alt="Logo" className="pt-0 mt-0 h-20" />
        </a>
        <div className="flex-grow pb-5 pr-5">
          <NavBar />
        </div>
      </div>
    </header>
    <div className="h-header"></div>
  </>
);

export default Header;
