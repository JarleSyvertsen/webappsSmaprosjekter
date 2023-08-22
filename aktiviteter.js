document.querySelector('.test').addEventListener('click', function() {
    const containers = Array.from(document.querySelectorAll('.container'));
    const sortedContainers = containers.sort((a, b) => {
        const aValue = a.querySelector('.number-box').value;
        const bValue = b.querySelector('.number-box').value;
        return aValue - bValue;
    });

    const bodyElement = document.querySelector('body');
    const containerButton = document.querySelector('.containerbutton');

    sortedContainers.forEach(container => {
        bodyElement.insertBefore(container, containerButton); // Insert each container before the containerbutton
    });
});
