import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/* Total number of published courses */}
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="reactjs" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/nodejs.jpg" width={200} height={150} alt="nodejs" />
            <div>
              <h5> CS5678 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/9012" className="wd-dashboard-course-link">
            <Image src="/images/mongodb.jpg" width={200} height={150} alt="mongodb" />
            <div>
              <h5> CS9012 MongoDB </h5>
              <p className="wd-dashboard-course-title">
                Database Management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/typescript.jpg" width={200} height={150} alt="typescript" />
            <div>
              <h5> CS3456 TypeScript </h5>
              <p className="wd-dashboard-course-title">
                Type-safe JavaScript
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/7890" className="wd-dashboard-course-link">
            <Image src="/images/css.jpg" width={200} height={150} alt="css" />
            <div>
              <h5> CS7890 CSS </h5>
              <p className="wd-dashboard-course-title">
                Web Styling
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/2468" className="wd-dashboard-course-link">
            <Image src="/images/html.jpg" width={200} height={150} alt="html" />
            <div>
              <h5> CS2468 HTML </h5>
              <p className="wd-dashboard-course-title">
                Web Structure
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/courses/1357" className="wd-dashboard-course-link">
            <Image src="/images/javascript.jpg" width={200} height={150} alt="javascript" />
            <div>
              <h5> CS1357 JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Web Programming
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

