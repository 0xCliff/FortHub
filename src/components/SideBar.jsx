import { Link } from 'react-router-dom';

function SideBar({ links }) {
  const renderedLinks = links.map(link => {
    return (
      <Link to={link.path} className='text-blue-500 mb-2 text-xl'>
        {link.label}
      </Link>
    );
  });

  return (
    <div className='sticky top-12 overflow-y-scroll flex flex-col min-h-screen border-r p-5'>
      {renderedLinks}
    </div>
  );
}
export default SideBar;
