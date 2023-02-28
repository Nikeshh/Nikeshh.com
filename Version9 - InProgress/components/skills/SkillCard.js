const SkillCard = () => {
    return (
        <div class="row g-0 rounded overflow-hidden flex-md-row h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Mobile and App Development</strong>
                <h3 class="mb-0 blog-card-text">Foodbooze (Mobile App, Website, Analytics) - Complete Food Delivery or Food Ecommerce Solution</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto blog-card-text">Introducing a revolutionary cross-platform food delivery and ecommerce solution app built using flutter framework that is designed to make food ordering seamless and hassle-free.</p>
                <a href="#" class="stretched-link blog-card-text">View Project</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <img src="./assets/images/placeholder.png" alt="Project Image" class="img-fluid" />
            </div>
        </div>
    );
}

export default SkillCard;