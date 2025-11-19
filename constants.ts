import { PortfolioData } from './types';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Syed Zohaib",
  profilePictureUrl: "https://i.ibb.co/yY11tT9/Zohaib.jpg",
  about: "I am a passionate AI Developer with deep expertise in Python and its object-oriented capabilities. I specialize in building intelligent applications and interactive web apps using Streamlit. My journey into AI has led me to explore and master the OpenAI Agent SDK and advanced Prompt Engineering techniques. I am constantly learning and currently focused on Agentic AI and leveraging the power of the Google Gemini CLI to build next-generation AI solutions.",
  skills: [
    { id: '1', name: 'Python' },
    { id: '2', name: 'Object-Oriented Programming (OOP)' },
    { id: '3', name: 'Streamlit' },
    { id: '4', name: 'OpenAI Agent SDK' },
    { id: '5', name: 'Prompt Engineering' },
    { id: '6', name: 'Google Gemini API' },
    { id: '7', name: 'Agentic AI' },
    { id: '8', name: 'React' },
    { id: '9', name: 'Tailwind CSS' },
  ],
  projects: [
    {
      id: 'proj1',
      title: 'AI-Powered Data Analyzer',
      description: 'A Streamlit application that uses natural language processing to analyze and visualize complex datasets, providing actionable insights.',
      mediaUrl: 'https://picsum.photos/seed/ai1/600/400',
      mediaType: 'image',
      tags: ['Streamlit', 'NLP', 'Data Science'],
      githubUrl: 'https://github.com/syedzohaib',
      liveUrl: 'https://streamlit.io',
    },
    {
      id: 'proj2',
      title: 'Agentic Customer Support Bot',
      description: 'A sophisticated AI agent built with OpenAI SDK that handles customer queries, understands context, and can perform actions on behalf of the user.',
      mediaUrl: 'https://picsum.photos/seed/ai2/600/400',
      mediaType: 'image',
      tags: ['OpenAI SDK', 'AI Agents', 'Customer Support'],
      githubUrl: 'https://github.com/syedzohaib',
      liveUrl: 'https://openai.com',
    },
    {
      id: 'proj3',
      title: 'Gemini CLI Toolkit',
      description: 'A custom command-line interface toolkit to interact with the Google Gemini API for rapid prototyping and testing of AI models.',
      mediaUrl: 'https://picsum.photos/seed/ai3/600/400',
      mediaType: 'image',
      tags: ['Gemini API', 'CLI', 'Prototyping'],
      githubUrl: 'https://github.com/syedzohaib',
      liveUrl: 'https://ai.google.dev',
    },
  ],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/syedzohaib' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/syed-zohaib-ali-bukhari-70775520b/' },
    { name: 'Facebook', url: '' },
    { name: 'Instagram', url: '' },
  ],
  contact: {
    email: 'syedzohaib.dev@gmail.com',
    whatsapp: '923362092601'
  }
};