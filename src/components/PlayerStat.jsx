const PlayerStat = ({ statName, stat }) => {
  return (
    <p className='flex flex-col gap-1.5'>
      <span className="text-sm">
        {statName}
      </span>

      <span className='text-2xl md:text-4xl lg:text-5xl font-semibold'>
        {stat === null ? 'ND' : stat}
      </span>
    </p>
  )
}

export default PlayerStat