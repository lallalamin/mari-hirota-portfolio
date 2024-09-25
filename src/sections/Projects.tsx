import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import nearByEats from '@/assets/images/nearbyeats.png';
import braincards from '@/assets/images/braincard.png';
import codeoasis from '@/assets/images/codeoasis.png';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';

const portfolioProjects = [
  {
    company: 'NearbyEats',
    year: '2024',
    title: 'Mobile Application',
    results: [
      { title: 'Helps users discover hidden gem restaurants nearby' },
      { title: 'Real-time location updates' },
      { title: 'Kotlin, YelpAPI, GoogleAPI, AndriodStudio' },
    ],
    link: 'https://github.com/and101-final-proj-group18/and101-final-project',
    image: nearByEats,
  },
  {
    company: 'BrainCard',
    year: '2024',
    title: 'AI Generate Flashcard',
    results: [
      { title: 'An AI-driven platform that generates study topics tailored to user preferences' },
      { title: 'Learning improves retention by up to 50%' },
      { title: 'OpenAI, Firebase, Stripe, Clerk, Javascript' },
    ],
    link: 'https://ai-flashcards-stripe-hazel.vercel.app/',
    image: braincards,
  },
  {
    company: 'CodeOasis',
    year: '2024',
    title: 'Platform for CS Student to Connect',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://github.com/lallalamin/Code-Oasis',
    image: codeoasis,
  },
];

export const ProjectsSection = () => {
  return (
    <section className='pb-16 lg:py-24' id='project'>
      <div className='container'>
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          description='See how I transformed concepts into engaging digital experiences.'
        />

        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {portfolioProjects.map((project, index) => (
            <Card
              className='px-8 pb-0 md:px-10 pt-8 md:pt-12 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${index * 40}px `
              }}
              key={project.title}
            >
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-lime-300 to-indigo-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className='font-serif text-2xl md:text-4xl mt-2 md:mt-5'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result, index) => (
                      <li
                        className='flex gap-2 text-sm md:text-base text-white/50'
                        key={index}
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold mt-8 inline-flex items-center justify-center gap-2'>
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 w-full md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};