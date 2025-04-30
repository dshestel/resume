function Skills() {
    try {
        const skills = [
            "Unity Engine (Mobile, WebGL)",
            "C# and Unity Systems Architecture",
            "Python Backend Development (FastAPI, Django)",
            "Web3 Integration (Blockchain, Smart Contracts, NFTs)",
            "Team Leadership & Mentorship",
            "Game Architecture & Systems Design",
            "Free-to-Play Mobile Development and LiveOps",
            "Backend Infrastructure for Games",
            "Optimization & Performance Tuning",
            "Version Control (Git, Plastic SCM)"
        ];

        return (
            <section data-name="skills" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Key Skills</h2>
                    <div data-name="skills-list" className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
