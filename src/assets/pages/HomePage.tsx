import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cta from "../components/Cta";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section className="bg-[#001F3F]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12  flex-col-reverse lg:flex-row">
          <div className="mr-auto place-self-center lg:col-span-7 order-2 lg:order-1">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              I Help Banks Unlock Millions in USDA Loans & Transform Communities
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Get the proven USDA training for lenders seeking to drive bank
              growth, maximize fee income, and close the deals that matter.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Greg
            </a>
          </div>
          <div className="mt-0 lg:col-span-5 flex order-1 lg:order-2 mb-8">
            <img
              src="./GregOdonnell.png"
              alt="Greg O'Donnell image"
              className="w-full h-96 object-contain lg:h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 dark:bg-white py-32">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-[#001F3F]">
              Testimonials
            </h2>
            <p className=" font-light text-gray-500  sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <blockquote>
              <p className="text-2xl font-medium text-white dark:text-gray-900">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                src="./GregOdonnell.png"
                alt="Cristian Frunze"
                className="w-6 h-6 rounded-full"
              />
              <div className="flex items-center divide-x-2 divide-gray-700 dark:divide-gray-500">
                <div className="pr-3 font-medium text-white dark:text-gray-900">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-400 dark:text-gray-500">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-32 px-4 text-left bg-[#0056A0] text-white">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl mb-6 font-bold font-heading text-center">
            Who am I?
          </h1>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8 flex flex-col items-center md:items-start">
              <img
                src="./GregOdonnell.png"
                alt="Greg O'Donnell"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold font-heading">
                Greg O'Donnell
              </h2>
              <h3 className="text-l font-semibold">
                Managing Member of Guaranteed Lending Specialists, LLC
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <p className="mb-4">
                Award-winning author, consultant, trainer and speaker
              </p>
              <p className="mb-4">
                18+ years dedicated to USDA Guaranteed lending, providing deep,
                up-to-date knowledge of program intricacies.
              </p>
              <p className="mb-4">
                Has originated and placed over $650 million of loans spanning
                over twenty years
              </p>
              <p className="mb-4">
                Author of "The Best-Kept Secret to Improved Bank Profits" book
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Footer />
    </div>
  );
};

export default HomePage;
