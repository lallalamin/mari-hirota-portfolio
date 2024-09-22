export const SectionHeader = ({
    title,
    eyebrow,
    description
  }: {
    title: string;
    eyebrow: string;
    description: string;
  }) => {
    return (
      <>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text md:mt-18'>
            {eyebrow}
          </p>
        </div>
  
        <h2 className='text-3xl md:text-5xl font-serif text-center mt-6'>
          {title}
        </h2>
        <p className='text-center max-w-md mx-auto md:text-lg lg:text-xl text-white/60 mt-4'>
          {description}
        </p>
      </>
    );
  };