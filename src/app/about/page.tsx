'use client'

import {  FaHtml5, FaCss3, FaJs, FaGithub } from 'react-icons/fa'
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
          I&apos;m a Frontend developer who loves turning ideas into interactive web experiences.
          When I&apos;m not coding, you&apos;ll find me exploring new designs, learning new skills, or improving my projects.
          I enjoy working with HTML, CSS , Javascript and Next.js.
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
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <ul className="text-secondary space-y-2">
              <li>ES6+ Features</li>
              <li>Asynchronous Programming</li>
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
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">No Experience</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Built multiple frontend projects using HTML,CSS,Javascript and Next.js.</li>
              <li>Developed responsive website like a portfolio, Weather App, and Rock Paper Scissors Game.</li>
              <li>Focused on writing clean,reusable,, and efficient code.</li>
              <li>Continuously learning new Framework and improving UI/UX design skills.</li>
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
            <h3 className="text-xl font-semibold mb-2">Bachelor of Commerce (Hons)</h3>
            <p className="text-primary mb-2">University of Delhi • 2024 - Present</p>
            <p className="text-secondary">
              Currently pursing B.Com(Hons) with a focus on subjects like Accounting, Finance, and Business Law.
            </p>
            <p className="text-secondary">
              Actively learning Frontend development alongside academics, with skills in HTML, CSS,JavaScript, and .
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 