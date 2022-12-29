const SkillSingle = () => {

    React.useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, []);
    
    return (
        <div class="main-content w-100 h-100">
            <header class="text-bg-dark">
                <div class="container-fluid">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <i class="fa-solid fa-caret-left"></i> NodeJS
                    </a>
                    <div class="tag ms-2 border border-primary p-2 rounded-2 text-white-50" data-bs-html="true"
                        data-bs-toggle="tooltip" data-bs-placement="bottom"
                        data-bs-title="<em>Tag:</em> <u><b>Web design</b></u>">Web design</div>
                    <div class="tag ms-2 border border-primary p-2 rounded-2 text-white-50" data-bs-html="true"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Tag:</em> <u><b>Web</b></u>">Web
                    </div>
                    <div class="tag ms-2 border border-primary p-2 rounded-2 text-white-50" data-bs-html="true"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Tag:</em> <u><b>Android</b></u>">
                        Android</div>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ms-auto" role="search">
                        <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search" />
                    </form>
                    <div class="dropdown">
                        <a href="#"
                        class="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Skills
                        </a>
                        <ul class="dropdown-menu text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </header>
            {/* Skill Content - Part without header */}
            <div class="m-3 m-md-5">
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                    <h1 class="display-6">NODEJS</h1>
                    <div class="skill-level show-9 d-flex flex-wrap justify-content-md-end">
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </div>
                </div>
                <div class="row">
                    {/* Skill Details */}
                    <div class="col-12 col-md-12 skill-details shadow-lg p-3 bg-white rounded">
                        <div class="d-flex gap-2 flex-wrap">
                            <div class="p-2 border border-primary rounded-2">
                                CONTRIBUTE
                            </div>
                            <div class="p-2 border border-primary rounded-2">
                                LINKED BLOGS
                            </div>
                            <div class="p-2 border border-primary rounded-2">
                                LINKED PROJECTS
                            </div>
                            <div class="p-2 border border-primary rounded-2 ms-md-auto">
                                CONTACT ME
                            </div>
                            <div class="p-2 border border-danger rounded-circle">
                                ❤️
                            </div>
                        </div>
                        <div class="overflow-scroll skill-content mt-3">
                            <img src="./assets/images/skills/nodejs.png" alt="" class="img-fluid img-thumbnail w-100 h-75" />
                            <div class="mt-2">
                            <h2>What is Node.js?</h2>
                            <ul>
                                <li>Node.js is an open source server environment</li>
                                <li>Node.js is free</li>
                                <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
                                <li>Node.js uses JavaScript on the server</li>
                            </ul>
                            <h2>Why Node.js?</h2>
                            <p><strong>Node.js uses asynchronous programming!</strong></p>
                            <p>A common task for a web server can be to open a file on the server and return the content to the
                                client.</p>
                            <p>Here is how PHP or ASP handles a file request:</p>
                            <ol>
                                <li>Sends the task to the computer&#39;s file system.</li>
                                <li>Waits while the file system opens and reads the file.</li>
                                <li>Returns the content to the client.</li>
                                <li>Ready to handle the next request.</li>
                            </ol>
                            <p>Here is how Node.js handles a file request:</p>
                            <ol>
                                <li>Sends the task to the computer&#39;s file system.</li>
                                <li>Ready to handle the next request.</li>
                                <li>When the file system has opened and read the file, the server returns the content to the client.
                                </li>
                            </ol>
                            <p>Node.js eliminates the waiting, and simply continues with the next request.</p>
                            <p>Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory
                                efficient.</p>
                            <hr />
                            <h2>What Can Node.js Do?</h2>
                            <ul>
                                <li>Node.js can generate dynamic page content</li>
                                <li>Node.js can create, open, read, write, delete, and close files on the server</li>
                                <li>Node.js can collect form data</li>
                                <li>Node.js can add, delete, modify data in your database</li>
                            </ul>
                            <hr />
                            <h2>What is a Node.js File?</h2>
                            <ul>
                                <li>Node.js files contain tasks that will be executed on certain events</li>
                                <li>A typical event is someone trying to access a port on the server</li>
                                <li>Node.js files must be initiated on the server before having any effect</li>
                                <li>Node.js files have extension &quot;.js&quot;</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <SkillSingle />,
    document.getElementById('skill_single')
); 