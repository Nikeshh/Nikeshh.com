import React from "react";
import Footer from "./util/Footer";
import Header from "./util/Header";

const ProjectsScreen = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <div>
                        <p>PROJECTS</p>
                        <h3>What have I done?</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>All Projects v</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                            <h4>Category Title</h4>
                        </div>
                        <div className="col-lg-8">
                            <table>
                               <thead>
                                    <tr>
                                        <th>PROJECT NAME</th>
                                        <th>TAGS</th>
                                    </tr>
                               </thead>
                               <tbody>
                                    <tr>
                                        <td>
                                            
                                        </td>
                                        <td>

                                        </td>
                                        <td>v</td>
                                    </tr>
                               </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProjectsScreen;