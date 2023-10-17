import React from 'react';

const Seasons = () => {
  return (
    <div className='max-w-[1640px] mx-auto py-0 font-source-code-pro'>
      {/* Season */}
      <div className='min-w-[430px] grid grid-cols-1.1fr sm:grid-cols-2 md:grid-cols-4  text-purple-900'>
        <div className='bg-[#ecf3e8] h-[250px] border flex items-end justify-center text-5xl py-7'>SPRING</div>
        <div className='bg-[#f1e5e5] h-[250px] flex items-end justify-center text-5xl py-7 font-bold text-[#E84F88]'>SUMMER</div>
        <div className='bg-[#f6f3e6] h-[250px] flex items-end justify-center text-5xl py-7'>AUTUMN</div>
        <div className='bg-[#ecf4f5] h-[250px] flex items-end justify-center text-5xl py-7'>WINTER</div>
      </div>
    </div>
  );
};

export default Seasons;
