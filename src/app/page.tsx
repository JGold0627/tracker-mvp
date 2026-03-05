"use client";

import { useState } from "react";

type Project = { name: string };

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [name, setName] = useState("");

  const addProject = () => {
    if (!name.trim()) return;
    setProjects((prev) => [...prev, { name: name.trim() }]);
    setName("");
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Project Tracker</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, marginRight: 10 }}
        />
        <button onClick={addProject} style={{ padding: 8 }}>
          Add Project
        </button>
      </div>

      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </main>
  );
}