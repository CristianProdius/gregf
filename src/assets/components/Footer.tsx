import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-[#001F3F]">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Gref O'Donnell
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://maven.com/p/2f40c5/the-best-kept-secret-to-improved-bank-profits?utm_medium=lead_magnet_share_link&utm_source=instructor"
                    className="hover:underline"
                  >
                    Book
                  </a>
                </li>
                <li>
                  <a
                    href="https://maven.com/gregodonnell/usda-loan?utm_campaign=MTg3NDM0&utm_medium=clp_share_link&utm_source=instructor"
                    className="hover:underline"
                  >
                    Course
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/greg-o-donnell-53586b/"
                    className="hover:underline "
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://maven.com/gregodonnell/usda-loan?utm_campaign=MTg3NDM0&utm_medium=clp_share_link&utm_source=instructor"
                    className="hover:underline"
                  >
                    Maven
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Greg O'Donnell
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/greg-o-donnell-53586b/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <CiLinkedin className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineMail className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
