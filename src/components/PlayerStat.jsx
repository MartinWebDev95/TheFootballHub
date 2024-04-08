const PlayerStat = ({ statName, stat }) => {
  return (
    <p className='flex flex-col gap-1.5'>
      <span className="text-sm">
        {statName}
      </span>

      <span className='text-2xl lg:text-3xl font-medium'>
        {stat === null ? 'ND' : stat}
      </span>
    </p>
  )
}

export default PlayerStat