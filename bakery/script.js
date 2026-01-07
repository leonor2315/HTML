// Highlight active nav link smoothly
document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transition = 'color 0.3s ease';
    link.style.color = '#e63946';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '';
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑ Top";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "#f4d35e";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic greeting
const greeting = document.createElement('div');
greeting.style.textAlign = "center";
greeting.style.padding = "10px";
greeting.style.fontSize = "1.2rem";
greeting.style.color = "#6a4e42";

const hour = new Date().getHours();
if (hour < 12) {
  greeting.innerText = "☀️ Good morning, foodie!";
} else if (hour < 18) {
  greeting.innerText = "🌮 Good afternoon, foodie!";
} else {
  greeting.innerText = "🍷 Good evening, foodie!";
}
document.body.insertBefore(greeting, document.body.firstChild);

// Random recipe suggestion
const randomBtn = document.createElement('button');
randomBtn.innerText = "🎲 Surprise Me!";
randomBtn.style.display = "block";
randomBtn.style.margin = "20px auto";
randomBtn.style.padding = "10px 20px";
randomBtn.style.background = "#e63946";
randomBtn.style.color = "#fff";
randomBtn.style.border = "none";
randomBtn.style.borderRadius = "5px";
randomBtn.style.cursor = "pointer";
document.body.appendChild(randomBtn);

const recipes = [
  "jollof.html","lasagna.html","meatloaf.html","macandcheese.html",
  "shrimp.html","stirfry.html","quesadilla.html","avocado.html",
  "buddha.html","lentilsoup.html","chickpea.html","vegancake.html",
  "cheesecake.html","bananabread.html","redvelvet.html","garlicbread.html",
  "salmon.html","ribs.html","wings.html","beef.html"
];

randomBtn.addEventListener('click', () => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  window.location.href = randomRecipe;
});