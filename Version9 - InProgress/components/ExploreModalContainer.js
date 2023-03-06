import SkillsCardWithoutCarousel from "./skills/SkillsCardWithoutCarousel.js";
import { skillsAndServices } from './data/data.js';

/**
 * Used in the index modal
 */
const ExploreModalContainer = () => {

    const tag = "website-development";
    const name = "Website Development";
    const data = skillsAndServices[tag];

    return (
        <div id="modal-container">
            <div class="modal-background">
                <div id="close-modal">
                    <i class="uil uil-times"></i>
                </div>
                <div class="modal">
                    <SkillsCardWithoutCarousel name={name} data={data} />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<ExploreModalContainer />, document.getElementById('explore_modal_container'));