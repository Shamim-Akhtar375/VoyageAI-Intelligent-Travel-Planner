import React, { useState } from 'react';
import { Clock, MapPin, ChevronDown, RefreshCw, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DayCard = ({ day, activities, isOpen, onToggle }) => {
    return (
        <div className="glass-card overflow-hidden mb-4">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                        {day}
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-semibold">Day {day} Exploration</h3>
                        <p className="text-textMuted text-sm">{activities.length} activities planned</p>
                    </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-textMuted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border"
                    >
                        <div className="p-6 space-y-6">
                            {activities.map((activity, idx) => (
                                <div key={idx} className="flex gap-4 relative">
                                    {idx !== activities.length - 1 && (
                                        <div className="absolute left-2.5 top-10 bottom-[-1.5rem] w-0.5 bg-border" />
                                    )}
                                    <div className="w-5 h-5 rounded-full bg-accent/20 border-2 border-accent mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Clock className="w-4 h-4 text-accent" />
                                            <span className="text-xs font-medium text-accent uppercase tracking-wider">{activity.time}</span>
                                        </div>
                                        <h4 className="text-lg font-medium text-white mb-2">{activity.title}</h4>
                                        <p className="text-textMuted text-base mb-3 leading-relaxed">{activity.description}</p>
                                        <div className="flex items-center gap-2 text-sm text-textMuted/80">
                                            <MapPin className="w-4 h-4" />
                                            <span>{activity.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ItineraryDisplay = ({ data, onRegenerate }) => {
    const [openDay, setOpenDay] = useState(1);

    if (!data) return null;

    return (
        <section id="itinerary-result" className="py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-3 tracking-tight">Your {data.destination} Adventure</h2>
                        <p className="text-textMuted">Customized for {data.budget} budget and {data.preference} lovers.</p>
                    </div>
                    <button
                        onClick={onRegenerate}
                        className="btn-outline flex items-center gap-2 px-6"
                    >
                        <RefreshCw className="w-4 h-4" />
                        <span className="hidden sm:inline">Regenerate</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {data.itinerary.map((dayData) => (
                        <DayCard
                            key={dayData.day}
                            day={dayData.day}
                            activities={dayData.activities}
                            isOpen={openDay === dayData.day}
                            onToggle={() => setOpenDay(openDay === dayData.day ? null : dayData.day)}
                        />
                    ))}
                </div>

                <div className="mt-12 p-8 glass-card border-dashed border-primary/30 flex flex-col md:flex-row items-center gap-8">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                        <Star className="w-12 h-12 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Ready to book this trip?</h4>
                        <p className="text-textMuted mb-4">Export your itinerary as a PDF or sync it with your Google Calendar to stay organized during your travels.</p>
                        <div className="flex gap-4">
                            <button className="btn-primary text-sm py-2 px-6">Download PDF</button>
                            <button className="btn-outline text-sm py-2 px-6">Sync Calendar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItineraryDisplay;
