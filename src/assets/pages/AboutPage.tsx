import NavBar from "../components/NavBar";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <NavBar />

      <section className="bg-white dark:bg-[#001F3F]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Greg O'Donnell
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Managing Member of Guaranteed Lending Specialists, LLC
              Award-winning author, consultant, trainer and speake
            </p>
            <a
              href="mailto:grego@glsusda.com"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <div className="py-12 bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Partner in Unlocking USDA's Transformative Potential
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              For over 18 years, I've dedicated my career to a singular focus:
              helping banks and lenders harness the power of USDA Guaranteed
              loans to achieve extraordinary results. My deep expertise in this
              niche allows me to guide clients through the complexities of the
              program, maximizing their returns while minimizing risk. My
              knowledge of USDA guidelines and my proven systems for
              transforming lenders into confident experts sets me apart. My
              clients have successfully closed deals and become their bank's
              driving force for growth and positive community impact.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why I'm Passionate About Rural Lending
            </h2>
            <p className="text-gray-700 text-lg">
              Early in my career, I witnessed the struggle of rural businesses
              with immense potential held back by limited financing options. I
              saw the ripple effects – missed opportunities for job creation,
              stifled economic development, and communities left behind. I
              resolved to change that dynamic. USDA Guaranteed loans became my
              tool to empower banks to become catalysts for revitalization. It's
              incredibly rewarding to partner with financial institutions and
              see the tangible impact on business expansion, new jobs, and
              stronger local economies.
            </p>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default AboutPage;
