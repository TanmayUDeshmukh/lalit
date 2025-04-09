
    // document.addEventListener("DOMContentLoaded", async function () {
    //     const headerContainer = document.getElementById("header-container");
    //     if (headerContainer) {
    //         try {
    //             const response = await fetch("header.html"); // Fetch the header file
    //             const content = await response.text();
    //             headerContainer.innerHTML = content;

    //             // Execute any script tags inside the imported header
    //             headerContainer.querySelectorAll("script").forEach(script => {
    //                 const newScript = document.createElement("script");
    //                 newScript.textContent = script.textContent;
    //                 document.body.appendChild(newScript);
    //             });
    //         } catch (error) {
    //             console.error("Error loading the header:", error);
    //         }
    //     }
    // });
 


    fetch('header.html')
  .then(r => r.text())
  .then(h => document.getElementById('header').innerHTML = h);

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  
  menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
  });