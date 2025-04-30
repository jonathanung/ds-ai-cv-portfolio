export default function Home() {
  const projects = [
    {
      title: 'Traffic YOLO Analysis',
      description: 'A CNN-based web app for classifying images into categories.',
      sourceUrl: 'https://github.com/jonathanung/traffic-yolo-analysis',
      reportUrl: 'https://github.com/jonathanung/traffic-yolo-analysis/blob/master/Report.pdf',
    },
    {
      title: 'BlackjackNN',
      description: 'A neural network for playing blackjack.',
      sourceUrl: 'https://github.com/jonathanung/blackjacknn',
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-4">Computer Vision, AI, and Data Science Projects</h1>
      <p className="mb-8">
        A selection of projects showcasing my work in AI, Data Science, and Computer Vision. For more info, visit{' '}
        <a href="https://jonathanung.ca" className="text-purple-300 underline" target="_blank" rel="noopener noreferrer">
          jonathanung.ca
        </a>.
      </p>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.title}
            className="border border-gray-700 p-4 rounded-md hover:border-purple-400 transition"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  className="text-purple-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              )}
              {project.reportUrl && (
                <a
                  href={project.reportUrl}
                  className="text-purple-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Report / Analysis
              </a>
            )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
