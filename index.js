const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closseBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closseBtn.addEventListener("click", () => {
  sideMenu.style.display = "none ";
});
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  console.log(order);
  console.log("order");
  const tr = document.createElement("tr");
  const trContent = `
                 <td>${order.name}</td>
                 <td>${order.price}</td>
                 <td>${order.stock}</td>
                 <td>${order.ratings}</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
