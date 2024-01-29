// Counter variable for tracking likes and dislikes
let counter = 0;

// Array containing information about each employee
const employeeInfo = [
    {
        image: 'https://www.piranhaphotography.com/blog/wp-content/uploads/2012/02/employee-photograph.jpg',
        thoughts: 'I love working at Air Canada! The team spirit is amazing.',
        jobTitle: 'Software Developer'
    },
    {
        image: 'http://toksu.com.br/wp-content/uploads/2018/11/man-in-office.jpg',
        thoughts: 'Air Canada is a great place for personal and professional growth.',
        jobTitle: 'UX Designer'
    },
    {
        image: 'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-855-700x467.jpg',
        thoughts: 'The work environment at Air Canada is fantastic. I enjoy every day.',
        jobTitle: 'Marketing Specialist'
    },
    {
        image: 'https://images.infobloom.com/man-in-blue-shirt-giving-presentation.jpg',
        thoughts: 'Being a part of Air Canada brings a sense of pride and accomplishment.',
        jobTitle: 'Customer Service Representative'
    }
    // Add more employee info as needed
];

// Function to toggle the visibility of the navigation bar
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const employeeTabs = document.getElementById('employeeTabs');

    // Check if the navbar is currently hidden or empty
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block';
        employeeTabs.style.display = 'none';
    } else {
        navbar.style.display = 'none';
    }
}

// Function to update the like counter based on user input
function updateCounter(value) {
    counter += value;
    const likeCounter = document.getElementById('likeCounter');
    likeCounter.innerText = counter;

    // Determine the color of the counter based on its value
    const counterColor = counter > 0 ? 'white' : (counter < 0 ? 'red' : 'black');
    likeCounter.style.color = counterColor;
}

// Function to reset the like counter
function resetCounter() {
    counter = 0;
    const likeCounter = document.getElementById('likeCounter');
    likeCounter.innerText = counter;
    likeCounter.style.color = 'black';
}

// Function to change the background color of the page
function changeColorScheme() {
    const body = document.body;

    // Generate a random color
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to display information about a specific employee
function showEmployeeInfo(employeeIndex) {
    const employee = employeeInfo[employeeIndex - 1];
    const employeeImage = document.getElementById('employeeImage');
    const employeeThoughts = document.getElementById('employeeThoughts');
    const employeeJobTitle = document.getElementById('employeeJobTitle');

    // Update the displayed information
    employeeImage.src = employee.image;
    employeeThoughts.innerText = employee.thoughts;
    employeeJobTitle.innerText = employee.jobTitle;
}

// Function to handle a special action (e.g., applying to Air Canada)
function handleSpecialAction() {
    // Display a confirmation dialog
    const applyConfirmation = window.confirm('Do you want to apply to Air Canada?');

    // Check if the user clicked "OK" (true)
    if (applyConfirmation) {
        // Redirect to the Air Canada application page
        window.location.href = 'https://aircanada.com/careers';
    }
}

// Function to show the "Rate Us" buttons and hide employee tabs
function showRateUsButtons() {
    const rateUsButtons = document.getElementById('rateUsButtons');
    const employeeTabs = document.getElementById('employeeTabs');

    rateUsButtons.style.display = 'block';
    employeeTabs.style.display = 'none';
}

// Function to show the employee tabs and hide "Rate Us" buttons
function showEmployeeTabs(employeeIndex) {
    const rateUsButtons = document.getElementById('rateUsButtons');
    const employeeTabs = document.getElementById('employeeTabs');

    rateUsButtons.style.display = 'none';
    employeeTabs.style.display = 'block';

    // Display information for the selected employee
    showEmployeeInfo(employeeIndex);
}
function cycleEmployees(direction) {
    let currentIndex = getCurrentEmployeeIndex();

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % employeeInfo.length;
    } else if (direction === 'previous') {
        currentIndex = (currentIndex - 1 + employeeInfo.length) % employeeInfo.length;
    }

    showEmployeeInfo(currentIndex + 1); // Add 1 because employeeIndex starts from 1
}

// Function to get the current employee index
function getCurrentEmployeeIndex() {
    const employeeImage = document.getElementById('employeeImage');
    const currentImageSrc = employeeImage.src;

    const currentIndex = employeeInfo.findIndex(employee => employee.image === currentImageSrc);
    
    return currentIndex !== -1 ? currentIndex : 0; // Default to 0 if not found
}
