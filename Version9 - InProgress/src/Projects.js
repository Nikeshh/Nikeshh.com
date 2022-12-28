import Project from './Project.js';

var Projects = function Projects() {
    var data = [{
        "title": "Foodbooze (Mobile App, Website, Analytics) - Complete Food Delivery or Food Ecommerce Solution",
        "description": "Developed a full-fledged food delivery application suite which includes a point-of-sale system, user food ordering application (Flutter), restaurant management system (React.JS), delivery application (Flutter) and custom data analytics system (Flask with Neural Network Machine learning model) to monitor and analyze the data to find insights based on the food data and to flag or detect the ones who alienate the system."
    }, {
        "title": "Foodbooze 2 (Mobile App, Website, Analytics) - Complete Food Delivery or Food Ecommerce Solution",
        "description": "Developed a full-fledged food delivery application suite which includes a point-of-sale system, user food ordering application (Flutter), restaurant management system (React.JS), delivery application (Flutter) and custom data analytics system (Flask with Neural Network Machine learning model) to monitor and analyze the data to find insights based on the food data and to flag or detect the ones who alienate the system."
    }];

    return React.createElement(
        "div",
        { id: "projectCarousel", className: "carousel slide p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg", "data-bs-ride": "carousel" },
        React.createElement(
            "div",
            { className: "carousel-inner" },
            React.createElement(
                "div",
                { className: "carousel-item active" },
                React.createElement(Project, { title: data[0]["title"], description: data[0]["description"] })
            ),
            React.createElement(
                "div",
                { className: "carousel-item" },
                React.createElement(Project, { title: data[1]["title"], description: data[1]["description"] })
            )
        )
    );
};

ReactDOM.render(React.createElement(Projects, null), document.getElementById('projects_container'));