import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import fridgy from '@/assets/images/1.png';
import mealhub from '@/assets/images/2.png';
import braincardicon from '@/assets/images/3.png';
import yellowarrow from '@/assets/images/4.png';
import bluesquare from '@/assets/images/5.png';
import codeoasisicon from '@/assets/images/6.png';
import lallalamari from '@/assets/images/7.png';
import yarnloop from '@/assets/images/8.png';
import gardeniaai from '@/assets/images/9.png';
import nearbyeat from '@/assets/images/10.png';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';
import StarIcon from '@/assets/icons/star.svg'

import Image from 'next/image';
import { Card } from '@/components/Card';
import { Fragment } from 'react';

const testimonials = [
  {
    name: 'Fridgy',
    position: 'Marketing Manager @ TechStartups',
    avatar: memojiAvatar1,
    design: fridgy,
  },
  {
    name: 'MealHub',
    position: 'Head of Design @ GreenLeaf',
    avatar: memojiAvatar2,
    design: mealhub,
  },
  {
    name: 'BrainCards',
    position: 'CEO @ InnovateCo',
    avatar: memojiAvatar3,
    design: braincardicon,
  },
  {
    name: 'Yello Arrow Character',
    position: 'Product Manager @ GlobalTech',
    avatar: memojiAvatar4,
    design: yellowarrow,
  },
  {
    name: 'Blue Square Character',
    position: 'Director of IT @ MegaCorp',
    avatar: memojiAvatar5,
    design: bluesquare,
  },
  {
    name: 'CodeOasis',
    position: 'Director of IT @ MegaCorp',
    avatar: memojiAvatar5,
    design: codeoasisicon,
  },
  {
    name: 'Lallalamari',
    position: 'Director of IT @ MegaCorp',
    avatar: memojiAvatar5,
    design: lallalamari,
  },
  {
    name: 'YarnLoop',
    position: 'Director of IT @ MegaCorp',
    avatar: memojiAvatar5,
    design: yarnloop,
  },
  {
    name: 'GardeniaAI',
    position: 'Director of IT @ MegaCorp',
    avatar: memojiAvatar5,
    design: gardeniaai,
  },
  {
    name: 'NearbyEats',
    position: 'Director of IT @ MegaCorp',
    avatar: memojiAvatar5,
    design: nearbyeat,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='container'>
        <SectionHeader
          eyebrow='Happy Designs'
          title='Explore My Design Work'
          description="Every project tells a story through thoughtful visuals and innovative ideas"
        />

        <div className='mt-12 lg:mt-20 flex overflow-x-clip mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 '>
          <div className='flex flex-none gap-8 pr-8 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  
                  <Card
                    key={testimonial.name}
                    className='max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300'
                  >
                    
                    <div className='flex gap-4 items-center'>
                      <div>
                      <div className='inline-flex items-center gap-2'>
                        <StarIcon className='size-9 text-lime-300' />
                        <h3 className='font-semibold'>{testimonial.name}</h3>
                      </div>
                      
                        {/* <div className='text-sm text-white/40'>
                          {testimonial.position}
                        </div> */}
                      </div>
                    </div>
                    <p className='mt-4 md:mt-6 text-sm md:text-base'>
                      <Image
                          className='max-h-full'
                          src={testimonial.design}
                          alt={testimonial.name}
                        />
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};