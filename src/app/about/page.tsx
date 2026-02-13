'use client'

import { FaGithub, FaJs, FaCss3, FaHtml5, FaReact, FaMagic, FaCube, FaExchangeAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a Frontend Developer who loves turning ideas into interactive web experiences. When I&apos;m not coding, you&apos;ll find me exploring new designs,learninng new skills, or improving my projects. I enjoy working with HTML,CSS,Javascript and Next.js .
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaHtml5 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">HTML</h3>
            <ul className="text-secondary space-y-2">
              <li>Structure</li>
              <li>Semantics</li>
              <li>Accessibility</li>
              <li>SEO Best Practices</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCss3 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">CSS</h3>
            <ul className="text-secondary space-y-2">
              <li>Flexbox</li>
              <li>Grid</li>
              <li>Responsive Design</li>
              <li>Animations</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaJs className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Javascript</h3>
            <ul className="text-secondary space-y-2">
              <li>ES6+ Feature</li>
              <li>Asynchronous programming</li>
              <li>DOM Manipulation</li>
              <li>APIs</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGithub className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <ul className="text-secondary space-y-2">
              <li>Version Control</li>
              <li>Collaboration</li>
              <li>Pull Requests</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaReact className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">React.js</h3>
            <ul className="text-secondary space-y-2">
              <li>Hooks</li>
              <li>Context API</li>
              <li>API Integration (Axios)</li>
              <li>React Router Dom</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaReact className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Next.js</h3>
            <ul className="text-secondary space-y-2">
              <li>Component-based Architecture</li>
              <li>Routing and Navigation</li>
              <li>State Management</li>
              <li>Performance Optimization</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaMagic className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">GSAP</h3>
            <ul className="text-secondary space-y-2">
              <li>High-Performance Animations</li>
              <li>Timeline Control</li>
              <li>ScrollTrigger</li>
              <li>Ease Functions</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCube className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Three.js</h3>
            <ul className="text-secondary space-y-2">
              <li>3D Graphics</li>
              <li>WebGL Rendering</li>
              <li>Scenes and Cameras</li>
              <li>Materials and Textures</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaExchangeAlt className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Barba.js</h3>
            <ul className="text-secondary space-y-2">
              <li>Smooth Page Transitions</li>
              <li>PJAX Implementation</li>
              <li>Customizable Views</li>
              <li>Event Hooks</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Frontend developer</h3>
            <p className="text-primary mb-2">Self learning</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Built multiple frontend projects using HTML,CSS,Javascript and Next.js.</li>
              <li>Developed responsive website like a portfolio, Weather app, Rock Paper Scissors and So on</li>
              <li>Focused on writing clean, reusable, and efficient code.</li>
              <li>Continuously Learning new Framework and improving UI/UX design skills.</li>
            </ul>
          </motion.div>
        
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Commerce(Hons)</h3>
            <p className="text-primary mb-2">University of Delhi • 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Currently pursuing B.com(Hons) with a focus on subject like Accounting,Finance and Business Law.</li>
              <li>Actively learning Frontend development alongside academics,with skills in HTML,CSS,JavaScript, and Next,js .</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 