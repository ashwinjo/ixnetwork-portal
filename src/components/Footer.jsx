import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <p>&copy; {new Date().getFullYear()} Keep It Simple. All rights reserved.</p>
                    <p className="mt-1 text-slate-600">Built for automation engineers, by automation engineers.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="https://github.com/OpenIxia" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
