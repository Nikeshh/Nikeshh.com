import SkillCard from './SkillCard.js';

const SkillsCard = () => {
    return (
        <div>
            <div class="boxes">
                <div class="box box1">
                    <SkillCard />
                </div>
                <div class="box box2">
                    <SkillCard />
                </div>
                <div class="box box3">
                    <SkillCard />
                </div>
            </div>
            <div class="boxes">
                <div class="box box1">
                    <SkillCard />
                </div>
                <div class="box box2">
                    <SkillCard />
                </div>
                <div class="box box3">
                    <SkillCard />
                </div>
            </div>
            <div class="boxes">
                <div class="box box1">
                    <SkillCard />
                </div>
                <div class="box box2">
                    <SkillCard />
                </div>
                <div class="box box3">
                    <SkillCard />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<SkillsCard />, document.getElementById('skills_card'));