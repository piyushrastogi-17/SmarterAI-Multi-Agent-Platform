import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import api from "../utils/axios"
import { motion } from 'motion/react';
import { FiSidebar } from 'react-icons/fi';

function Dashboard({ user, setUser }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await api.get("/api/auth/logout")

            if (response.data.success) {
                setUser(null)
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bg-white min-h-screen text-[#0A0A0A] font-sans flex'>
            <Sidebar
                user={user}
                onNewInterview={() => navigate("/interview")}
                onLogout={handleLogout}
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />
            <motion.main className={`flex-1 min-h-screen px-3 sm:px-4 md:px-6 py-4 md:py-6 transition-all duration-300 ${sidebarOpen ? "md:ml-[260px]" : "md:ml-[72px]"}`}>

                {/* top Area  */}
                <div className='flex items-center mb-5 md:mb-6'>
                    <div className='flex items-center gap-2.5'></div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMobileOpen(true)}
                        className='md:hidden text-black/40 hover:text-[#0A0A0A] transition-colors'>
                        <FiSidebar size={17} />
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                    <p className='text-black/40 text-[11px] md:text-xs font-medium'>Overview</p>
                    <h2 className='text-lg md:text-xl font-bold text-[#0A0A0A]'>Hello,{user?.name.split(" ")[0]}</h2>

                    </motion.div>
                </div>

            </motion.main>
        </div>
    )
}

export default Dashboard