import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa6";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? savedTheme : 'system';
    })

    useEffect(() => {
        if (theme === 'system') {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            document.documentElement.classList.toggle('dark', prefersDark)
        } else {
            document.documentElement.classList.toggle('dark', theme === 'dark')
        }

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        switch (theme) {
            case 'light':
                setTheme('dark')
                break
            case 'dark':
                setTheme('light')
                break
            default:
                setTheme('light')
        }
    }

    return (
        <div>
            <button
                onClick={toggleTheme}
                className="p-2 dark:bg-[#00072D] bg-slate-800 flex items-center transition-colors duration-300 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Toggle theme"
            >
                {theme === 'light' && <BsSunFill className="w-6 h-6 text-yellow-500 dark:text-yellow-500" />}
                {theme === 'dark' && <FaMoon className="w-6 h-6 text-blue-500" />}
                {theme === 'system' && <FaDesktop className="w-6 h-6 text-green-500" />}
            </button>
        </div>
    )
}

export default ThemeToggle