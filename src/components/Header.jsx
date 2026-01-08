import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Overview', href: '#overview', view: 'home' },
        { name: 'Foundation', href: '#foundation', view: 'home' },
        { name: 'API Reference', href: '#api', view: 'api' },
        { name: 'Anatomy', href: '#anatomy', view: 'home' },
        { name: 'Resources', href: '#resources', view: 'home' },
    ];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        onNavigate(link.view);

        if (link.view === 'home' && link.href.startsWith('#')) {
            // Give React a tick to render Home view if needed
            setTimeout(() => {
                const element = document.querySelector(link.href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian-1/90 backdrop-blur-md shadow-lg py-4 border-b border-obsidian-2' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => onNavigate('home')}
                >
                    <div className="bg-obsidian-2 p-2 rounded-lg text-obsidian-accent shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                        <Code2 size={24} />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl text-obsidian-accent leading-none font-mono tracking-tighter">IxNetwork</h1>
                        <p className="text-[10px] text-obsidian-textSecondary font-medium tracking-[0.2em] uppercase mt-1">Automation Portal</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Navigation links removed as per user request */}
                    <a
                        href="#start"
                        onClick={(e) => handleNavClick(e, { view: 'home', href: '#start' })}
                        className="bg-obsidian-accent/10 border border-obsidian-accent/20 text-obsidian-accent px-5 py-2 rounded-lg text-sm font-medium hover:bg-obsidian-accent hover:text-obsidian-0 transition-all duration-300 shadow-[0_0_10px_rgba(0,242,255,0.1)] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                    >
                        Get Started
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-obsidian-textPrimary hover:text-obsidian-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-obsidian-1 border-b border-obsidian-2 p-6 md:hidden shadow-xl animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {/* Navigation links removed */}
                        <a
                            href="#start"
                            className="bg-obsidian-accent text-obsidian-0 px-5 py-3 rounded-lg text-center font-bold mt-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all"
                            onClick={(e) => handleNavClick(e, { view: 'home', href: '#start' })}
                        >
                            Get Started
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
