import ddInventoryImage from '../assets/ddinventory.png'
import portfolioImage from '../assets/portfolio.png'
import businessOperationsImage from '../assets/business-operations-ui.png'

export const projects = [
  {
    name: 'Business Resource Management UI',
    description:
      'A modern ERP dashboard interface featuring Point of Sale, Inventory Management, and multi-store operations. Built with Next.js and TypeScript to showcase advanced frontend UI design and development capabilities.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: businessOperationsImage,
    source_code_link: 'https://github.com/pajascript/dashboard-sidebar-template',
    link: 'https://jpbusinessoperations.netlify.app/',
  },
  {
    name: 'Portfolio Website V1',
    description:
      'A personal portfolio website showcasing projects, skills, and experience. Built to demonstrate frontend development and design capabilities.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: portfolioImage,
    source_code_link: 'https://github.com/pajascript/portfolio-w-ebsite-2k25',
    link: 'https://jpfullstack.netlify.app',
  },
  {
    name: 'Daily Dope Inventory',
    description:
      'Web-based platform that allows users to add, track, and manage inventory, providing a convenient and efficient solution for business needs.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: ddInventoryImage,
    source_code_link: 'https://github.com/pajascript/dope-inventory-frontend',
    link: 'https://dailydopeinventory.onrender.com/',
  },
]

export default projects
