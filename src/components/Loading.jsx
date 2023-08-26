import { AiOutlineLoading } from 'react-icons/ai';

function Loading() {
  return (
    <div className='w-full h-full grid place-content-center'>
      <button class='bg-blue-500 py-2 px-3 rounded flex items-center'>
        <AiOutlineLoading className='mr-2' /> Processing...
      </button>
    </div>
  );
}
export default Loading;
