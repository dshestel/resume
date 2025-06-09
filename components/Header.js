function Header() {
    try {
        return (
            <header data-name="header" className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div data-name="header-info" className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div data-name="profile-photo" className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                                <img 
                                    src="https://app.trickle.so/storage/public/images/usr_0f94e9deb8000001/ed04f976-8242-4f03-b6df-0dd0057bfd7e.jpeg" 
                                    alt="Dzmitry Shestsel" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl font-bold text-gray-900">Dzmitry Shestsel</h1>
                                <p className="text-xl text-gray-600 mt-2">CTO | Unity Team Lead | Backend Developer</p>
                            </div>
                        </div>
                        <div data-name="header-links" className="flex space-x-4 mt-4 md:mt-0">
                            <a href="https://www.linkedin.com/in/dzmitry-shestsel-5bb01214b" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-gray-600 hover:text-indigo-600 transition-colors">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="https://t.me/dshestel" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-gray-600 hover:text-indigo-600 transition-colors">
                                <i className="fas fa-link text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
