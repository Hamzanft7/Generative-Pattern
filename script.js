let containerPattern = document.querySelector(".container__pattern");
let btnPattern = document.querySelector(".bg");
let actionBtn = document.querySelector(".actionBtn");
let title = document.querySelector(".title");

let colors = ["#D6BCA6", "#C08E66", "#D92028", "#583522"];
let clip = [
	'circle(50% at 50% 50%)',
	'polygon(0 0, 50% 0, 50% 100.5%, 0% 100.5%)',
	'circle(50% at 0 50%)',
	'polygon(0 0, 100.5% 0, 100.5% 50%, 0 50%)',
	'circle(50% at 100% 50%)',
	'polygon(50% 0, 100.5% 0, 100.5% 100.5%, 50% 100.5%)',
	'circle(50% at 50% 0)',
	'polygon(0 50%, 100.5% 50%, 100.5% 100.5%, 0 100.5%);',
	'circle(50% at 50% 100%)',
	'polygon(0 0, 50% 50%, 100.5% 100.5%, 0% 100.5%)',
	'circle(100% at 0 0)',
	'polygon(0 0, 100.5% 0, 100.5% 100.5%, 50% 50%)',
	'circle(100% at 100% 0)',
	'polygon(50% 50%, 100.5% 0, 100.5% 100.5%, 0 100.5%)',
	'circle(100% at 100% 100%)',
	'circle(100% at 0 100%)',
	'polygon(0 0, 100.5% 0, 50% 50%, 0 100.5%)',
	'circle(10% at 80% 80%)',
	'polygon(0 0, 100.5% 0, 100.5% 100.5%, 0 100.5%)',
	'circle(10% at 20% 20%)',
	'polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)',
	'circle(10% at 80% 20%)',
	'circle(10% at 20% 80%)',
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

for (let i = 0; i < 2; i++) {
  const item = document.createElement("div");
  item.className = "item";
  let bg = random(colors);
  let fg = random(colors);
  while (fg === bg) {
    fg = random(colors);
  }
  item.style.setProperty("--bg-color", bg);
  item.style.setProperty("--fg-color", fg);
  item.style.setProperty("--clip", random(clip));

  const inner = document.createElement("div");
  inner.className = "inner";

  item.append(inner);
  btnPattern.append(item);
  
  title.style.setProperty("--gradient-color-1", bg);
  title.style.setProperty("--gradient-color-2", fg);
}

function addPatterns() {
  containerPattern.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    const item = document.createElement("div");
    item.className = "item";
    let bg = random(colors);
    let fg = random(colors);
    while (fg === bg) {
      fg = random(colors);
    }
    item.style.setProperty("--bg-color", bg);
    item.style.setProperty("--fg-color", fg);
    item.style.setProperty("--clip", random(clip));

    const inner = document.createElement("div");
    inner.className = "inner";

    item.append(inner);
    containerPattern.append(item);
  }
}
addPatterns();

actionBtn.addEventListener("click", addPatterns);