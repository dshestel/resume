function Experience() {
    try {
        const experiences = [
            {
                company: "Jungle Tavern",
                position: "CTO / Unity Team Lead / Backend Developer",
                period: "2021 – Present",
                responsibilities: [
                    "Led the technical direction of the studio, overseeing mobile game and WebGL project development",
                    "Independently developed and launched multiple successful games since 2024",
                    "Designed and implemented backend services in Python for games and internal tools",
                    "Integrated blockchain technologies (Web3) into gaming ecosystems",
                    "Managed a development team, handled technical planning, code reviews, and mentoring"
                ]
            },
            {
                company: "High Core Games",
                position: "Unity Developer",
                period: "2019 – 2021",
                responsibilities: [
                    "Worked on major mobile games including Tanks A Lot! and Stealth Master",
                    "Focused on gameplay systems, feature implementation, and performance optimization",
                    "Participated in projects under NDA requiring secure and scalable architecture"
                ]
            },
            {
                company: "Freelance",
                position: "Unity Developer / Backend Developer",
                period: "2018 – 2019",
                responsibilities: [
                    "Created MVPs and prototypes for startups in gaming and app development sectors",
                    "Built backend systems supporting multiplayer and live features"
                ]
            },
            {
                company: "Arrm.io",
                position: "Junior Unity Developer",
                period: "2017 – 2018",
                responsibilities: [
                    "Assisted in building and maintaining multiplayer mobile games",
                    "Strengthened core Unity and programming skills"
                ]
            }
        ];

        return (
            <section data-name="experience" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Work Experience</h2>
                    <div data-name="experience-list" className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="timeline-item">
                                <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                                <p className="text-lg text-indigo-600">{exp.position}</p>
                                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Experience component error:', error);
        reportError(error);
        return null;
    }
}
