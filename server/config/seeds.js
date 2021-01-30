const db = require('./connection');
const { Lesson, Courses } = require('../models');
db.once('open', async () => {
    await Courses.deleteMany();
    const courses = await Courses.insertMany([
        { title: 'Astronomy' },
        // { title: 'Grey Goo' },
        // { title: 'World War II' },
        // { title: 'Geometry' }
    ]);
    console.log('courses seeded');
    await Lesson.deleteMany();
    const lessons = await Lesson.insertMany([
        {
            courseName: courses[0]._id,
            name: 'Astronomy',
            intro:
                `Astronomy (from Greek: ἀστρονομία, literally meaning the science that studies the laws of the stars) is a natural science that studies celestial objects and phenomena. 
        It uses mathematics, physics, and chemistry in order to explain their origin and evolution. Objects of interest include planets, moons, stars, nebulae, galaxies, and comets. 
        Relevant phenomena include supernova explosions, gamma ray bursts, quasars, blazars, pulsars, and cosmic microwave background radiation. More generally, astronomy studies everything that originates outside Earth's atmosphere. Cosmology is a branch of astronomy. It studies the Universe as a whole.`,
            content: `Radius of the Earth: The Greek mathematician and astronomer Eratosthenes calculated this in 200 B.C.. He knew that on a particular day in Syene, the sun would be directly overhead. He set up a stick in Alexandria 5,000 stadia away (800-900 kilometres) on this day, and measured the angle of the shadow that the sun formed at midday. 
        He measured this to be 7.2°. He deduced that this is the same angle from the Earth's centre that the distance between the two cities represents.
        Since there are 360° in a circle, he worked out that 5,000 stadia is one-fiftieth of the circumference of the Earth. He therefore suggested the value of 250,000 stadia (40,000-46,000km).
        Astronomers recently measured it using satellite equipment and submitted the figure of 40,008 km. Distance to the Moon: The distance to the moon can be determined by considering a very large imaginary triangle, and was first put forward by the Greek Hipparchus about 100 years after Eratosthenes suggested the radius of the Earth.
        The moon is known to be directly overhead in one place, so if the place can be found where the moon is on the horizon at this time and the distance measured, it gives us the base for a very long, thin triangle.
        `,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/The_Galactic_Centre_and_Bulge_above_the_ESO_3.6-metre_telescope.jpg',
            price: 9.99
        }
    ]);
});
console.log('lessons seeded');