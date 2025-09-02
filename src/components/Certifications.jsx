import certification from "../_data/certificate";
import { GrView } from "react-icons/gr";
import { FaDownload } from "react-icons/fa6";
function Certifications() {
  /**
   * @returns {JSX.Element} The JSX element representing the Certifications section.
   * @description This function returns a JSX element representing the Certifications section of the application. It includes a heading, a paragraph, and a grid of articles, each containing an image and a description of a certification. The articles are styled with hover effects and are arranged in a grid layout. The function also includes data attributes for AOS (Animate on Scroll) to animate the elements
   * the name of certifications
   * 1. CORE PHP MVC
   * 2. NODE JS
   * 3. REACT JS
   * 4. CORE JAVASCRIPT (ES6)
   * 5. GIT
   * 6. DOCKER
   * 7. KUBERNITIES
   * 8. LINUX
   * 9. DEV OPS
   * 10. NEXT JS
   */

  return (
    <section
      id="certificate"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">My Certification's</h2>
        <p className="mt-2 text-sm text-dark/60">
          A selection of certifications and achievements. want to see what
          skills i have look into this
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {certification.map((item) => (
          <article
            key={item._id}
            className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="p-6  ">
              <div className="flex items-center gap-2 mb-4">
                {item.icon}
                <h3 className="text-base font-semibold text-white-800">
                  {item.certificate}
                </h3>
              </div>
              <div className="flex gap-3 mt-4 w-full">
                <a
                  href={item.path}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-1/2 px-4 py-2 rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 hover:text-green-800 transition"
                  style={{ width: "50%" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"
                    ></path>
                  </svg>
                </a>
                <a
                  href={item.path}
                  download={`${item.certificate}.pdf`}
                  className="flex items-center justify-center gap-2 w-1/2 px-4 py-2 rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 hover:text-green-800 transition"
                  style={{ width: "50%" }}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
