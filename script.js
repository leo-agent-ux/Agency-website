const elements = document.querySelectorAll(".card, h1, h2, p, .btn");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
},{threshold:0.1});

elements.forEach(el=>{
el.style.opacity = 0;
el.style.transform = "translateY(20px)";
el.style.transition = "all 0.9s cubic-bezier(0.2,0.8,0.2,1)";
observer.observe(el);
});
