
const Background = (/*prop: any*/) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat blur-3xl" style={{ backgroundImage: 'url("/darkbluebackgound.gif")' }} >
      {/* {prop.children} */}
    </div>
  );
};

export default Background;

