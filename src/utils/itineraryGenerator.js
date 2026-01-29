export const generateItinerary = (params) => {
    const { destination, duration, budget, preference } = params;
    const numDays = parseInt(duration);

    const activityTemplates = {
        culture: [
            {
                time: '09:00 AM',
                title: 'Historic District Tour',
                description: 'Guided walk through the oldest streets and landmarks of {dest}. Learn about the local heritage.',
                location: 'Old Town'
            },
            {
                time: '01:00 PM',
                title: 'National Museum Visit',
                description: 'Explore the vast collections of art and artifacts that define the history of {dest}.',
                location: 'City Center'
            },
            {
                time: '07:00 PM',
                title: 'Traditional Performance',
                description: 'Enjoy a live show of local fold music or classical theatre.',
                location: 'Grand Theatre'
            }
        ],
        nature: [
            {
                time: '08:00 AM',
                title: 'Botanical Garden Hike',
                description: 'Early morning trek through lush landscapes and unique flora of {dest}.',
                location: 'Green Hill Reserve'
            },
            {
                time: '02:00 PM',
                title: 'Lake Picnic & Viewpoint',
                description: 'Relax by the water and catch stunning panoramic views of the surrounding mountains.',
                location: 'Mirror Lake'
            },
            {
                time: '06:00 PM',
                title: 'Sunset Coastline Walk',
                description: 'Scenic walk along the cliffs as the sun sets over the horizon.',
                location: 'Ocean Vista'
            }
        ],
        food: [
            {
                time: '10:00 AM',
                title: 'Coffee Roastery & Pastry Tour',
                description: 'Start your day with the best local roasts and famous traditional desserts of {dest}.',
                location: 'Artisans Quarter'
            },
            {
                time: '01:00 PM',
                title: 'Street Food Market Hop',
                description: 'Sample over 10 different local delicacies from the city\'s oldest food stalls.',
                location: 'Central Market'
            },
            {
                time: '08:00 PM',
                title: 'Fine Dining / Chef\'s Table',
                description: 'A multi-course dinner focusing on seasonal and local ingredients with a modern twist.',
                location: 'Culinary Row'
            }
        ],
        adventure: [
            {
                time: '07:30 AM',
                title: 'Peak Summit Climb',
                description: 'A challenging but rewarding ascent to the highest point in regional {dest}.',
                location: 'Cloud Peak'
            },
            {
                time: '01:30 PM',
                title: 'Whitewater Rafting',
                description: 'Exhilarating ride down the rapids with experienced local guides.',
                location: 'River Gorge'
            },
            {
                time: '09:00 PM',
                title: 'Night Jungle Walk',
                description: 'Discover nocturnal wildlife and the mysterious sounds of nature after dark.',
                location: 'Wild Echo Trail'
            }
        ]
    };

    const getDayItinerary = (dayNum) => {
        // Pick activities based on preference and rotate/randomize slightly
        const baseActivities = activityTemplates[preference] || activityTemplates.culture;

        return baseActivities.map(act => ({
            ...act,
            title: act.title.replace('{dest}', destination),
            description: act.description.replace('{dest}', destination)
        }));
    };

    const itinerary = Array.from({ length: numDays }, (_, i) => ({
        day: i + 1,
        activities: getDayItinerary(i + 1)
    }));

    return {
        destination,
        duration,
        budget,
        preference,
        itinerary
    };
};
