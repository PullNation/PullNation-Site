const sampleData = [
  { truck: "Redline Diesel", points: 28, class: "2.6 Diesel" },
  { truck: "Iron Horse", points: 25, class: "3.0 Limited Pro" },
  { truck: "Turbo Sledder", points: 22, class: "2.6 Diesel" },
  { truck: "Green Giant", points: 20, class: "Mod Tractor" }
];

const pulls = [
  { event: "Spring Nationals", date: "2025-06-28", finish: "1st", points: 10 },
  { event: "Lone Star Shootout", date: "2025-06-21", finish: "2nd", points: 8 }
];

// Leaderboard
if (document.getElementById("leaderboard")) {
  const table = document.getElementById("leaderboard");
  sampleData.forEach((entry, i) => {
    const row = `<tr><td>${i + 1}</td><td>${entry.truck}</td><td>${entry.points}</td><td>${entry.class}</td></tr>`;
    table.innerHTML += row;
  });

  document.getElementById("classFilter").addEventListener("change", function () {
    const value = this.value;
    table.innerHTML = "";
    sampleData
      .filter(d => value === "all" || d.class === value)
      .forEach((entry, i) => {
        const row = `<tr><td>${i + 1}</td><td>${entry.truck}</td><td>${entry.points}</td><td>${entry.class}</td></tr>`;
        table.innerHTML += row;
      });
  });
}

// Recent pulls
if (document.getElementById("recentPulls")) {
  pulls.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.date}: ${p.event} – ${p.finish} place (${p.points} pts)`;
    document.getElementById("recentPulls").appendChild(div);
  });
}
