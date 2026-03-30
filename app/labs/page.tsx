import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Lab 1 - Landing Page</h1>
      <p><strong>Name:</strong> Nicolo Lagravinese</p>
      <p><strong>Section:</strong> CS4550.33211.202630</p>
      <h2>Lab assignments</h2>
      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">Lab 4: State Management</Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">Lab 5: HTTP Client & Server</Link>
        </li>
      </ul>
      <p>
        <Link href="/">Kambaz Application</Link>
      </p>
      <h2>Source Repositories</h2>
      <ul>
        <li>
          <Link href="https://github.com/NicLagr/kambaz-next-js/tree/a5" id="wd-github">
            React GitHub Repository
          </Link>
        </li>
        <li>
          <Link href="https://github.com/NicLagr/kambaz-node-server-app" id="wd-server-github">
            Node Server GitHub Repository
          </Link>
        </li>
        <li>
          <Link href="https://kambaz-node-server-app-8njo.onrender.com" id="wd-server-render">
            Node Server (Render)
          </Link>
        </li>
      </ul>
    </div>
  );
}
