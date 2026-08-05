export default function ReminderFilters({ filter, setFilter, sort, setSort }) {
  return (
    <div className='flex justify-between gap-4 items-center'>
      <div className='flex gap-1 sm:gap-3 sm:ml-5 text-xs sm:text-base'>
        {['all', 'active', 'completed'].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`h-8 px-3 sm:h-10 sm:px-6 rounded-full border transition ${
              filter === item
                ? 'bg-purple border'
                : 'bg-surface hover:bg-surface-hover'
            }`}>
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className='w-full sm:w-52 h-8 md:h-10 rounded-xl border bg-surface px-4 text-sm sm:text-base'>
        <option value='newest'>Newest First</option>
        <option value='oldest'>Oldest First</option>
      </select>
    </div>
  );
}
