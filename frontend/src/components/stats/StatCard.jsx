export default function StatCard({ title, value, subtitle, icon, color }) {
  const styles = {
    purple: {
      card: 'bg-purple-soft',
      circle: 'border-purple text-purple',
    },
    green: {
      card: 'bg-green-soft',
      circle: 'border-green text-green',
    },
    orange: {
      card: 'bg-orange-soft',
      circle: 'border-orange text-orange',
    },
  };

  return (
    <div className={`stat outline-card ${styles[color].card} px-5 py-4 group`}>
      <div className='flex items-center gap-12'>
        <div
          className={`h-16 w-16 rounded-full border ${styles[color].circle} flex items-center justify-center`}>
          {icon}
        </div>

        <div className='space-y-2'>
          <h3 className='font-semibold'>{title}</h3>

          <p className='text-2xl font-extrabold leading-none mt-1'>
              {value}
          </p>

          <p className='text-sm text-text-secondary mt-2'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
