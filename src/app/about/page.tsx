export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Welcome to my portfolio! I&apos;m passionate about creating unique and engaging gaming experiences 
          that challenge conventional thinking and bring people together through interactive design.
        </p>
        
        <p className="text-gray-600 mb-6">
          My work spans various forms of interactive entertainment, from puzzle hunts and escape room 
          experiences to innovative game mechanics and creative storytelling approaches. Each project 
          represents an exploration of how games can create meaningful connections and memorable moments.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            I&apos;m always interested in discussing new projects, collaborating on creative endeavors, 
            or sharing insights about game design. Feel free to reach out!
          </p>
          <div className="mt-4 text-gray-500">
            <p>[Contact information will be added here]</p>
          </div>
        </div>
      </div>
    </div>
  );
}