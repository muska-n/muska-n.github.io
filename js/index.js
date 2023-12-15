document.querySelector("#form").addEventListener("submit", event =>{
  event.preventDefault()
  console.log(event.target.col.value)
  document.body.style.background = event.target.col.value
})

const tabElements = document.querySelectorAll('button[role="tab"]');
const panelElements = document.querySelectorAll('[role="tabpanel"]');
let activeIndex = 0;

tabElements.forEach(function (tab, index) {
  tab.addEventListener("click", function (event) {
    setActiveTab(index);
  });
});

function setActiveTab(index) {
  tabElements[activeIndex].setAttribute("aria-selected", "false");
  tabElements[activeIndex].tabIndex = -1;

  tabElements[index].setAttribute("aria-selected", "true");
  tabElements[index].tabIndex = 0;
  tabElements[index].focus();

  setActivePanel(index);
  activeIndex = index;
}
function setActivePanel(index) {
  panelElements[activeIndex].setAttribute("hidden", "");
  panelElements[activeIndex].tabIndex = -1;
  panelElements[index].removeAttribute("hidden");
  panelElements[index].tabIndex = 0;
}

tabElements.forEach(function (tab, index) {
  
  tab.addEventListener("keydown", function (event) {
    const lastIndex = tabElements.length - 1;

    if (event.code === "ArrowLeft" || event.code === "ArrowUp") {
      event.preventDefault();

      if (activeIndex === 0) {
        setActiveTab(lastIndex);
      } else {
        setActiveTab(activeIndex - 1);
      }
    } else if (event.code === "ArrowRight" || event.code === "ArrowDown") {
      event.preventDefault();

      if (activeIndex === lastIndex) {
        setActiveTab(0);
      } else {
        setActiveTab(activeIndex + 1);
      }
    } else if (event.code === "Home") {
      event.preventDefault();

      setActiveTab(0);
    } else if (event.code === "End") {
      event.preventDefault();

      setActiveTab(lastIndex);
    }
  });
});
