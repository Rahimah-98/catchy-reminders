import { useEffect, useState } from 'react';

export default function Quote() {
  const [quote, setQuote] = useState({
    quote: 'Loading inspiration...',
    author: '',
  });

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch('https://dummyjson.com/quotes');

      const data = await response.json();

      const shortQuotes = data.quotes.filter((item) => item.quote.length <= 80);

      const random =
        shortQuotes[Math.floor(Math.random() * shortQuotes.length)];

      setQuote({
        quote: random.quote,
        author: random.author,
      });
    }

    fetchQuote();

    const interval = setInterval(fetchQuote, 25000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className='card outline-card flex items-center justify-center gap-8 sm:gap-6 lg:flex-col lg:justify-center lg:text-center px-4 py-4 sm:py-0'>
      <div className='hidden md:flex items-center justify-center sm:my-6 mt-0'>
        <div className='absolute w-45 h-45 rounded-full bg-primary/50 blur-xl' />

        <img
          src='./insp.png'
          alt='Notebook image'
          className='w-42 z-10 float transition-transform duration-300'
        />
      </div>

      <div className='flex flex-col items-center justify-center gap-4 mt-0 sm:mt-6'>
        <h2 className='font-heading text-xl lg:text-2xl font-extrabold'>
          Today's Inspirations
        </h2>

        <p className='italic text-text-secondary text-md md:text-lg text-center'>
          " {quote.quote} "
        </p>

        <span className='text-xs text-text-secondary'>— {quote.author}</span>
      </div>
    </aside>
  );
}
