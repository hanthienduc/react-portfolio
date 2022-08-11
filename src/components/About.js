import logo from "../coding.svg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Han.
            <br className="hidden lg:inline-block" /> A Front-End Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Passionate in Developing Web applications, and have strong ability
            to adopt new tools and technologies.
          </p>
          <div className="flex justify-center mt-1 flex-wrap gap-2">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Work
            </a>

            <a
              href="https://docs.google.com/document/d/173uqJVlqff2acjn9K7t-qGw3aCu3MY_sEd3UQieWOfQ/edit"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded bg-white-800"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
}
