const MenuBtn = ({ isMenuHidden, setIsMenuHidden, setSubmenuActive }) => {

  const handleMenuBtn = () => {
    if(isMenuHidden){
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    setSubmenuActive(null);
    setIsMenuHidden(!isMenuHidden);
  }

  return (
    <button 
      type='button' 
      className='relative bg-transparent border-none flex lg:hidden w-5 h-3'
      onClick={handleMenuBtn}
    >
      <span className={`absolute w-5 h-0.5 bg-white transition-all ease-in-out duration-200 ${isMenuHidden ? 'top-0 left-0' : 'rotate-45 top-1'}`}></span>
      <span className={`absolute w-5 h-0.5 bg-white transition-all ease-in-out duration-200 ${isMenuHidden ? 'bottom-0 left-0' : '-rotate-45 bottom-1.5'}`}></span>
    </button>
  )
};

export default MenuBtn;