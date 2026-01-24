import Link from "next/link";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/assignments/123`}
                className="wd-assignment-link">
            A1 - ENV + HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/assignments/124`}
                className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/assignments/125`}
                className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </Link>
        </li>
      </ul>
      <h3 id="wd-quizzes-title">
        QUIZZES 10% of Total <button>+</button>
      </h3>
      <ul id="wd-quiz-list">
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/quizzes/q1`}
                className="wd-assignment-link">
            Q1 - HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/quizzes/q2`}
                className="wd-assignment-link">
            Q2 - CSS
          </Link>
        </li>
      </ul>
      <h3 id="wd-exams-title">
        EXAMS 20% of Total <button>+</button>
      </h3>
      <ul id="wd-exam-list">
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/exams/midterm`}
                className="wd-assignment-link">
            Midterm
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/exams/final`}
                className="wd-assignment-link">
            Final
          </Link>
        </li>
      </ul>
      <h3 id="wd-project-title">
        PROJECT 30% of Total <button>+</button>
      </h3>
      <ul id="wd-project-list">
        <li className="wd-assignment-list-item">
          <Link href={`/courses/${cid}/projects/p1`}
                className="wd-assignment-link">
            Project - Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}

