import React from 'react';
import { Compass } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Compass className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            VoyageAI
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            <a href="#" className="text-textMuted hover:text-white transition-colors">Home</a>
                            <a href="#" className="text-textMuted hover:text-white transition-colors">Features</a>
                            <a href="#" className="text-textMuted hover:text-white transition-colors">About</a>
                            <button className="btn-primary py-1.5 text-sm">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
