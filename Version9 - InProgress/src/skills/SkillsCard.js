import SkillCard from './SkillCard.js';

var SkillsCard = function SkillsCard() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "boxes" },
            React.createElement(
                "div",
                { "class": "box box1" },
                React.createElement(SkillCard, null)
            ),
            React.createElement(
                "div",
                { "class": "box box2" },
                React.createElement(SkillCard, null)
            ),
            React.createElement(
                "div",
                { "class": "box box3" },
                React.createElement(SkillCard, null)
            )
        ),
        React.createElement(
            "div",
            { "class": "boxes" },
            React.createElement(
                "div",
                { "class": "box box1" },
                React.createElement(SkillCard, null)
            ),
            React.createElement(
                "div",
                { "class": "box box2" },
                React.createElement(SkillCard, null)
            ),
            React.createElement(
                "div",
                { "class": "box box3" },
                React.createElement(SkillCard, null)
            )
        ),
        React.createElement(
            "div",
            { "class": "boxes" },
            React.createElement(
                "div",
                { "class": "box box1" },
                React.createElement(SkillCard, null)
            ),
            React.createElement(
                "div",
                { "class": "box box2" },
                React.createElement(SkillCard, null)
            ),
            React.createElement(
                "div",
                { "class": "box box3" },
                React.createElement(SkillCard, null)
            )
        )
    );
};

ReactDOM.render(React.createElement(SkillsCard, null), document.getElementById('skills_card'));