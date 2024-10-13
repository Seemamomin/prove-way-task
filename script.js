function toggleExpandable(expandableId) {
    const expandables = document.querySelectorAll('.expandable-content');
    expandables.forEach((expandable) => {
        expandable.style.display = 'none'; // Hide all
    });
    const selectedExpandable = document.getElementById(expandableId);
    if (selectedExpandable) {
        selectedExpandable.style.display = 'block'; // Show selected
    }
}

// By default, show the expandable content for the first option
toggleExpandable('expandable2');
