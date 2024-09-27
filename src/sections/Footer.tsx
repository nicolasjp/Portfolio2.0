'use client';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks =[
  {
    title: 'Mobile',
    href: 'tel:+33651153266',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nicolas-jacob-peres-a7ba75196/',
    target: '_blank',
  },
  {
    title: 'Github',
    href: 'https://github.com/nicolasjp',
    target: '_blank',
  },
]

export const Footer = () => {
  const handlePdfClick = () => {
    window.open(
      'https://raw.githubusercontent.com/nicolasjp/Portfolio/master/src/assets/EN_CV_Nicolas_JacobPeres.pdf',
      '_blank'
    );
  };
  
  return (
    <footer className='relative -z-1 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => (
              <a 
                href={link.href} 
                key={link.title} 
                className='inline-flex items-center gap-1.5'
                target={link.target || '_self'}
                rel="noopener noreferrer" // Sécurité pour les liens externes
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
            <button onClick={handlePdfClick} className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Resume</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};
