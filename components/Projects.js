function Projects() {
    try {
        return (
            <section data-name="projects" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Projects</h2>
                    <div data-name="projects-content" className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Jungle Tavern Projects</h3>
                            <p className="text-gray-700 mb-4">
                                Portfolio Link: <a href="https://linktr.ee/jungle_tavern" 
                                                 className="text-indigo-600 hover:text-indigo-800"
                                                 target="_blank" 
                                                 rel="noopener noreferrer">
                                    https://linktr.ee/jungle_tavern
                                </a>
                            </p>
                            <p className="text-gray-700 mb-4">CTO and Team Lead roles; full solo development for projects since 2024.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Notable Titles</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Tanks A Lot! (High Core Games)</li>
                                <li>Stealth Master (High Core Games)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Projects</h3>
                            <p className="text-gray-700">Several additional titles under NDA.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
