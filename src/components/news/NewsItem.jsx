function NewsItem({ item }) {
  return (
    <div className='rounded-lg mr-5 p-2 border'>
      <img src={item.image} alt='' className='h-50 rounded mb-2' />
      <h5 className='text-2xl text-center text-blue-500 mb-2 border-b'>
        {item.title}
      </h5>
      <p className=''>{item.body}</p>
    </div>
  );
}
export default NewsItem;
