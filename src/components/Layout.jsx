import NavBar from './NavBar';
import SideBar from './SideBar';

function Layout({ children }) {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Player Stats', path: '/stats' },
    { label: 'Shop', path: '/shop' },
  ];

  return (
    <>
      <NavBar />
      <div className='my-5 grid grid-cols-12 gap-4'>
        <div className='col-span-2'>
          <SideBar links={links} />
        </div>
        <div className='col-span-10 justify-center'>{children}</div>
      </div>
    </>
  );
}
export default Layout;
