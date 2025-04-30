function App() {
    try {
        return (
            <div data-name="app" className="min-h-screen bg-gray-50">
                <Header />
                <main>
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Education />
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
