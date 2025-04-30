function Education() {
    try {
        return (
            <section data-name="education" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Education</h2>
                    <div data-name="education-content" className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900">Bachelor's Degree in Information Technology</h3>
                        <p className="text-lg text-gray-700 mt-2">Belarusian State University of Informatics and Radioelectronics</p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Education component error:', error);
        reportError(error);
        return null;
    }
}
