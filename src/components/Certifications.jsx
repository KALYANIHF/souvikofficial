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
            className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="p-6">
              <div className="grid justify-items-end-safe lg:grid-cols-2">
                <h3 className="text-sm font-semibold">{item.certificate}</h3>
                {item.icon}
              </div>

              <p className="grid grid-flow-row-dense gap-2 items-center grid-cols-2">
                <a href={item.path} target="_blank">
                  <GrView />
                </a>
                <a href={item.path} download={`${item.certificate}.pdf`}>
                  <FaDownload />
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
