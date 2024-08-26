export const CircleIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-circle lg:group-hover:fill-sanfelix-50 pointer-events-none w-4 h-4 md:w-5 md:h-5`}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  );
}

const CarouselButton = ({ idButton }) => {
  return (
    <button 
      type="button" 
      className="group transition-all ease-in-out duration-300 rounded-full data-[selected=true]:bg-yellow data-[selected=false]:bg-transparent"
      data-id={idButton}
      data-match={idButton + 1}
      data-selected="false"
    >
      <CircleIcon />
    </button>
  )
}

export default CarouselButton