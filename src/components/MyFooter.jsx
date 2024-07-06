import { Tab, Tabs } from "react-bootstrap";

function Myfooter() {
    return (
        <>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 bg-dark"
            >
                <Tab eventKey="home" title="Home">
                    Copyright © 2024 React Bootstrap. Built with Docusaurus.
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    @
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>

                </Tab>
            </Tabs>
        </>
    );
}

export default Myfooter;