import SkillsCardWithoutCarousel from "./skills/SkillsCardWithoutCarousel.js";
import { skillsAndServices } from './data/data.js';

/**
 * Used in the index modal
 */
var ExploreModalContainer = function ExploreModalContainer() {

    var tag = "website-development";
    var name = "Website Development";
    var data = skillsAndServices[tag];

    return React.createElement(
        "div",
        { id: "modal-container" },
        React.createElement(
            "div",
            { "class": "modal-background" },
            React.createElement(
                "div",
                { id: "close-modal" },
                React.createElement("i", { "class": "uil uil-times" })
            ),
            React.createElement(
                "div",
                { "class": "modal" },
                React.createElement(SkillsCardWithoutCarousel, { name: name, data: data })
            )
        )
    );
};

ReactDOM.render(React.createElement(ExploreModalContainer, null), document.getElementById('explore_modal_container'));