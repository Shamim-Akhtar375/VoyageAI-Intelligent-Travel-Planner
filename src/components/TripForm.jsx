import React, { useState } from 'react';
import { Plane, Calendar, Wallet, Heart, Loader2 } from 'lucide-react';

const TripForm = ({ onGenerate }) => {
    const [formData, setFormData] = useState({
        destination: '',
        duration: '3',
        budget: 'mid',
        preference: 'culture'
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.destination) return;

        setLoading(true);
        // Simulate AI generation delay
        setTimeout(() => {
            onGenerate(formData);
            setLoading(false);
            document.getElementById('itinerary-result')?.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    };

    return (
        <section id="planner-form" className="py-20 bg-background/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Plane className="w-32 h-32" />
                    </div>

                    <h2 className="text-3xl font-bold mb-8">Trip Preferences</h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="label-text">Where to?</label>
                            <div className="relative">
                                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                                <input
                                    type="text"
                                    placeholder="e.g. Paris, Tokyo, Bali"
                                    className="input-field w-full pl-11"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="label-text">Duration (Days)</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                                <select
                                    className="input-field w-full pl-11 appearance-none"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                >
                                    {[2, 3, 4, 5, 6, 7].map(num => (
                                        <option key={num} value={num}>{num} Days</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="label-text">Budget Range</label>
                            <div className="relative">
                                <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                                <select
                                    className="input-field w-full pl-11 appearance-none"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="economy">Economy (Budget friendly)</option>
                                    <option value="mid">Mid-range (Balanced)</option>
                                    <option value="luxury">Luxury (Premium)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="label-text">What do you love most?</label>
                            <div className="relative">
                                <Heart className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted" />
                                <select
                                    className="input-field w-full pl-11 appearance-none"
                                    value={formData.preference}
                                    onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                                >
                                    <option value="culture">Culture & History</option>
                                    <option value="nature">Nature & Outdoors</option>
                                    <option value="food">Food & Culinary</option>
                                    <option value="adventure">Adventure & Sports</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                        Generating your dream trip...
                                    </>
                                ) : (
                                    'Generate Itinerary'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TripForm;
