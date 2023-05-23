import { Navbar, Home, About, Skills, Work, Contact } from "./components";

// observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

setTimeout(() => {
  const hiddenSections = document.querySelectorAll(".hided");
  hiddenSections.forEach((el) => observer.observe(el));
}, 100);

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;
