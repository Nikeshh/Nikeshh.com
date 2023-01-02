import Technology from "./Technology.js";

var Technologies = function Technologies(_ref) {
    var tabControl = _ref.tabControl,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? [] : _ref$data;


    var createCarouselItems = function createCarouselItems() {
        var carouselRow = [];
        var numberOfFours = data.length / 4;
        for (var i = 0; i < numberOfFours; i++) {
            var carouselItems = [];
            for (var j = 0; j < 4; j++) {
                if (data.length == 0) {
                    break;
                }
                var technology = data.shift();
                carouselItems.push(React.createElement(Technology, { data: technology }));
            }
            if (i == 0) {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item active" },
                    React.createElement(
                        "div",
                        { "class": "row" },
                        carouselItems
                    )
                ));
            } else {
                carouselRow.push(React.createElement(
                    "div",
                    { "class": "carousel-item" },
                    React.createElement(
                        "div",
                        { "class": "row" },
                        carouselItems
                    )
                ));
            }
        }
        return carouselRow;
    };

    return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
            "div",
            { "class": "col-12" },
            React.createElement(
                "div",
                { "class": "row" },
                React.createElement(
                    "div",
                    { "class": "col-9" },
                    React.createElement(
                        "p",
                        null,
                        "TECHNOLOGIES"
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "col-3 ms-auto d-flex justify-content-end gap-2" },
                    React.createElement(
                        "a",
                        { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsTechnologiesCarousel",
                            role: "button", "data-bs-slide": "prev" },
                        React.createElement("i", { "class": "fa fa-arrow-left" })
                    ),
                    React.createElement(
                        "a",
                        { "class": "btn btn-primary mb-3", href: "#" + tabControl + "skillsTechnologiesCarousel",
                            role: "button", "data-bs-slide": "next" },
                        React.createElement("i", { "class": "fa fa-arrow-right" })
                    )
                )
            ),
            React.createElement(
                "div",
                { id: tabControl + "skillsTechnologiesCarousel", "class": "carousel slide", "data-bs-ride": "carousel" },
                React.createElement(
                    "div",
                    { "class": "carousel-inner" },
                    createCarouselItems()
                )
            )
        )
    );
};

export default Technologies;