function Projects() {
    try {
        return (
            <section data-name="projects" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Projects</h2>
                    <div data-name="projects-content" className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Notable Titles</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.idspe.tanks2&hl=en"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-indigo-600 hover:text-indigo-800">
                                        Tanks A Lot!
                                    </a> (High Core Games)
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.stealthgame.master&hl=en"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-indigo-600 hover:text-indigo-800">
                                        Stealth Master
                                    </a> (High Core Games)
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.JungleTavern.minemaster"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-indigo-600 hover:text-indigo-800">
                                        Build Brigade: Mighty Machines
                                    </a> (Jungle Tavern)
                                </li>
                                <li>
                                    <a href="https://t.me/richie_mayor_bot"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-indigo-600 hover:text-indigo-800">
                                        Richie - Metapolis Mayor
                                    </a> (Jungle Tavern)
                                </li>
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
