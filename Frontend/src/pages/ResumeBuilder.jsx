import React from 'react'
import ResumeForm from '../components/resume/ResumeForm'
import { useState } from 'react';
import initialData from '../components/resume/initialData';
import { motion } from "motion/react"
import { FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';



const STEPS = [
  { step: 1, title: "Professional Information", subtitle: "Your Basic Contact Details" },
  { step: 2, title: "Professional Summary", subtitle: "A quick intro about yourself"},
  { step: 3, title: "Skills", subtitle: "your technical skills"},
  { step: 4, title: "Work Experience", subtitle: "your past jobs and internships"},
  { step: 5, title: "Projects", subtitle: "Projects you have built"},
  { step: 6, title: "Education", subtitle: "your academmic background"},
];

const TOTAL_STEPS = STEPS.length;


function ResumeBuilder({user, setuser}) {
    const [currentStep, setCurrentStep] = useState(2)
    const [data, setData] = useState(initialData)
    const navigate = useNavigate()
    const progressPct = ((currentStep)/(TOTAL_STEPS)) * 100 
    const activeStep = STEPS.find((s)=>s.step === currentStep);
  return (
    <div className='min-h-screen bg-white text-[#0A0A0A] flex flex-col'>
      <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='sticky top-0 z-20 border-b border-black/8 bg-white/80 backdrop-blur-xl'>
      <div className='mx-auto flex h-12 max-w-7xl items-center justify-between px-3 sm:px-5'>
        <div onClick={() => navigate("/dashboard")}
          className='flex cursor-pointer items-center gap-1.5'>
          <span className='text-sm font-extrabold sm:text-base text-[#0A0A0A]'>Smarter AI</span>
          <span className='hidden rounded bg-black/5 px-1.5 py-0.5 text-[10px] text-black/50 sm:block'>Resume Builder</span>
        </div>

        <button className='flex h-8 items-center justify-center rounded-lg border border-black/15 text-black/60 transition px-2 hover:border-[#0A0A0A] hover:text-[#0A0A0A]'>
          <FiEye size={13}/>
        </button>
      </div>
    </motion.nav>

    {/* main container */}
      <div className='flex-1 px-3 py-4 sm:px-6 sm:py-8'>
        <div className='mx-auto w-full max-w-2xl'>
        <div className='mb-4'>
        <div className='flex items-center justify-between mb-1.5'>
          <p className='text-[10px] text-black/40 font-medium'>
            STEP {currentStep} of {TOTAL_STEPS} 
          </p>
          <p className='hidden text-[10px] text-black/40 sm:block'>
            {Math.round(progressPct)}% complete
          </p>
        </div>

        <div className='w-full h-1 bg-black/8 rounded-full overflow-hidden'>
          <div className='h-full bg-[#0A0A0A] rounded-full transition-all duration-300' style={{width: `${progressPct}%`}}/>
        </div>

        <div className='mt-3'>
          <h2 className='text-xl font-bold sm:text-2xl'>{activeStep.title}</h2>
          <p className='mt-1 text-xs text-black/45 sm:text-sm'>{activeStep.subtitle}</p>
        </div>

        </div>

        <div className='border-t border-black/8 mb-4'>

        </div>

        </div>
      </div>

        {/* <ResumeForm step={currentStep} data={data} setData={setData}/> */}
    </div>
  )
}

export default ResumeBuilder