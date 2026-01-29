import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
                    <Sparkles className="w-4 h-4" />
                    <span>AI-Powered Travel Planning</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight animate-slide-up">
                    Plan smarter.<br />
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                        Travel better.
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-textMuted mb-10 leading-relaxed animate-slide-up [animation-delay:200ms]">
                    Create personalized trip itineraries powered by AI. Explore the world exactly how you want, without the stress of planning.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:400ms]">
                    <button
                        onClick={() => document.getElementById('planner-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary px-8 py-3 text-lg w-full sm:w-auto"
                    >
                        Start Planning
                    </button>
                    <button className="btn-outline px-8 py-3 text-lg w-full sm:w-auto">
                        View Example
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
