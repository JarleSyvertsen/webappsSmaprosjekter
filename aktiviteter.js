document.querySelector('.test').addEventListener('click', function() {
    const containers = Array.from(document.querySelectorAll('.container'));
    const sortedContainers = containers.sort((a, b) => {
        const aValue = a.querySelector('.number-box').value;
        const bValue = b.querySelector('.number-box').value;
        return aValue - bValue;
    });

    const containerParent = containers[0].parentNode;
    sortedContainers.forEach(container => {
        containerParent.appendChild(container); // Re-append the containers in sorted order
    });
});
