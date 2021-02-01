const db = require('./connection');
const { Lesson, Courses } = require('../models');

db.once('open', async () => {
    await Courses.deleteMany();
    const courses = await Courses.insertMany([
        { title: 'Space' },
        { title: 'Science' },
        { title: 'History' },
        { title: 'Mathematics' }
    ]);
    console.log('courses seeded');
    await Lesson.deleteMany();
    const lessons = await Lesson.insertMany([
        {
            courses: courses[0]._id,
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
        },
        {
            courses: courses[1]._id,
            name: 'Grey Goo',
            intro:
                `Gray goo (also spelled grey goo) is a hypothetical global catastrophic scenario involving molecular nanotechnology in which out-of-control self-replicating machines consume all biomass on Earth while building more of themselves, a scenario that has been called ecophagy 
                ("eating the environment", more literally "eating the habitation"). The original idea assumed machines were designed to have this capability, while popularizations have assumed that machines might somehow gain this capability by accident.`,
            content: `The term was first used by molecular nanotechnology pioneer K. Eric Drexler in Engines of Creation (1986). In Chapter 4, Engines Of Abundance, Drexler illustrates both exponential growth and inherent limits (not gray goo) by describing nanomachines that can function only if given special raw materials:
                Imagine such a replicator floating in a bottle of chemicals, making copies of itself...the first replicator assembles a copy in one thousand seconds, the two replicators then build two more in the next thousand seconds, the four build another four, and the eight build another eight. At the end of ten hours, 
                there are not thirty-six new replicators, but over 68 billion. In less than a day, they would weigh a ton; in less than two days, they would outweigh the Earth; in another four hours, they would exceed the mass of the Sun and all the planets combined — if the bottle of chemicals hadn't run dry long before.
                According to Drexler, the term was popularized by an article in science fiction magazine Omni, which also popularized the term "nanotechnology" in the same issue. Drexler says arms control is a far greater issue than gray goo "nanobugs".
                `,
            image: 'https://theinfosphere.org/images/4/47/Benderama_3.png',
            price: 99.99
        },
        {
            courses: courses[2]._id,
            name: 'World War II',
            intro:
                `World War II (WWII or WW2), also known as the Second World War, was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all the great powers—forming two opposing military alliances: the Allies and the Axis. In a state of total war, directly involving 
                more than 100 million personnel from more than 30 countries, the major participants threw their entire economic, industrial, and scientific capabilities behind the war effort, blurring the distinction between civilian and military resources. World War II was the deadliest conflict in human history, resulting 
                in 70 to 85 million fatalities, with more civilians than military personnel killed. Tens of millions of people died due to genocides (including the Holocaust), premeditated death from starvation, massacres, and disease. Aircraft played a major role in the conflict, including in strategic bombing of population 
                centres, the development of nuclear weapons, and the only two uses of such in war.`,
            content: `Chronology: The war in Europe is generally considered to have started on 1 September 1939, beginning with the German invasion of Poland; the United Kingdom and France declared war on Germany two days later. The dates for the beginning of war in the Pacific include the start of the Second Sino-Japanese War 
                on 7 July 1937, or the earlier Japanese invasion of Manchuria, on 19 September 1931. Others follow the British historian A. J. P. Taylor, who held that the Sino-Japanese War and war in Europe and its colonies occurred simultaneously, and the two wars merged in 1941. This article uses conventional dating. Other 
                starting dates sometimes used for World War II include the Italian invasion of Abyssinia on 3 October 1935. The British historian Antony Beevor views the beginning of World War II as the Battles of Khalkhin Gol fought between Japan and the forces of Mongolia and the Soviet Union from May to September 1939. The 
                exact date of the war's end is also not universally agreed upon. It was generally accepted at the time that the war ended with the armistice of 14 August 1945 (V-J Day), rather than with the formal surrender of Japan on 2 September 1945, which officially ended the war in Asia. A peace treaty between Japan and 
                the Allies was signed in 1951. A 1990 treaty regarding Germany's future allowed the reunification of East and West Germany to take place and resolved most post-World War II issues. No formal peace treaty between Japan and the Soviet Union was ever signed.
                `,
            image: 'https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTU3ODc4NjAwMzAyMTQzMTk5/image-placeholder-title.jpg',
            price: 19.99
        },
        {
            courses: courses[3]._id,
            name: 'Geometry',
            intro:
                `Geometry (from the Ancient Greek: γεωμετρία; geo- "earth", -metron "measurement") is, with arithmetic, one of the oldest branches of mathematics. It is concerned with properties of space that are related with distance, shape, size, and relative position of figures. A mathematician who works in the field of 
                geometry is called a geometer.`,
            content: ` The earliest recorded beginnings of geometry can be traced to ancient Mesopotamia and Egypt in the 2nd millennium BC. Early geometry was a collection of empirically discovered principles concerning lengths, angles, areas, and volumes, which were developed to meet some practical need in surveying, 
                construction, astronomy, and various crafts. The earliest known texts on geometry are the Egyptian Rhind Papyrus (2000–1800 BC) and Moscow Papyrus (c. 1890 BC), the Babylonian clay tablets such as Plimpton 322 (1900 BC). For example, the Moscow Papyrus gives a formula for calculating the volume of a truncated 
                pyramid, or frustum. Later clay tablets (350–50 BC) demonstrate that Babylonian astronomers implemented trapezoid procedures for computing Jupiter's position and motion within time-velocity space. These geometric procedures anticipated the Oxford Calculators, including the mean speed theorem, by 14 centuries.
                South of Egypt the ancient Nubians established a system of geometry including early versions of sun clocks. Two New Developments: Two developments in geometry in the 19th century changed the way it had been studied previously. These were the discovery of non-Euclidean geometries by Nikolai Ivanovich Lobachevsky, 
                János Bolyai and Carl Friedrich Gauss and of the formulation of symmetry as the central consideration in the Erlangen Programme of Felix Klein (which generalized the Euclidean and non-Euclidean geometries). Two of the master geometers of the time were Bernhard Riemann (1826–1866), working primarily with tools from 
                mathematical analysis, and introducing the Riemann surface, and Henri Poincaré, the founder of algebraic topology and the geometric theory of dynamical systems. As a consequence of these major changes in the conception of geometry, the concept of "space" became something rich and varied, and the natural background 
                for theories as different as complex analysis and classical mechanics.
                `,
            image: 'https://previews.123rf.com/images/microone/microone1811/microone181100050/128173156-doodle-maths-and-geometry-concept-trigonometry-functions-charts-and-mathematical-formulas-vector-sch.jpg',
            price: 29.99
        }
    ]);
    console.log('lessons seeded');
    process.exit();
});