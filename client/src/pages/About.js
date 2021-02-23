import Brian from '../assets/images/brian.png';
import Peyton from '../assets/images/peyton.png';
import React from 'react';
import Tom from '../assets/images/tom.png';

function About() {

    return (
        <section>
            <h1 className="about-header">
                About
            </h1>
            <section className="flex-row about-wrapper">
                <div className="about-container">
                    <div className="about-one">
                        <img
                            src={Tom}
                            alt="headshot-tom"
                            className='about-img'
                        />
                        <div className="about-content">
                            <h2>Tom Chestnut</h2>
                            <p>
                                Tom is a Full-Stack Developer specializing in MERN stack development and skilled in
                                creating responsive web applications. Earned a Full Stack Development Certificate
                                from University of Pennsylvania LPS Coding Bootcamp. Background in EHS and Waste
                                Management with skills in planning, organization and logistical problem solving.
                                Tom has utilized these skills to create multiple projects using front-end technologies
                                such as JavaScript, React, HTML, and CSS as well as back-end tools like Node.js,
                                Express.js, MongoDB, GraphQL and MySQL while following development methods such as
                                Agile development, RESTful APIs, MVC structure and Single Page Applications (SPAs).
                            </p>
                        </div>
                    </div>
                    <div className="about-two">
                        <img
                            src={Peyton}
                            alt="headshot-peyton"
                            className='about-img'
                        />
                        <div className="about-content">
                            <h2>Peyton Schlafley</h2>
                            <p>
                                Peyton is a Full-Stack web developer. Throughout his life, he has always been involved in 
                                sports and soccer was his favorite. The best part is the competitiveness of the sport, but 
                                also how much of a team sport it is. You can't win a game without good communication, and 
                                the ability to solve problems and look for ways to score goals. He is a hard worker with good communication, 
                                problem solving skills, and a willingness to take on new challenges and learn new skills.
                                Recently graduated with a certificate in full stack Web Development from the University 
                                of Pennsylvania's Coding Bootcamp, who partners with Trilogy Education Services, where he learned 
                                learned the technical skills needed to be a highly effective and efficient Web Developer. With 
                                proficiency in the MERN stack, which includes MondoDB, Express, React, and Node.js.
                            </p>
                        </div>
                    </div>
                    <div className="about-three">
                        <img
                            src={Brian}
                            alt="headshot-brian"
                            className='about-img'
                        />
                        <div className="about-content">
                            <h2>Brian Spiewak</h2>
                            <p>
                                Born and raised in Philly, Brian moved to New York City 11 years ago and haven't looked back, aside from his 
                                sports allegiances which will never leave Broad Street. Brian's career thus far has been in the finance world
                                working for an asset management company where he was at the helm of a 10-person marketing department. The 
                                team was the centralized agency at the heart of this publicly traded company that sold securities and built 
                                portfolios in many different real estate sectors. The company also had subsidiaries in technology, research 
                                and financial advice. Additionally, the team worked tirelessly on the innovation, branding, communications and 
                                outreach for the entire company and its six business lines. Just last year, Brian took on a new challenge in 
                                the form of something he has always been interested in, web development. He attended and graduated from the 
                                UPenn Coding Bootcamp. Now having a better understanding of both front-end and back-end 
                                technologies, he can put these skills to work and enjoy seeing his work come to life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;