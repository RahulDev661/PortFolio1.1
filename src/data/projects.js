// Add a new project by adding an object to this array — ProjectCard.jsx
// renders whatever is here. Replace the placeholder projects and links
// (anything wrapped in [brackets]) with your real details.
import Gemini from '../assets/Gemini_Generated_Image_nttyfynttyfyntty.png';
import rp from '../assets/image.png';
import ind from '../assets/Screenshot 2026-09-02 120843.png';
export const projects = [
  {
    id: 'construction-cost-estimator',
    name: 'Construction Cost Estimator',
    description:
      "A web app that helps small construction shops estimate material needs and job costs before quoting a client, replacing manual spreadsheet guesswork with a form-driven calculator.",
    problem:
      'Estimating material quantities and costs by hand is slow and error-prone, which leads to under- or over-quoting jobs.',
    features: [
      'Dynamic material estimation based on job dimensions',
      'Real-time cost calculation as inputs change',
      'User input validation to prevent invalid or unsafe estimates',
      'REST API layer connecting the form to backend calculation logic',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
    github: '[Add GitHub URL]',
    demo: '[Add live demo URL]',
    image: rp,
    featured: true,
  },
  { id: 'photo-video-explorer',
  name: 'Photo & Video Explorer',
  description:
    'A modern media discovery application that lets users explore and search high-quality photos and videos using external media APIs, with Redux-powered state management for a smooth browsing experience.',
  problem:
    'Finding and browsing high-quality visual content across different media sources can be difficult. This application provides a unified interface for discovering, searching, and viewing photos and videos efficiently.',
  features: [
    'Search and discover high-quality photos and videos',
    'API-driven media browsing with dynamic results',
    'Redux-based global state management',
    'Responsive media gallery with detailed previews'
  ],

  tech: [
    'React',
    'Redux Toolkit',
    'JavaScript',
    'REST APIs',
    'Unsplash API',
    'CSS/Tailwind CSS'
  ],

  github: 'https://github.com/RahulDev661/ImageandVideo',
  demo: '[Add live demo URL]',

  image:Gemini,
  featured: false
  },
    {
  id: 'independence-day-player',
  name: 'Vande Mataram – Independence Day Media Player',
  description: 'An interactive patriotic music and video player featuring dynamic audio visualizations inspired by viral Independence Day reel edits.',
  problem: 'Standard music players lack theme-specific immersion for seasonal events, missing out on the energetic visual atmosphere popular in social media celebrations.',
  features: [
    'Real-time audio visualizers matching the Indian tricolor theme',
    'Curated playlist of classic and trending patriotic tracks',
    'Custom video background sync inspired by viral celebration edits'
  ],
  tech: ['React', 'Redux Toolkit', 'Web Audio API', 'Tailwind CSS'],
  github: 'https://github.com/RahulDev661/IndepenceDay',
  demo: 'https://rahulsindepencedayplay.netlify.app/',
  image: ind,
  featured: true
},
]

export const featuredProject = projects.find((p) => p.featured) || projects[0]
