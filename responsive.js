
function handleResponsiveLayout() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        console.log("Small screen layout");
    } else {
        console.log("Large screen layout");
    }
}

window.addEventListener('resize', handleResponsiveLayout);
handleResponsiveLayout();
