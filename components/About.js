function About() {
    try {
        return (
            <section data-name="about" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Professional Summary</h2>
                    <p data-name="about-content" className="text-lg text-gray-700 leading-relaxed">
                        Experienced CTO, Unity Team Lead, and Backend Developer with over 8 years of expertise in game 
                        development, mobile applications, and Web3 technologies. Skilled in leading technical teams, 
                        designing scalable architectures, and delivering high-quality gaming and blockchain-integrated 
                        products. Strong background in Unity (mobile, WebGL), backend development with Python and 
                        blockchain systems. Adept at aligning technical solutions with business goals and driving full 
                        product lifecycle from prototype to live operations.
                    </p>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
