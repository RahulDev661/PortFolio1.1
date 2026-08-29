
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from './Icons.jsx';

const Hero = () => {
  return (
    <section className="min-h-screen bg-paper text-ink transition-colors duration-300 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Intro & Headline */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for opportunities
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink">
              Hi, I'm
            </h1>
            <h1 className="text-5xl sm:text-7xl font-black text-accent tracking-tight">
              Rahul Dev
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-muted leading-snug">
            Frontend Developer building modern, responsive & user-friendly web applications.
          </p>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-muted leading-relaxed border-l-2 border-accent pl-4">
            I specialize in React and JavaScript, creating clean, efficient, and scalable interfaces that solve real-world problems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-paper font-semibold px-6 py-3 rounded-xl shadow-lg shadow-accent/20 transition-all duration-200"
            >
              View Projects
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line bg-surface/50 hover:bg-accent-soft text-ink font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              <MailIcon className="w-4 h-4" />
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-line/60 hover:bg-accent-soft text-muted hover:text-accent transition-colors border border-line"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-line/60 hover:bg-accent-soft text-muted hover:text-accent transition-colors border border-line"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="p-3 rounded-xl bg-line/60 hover:bg-accent-soft text-muted hover:text-accent transition-colors border border-line"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Code Card & Floating Image Overlay */}
        <div className="lg:col-span-6 relative flex items-end justify-start min-h-420px">
          
          {/* Dynamic Code Window */}
          <div className="w-full max-w-lg bg-surface rounded-2xl border border-line shadow-2xl overflow-hidden backdrop-blur-sm z-0">
            
            {/* Window Header */}
            <div className="px-4 py-3 bg-paper border-b border-line flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-muted font-mono">RahulDev.jsx</span>
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-ink pr-24 sm:pr-32">
              <pre>
                <code>
                  <div><span className="text-accent">const</span> developer = {'{'}</div>
                  <div>  <span className="text-muted">name:</span> <span className="text-accent">'Rahul Dev'</span>,</div>
                  <div>  <span className="text-muted">role:</span> <span className="text-accent">'Frontend Developer'</span>,</div>
                  <div>  <span className="text-muted">stack:</span> [<span className="text-accent">'React'</span>, <span className="text-accent">'JavaScript'</span>,</div>
                  <div>          <span className="text-accent">'Tailwind CSS'</span>, <span className="text-accent">'Node.js'</span>],</div>
                  <div>  <span className="text-muted">passion:</span> <span className="text-accent">'Building impactful'</span></div>
                  <div>           <span className="text-accent">'digital experiences'</span>,</div>
                  <div>  <span className="text-muted">currently:</span> <span className="text-accent">'Building a Construction'</span></div>
                  <div>             <span className="text-accent">'Website for a client'</span>,</div>
                  <div>{'}'};</div>
                  <br />
                  <div><span className="text-accent-dark">export default</span> developer;</div>
                </code>
              </pre>
            </div>
          </div>

          {/* Floating Overlapping Image */}
          <div className="absolute right-0 bottom-0 z-10 w-64 sm:w-80 md:w-96 pointer-events-none translate-x-4 sm:translate-x-8">
            <img 
              src="src/assets/ChatGPT Image Aug 28, 2026, 03_38_20 PM.png" 
              alt="Rahul Dev" 
              className="w-full h-auto object-cover drop-shadow-2xl" 
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
