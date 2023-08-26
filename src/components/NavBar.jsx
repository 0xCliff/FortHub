import { TbBrandFortnite } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='h-12 bg-blue-500 flex items-center'>
      <div className='container mx-auto flex items-center justify-center text-white'>
        <TbBrandFortnite className='mr-2 text-4xl' />
        <Link className='text-2xl'>FortHub</Link>
      </div>
      <div></div>
    </div>
  );
}
export default NavBar;
