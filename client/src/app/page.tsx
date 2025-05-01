export default function Home() {
  interface Project {
    title: string;
    description: string;
    sourceUrl?: string;
    reportUrl?: string;
  }

  interface Course {
    code: string;
    name: string;
    term: string;
    description: string;
    items: string[];
  }

  const projects : Project[] = [
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

  const courses : Course[] = [
    {
      code: 'STAT 260',
      name: 'Intro R for Data Science',
      term: 'Spring 2025',
      description: 'Introduction to R programming for data science.',
      items: ['Data visualization', 'Statistical analysis', 'Data wrangling'],
    },
    {
      code: 'CMPT 310',
      name: 'Introduction to Artificial Intelligence',
      term: 'Spring 2025',
      description: 'Overview of AI principles and techniques. Built Q-learning agent and tuned neural networks hyperparameters.',
      items: ['Search algorithms', 'Constraint satisfaction', 'Markov decision processes', 'Reinforcement learning', 'Neural networks'],
    },
    {
      code: 'CMPT 353',
      name: 'Computational Data Science',
      term: 'Spring 2025',
      description: 'Data analysis and basic machine learning using python libraries. Built a data analysis pipeline for a real-world dataset on traffic light analysis.',
      items: ['Data analysis pipeline', 'Machine learning', 'ETL', 'Big Data'],
    },
    {
      code: 'CMPT 361',
      name: 'Introduction to Computer Vision and Computer Graphics',
      term: 'Spring 2025',
      description: 'Study of computer vision algorithms and their implementations, along with computer graphics algorithms. Built panorama stitching and feature detection, along with basic WebGL 2D rasterizer and 3D renderer.',
      items: ['Computer vision', 'Computer graphics'],
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
      <section className="mt-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">Completed Coursework</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.code}
              className="border border-gray-700 p-4 rounded-md hover:border-purple-400 transition"
            >
              <h2 className="text-xl font-semibold text-purple-300 mb-2">
                {course.code}: {course.name}
              </h2>
              <p className="text-gray-300"><strong>Term:</strong> {course.term}</p>
              <p className="text-gray-300 mb-2">{course.description}</p>
              <ul className="list-disc list-inside text-gray-200 mt-2 space-y-1">
                {course.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
