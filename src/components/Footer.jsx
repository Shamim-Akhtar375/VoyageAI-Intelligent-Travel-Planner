import React from 'react';
import { Compass, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Compass className="w-8 h-8 text-primary" />
                            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                VoyageAI
                            </span>
                        </div>
                        <p className="text-textMuted max-w-sm mb-6 leading-relaxed">
                            Making travel planning effortless and personalized through the power of artificial intelligence. Your journey, our roadmap.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 glass-card hover:bg-primary/20 transition-colors">
                                <Github className="w-5 h-5 text-textMuted hover:text-white" />
                            </a>
                            <a href="#" className="p-2 glass-card hover:bg-primary/20 transition-colors">
                                <Linkedin className="w-5 h-5 text-textMuted hover:text-white" />
                            </a>
                            <a href="#" className="p-2 glass-card hover:bg-primary/20 transition-colors">
                                <Twitter className="w-5 h-5 text-textMuted hover:text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-textMuted hover:text-white transition-colors">AI Planner</a></li>
                            <li><a href="#" className="text-textMuted hover:text-white transition-colors">Destinations</a></li>
                            <li><a href="#" className="text-textMuted hover:text-white transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-textMuted hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-textMuted hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-textMuted hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-textMuted">
                        © 2026 VoyageAI. Built with ❤️ for travelers.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-textMuted hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-xs text-textMuted hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
