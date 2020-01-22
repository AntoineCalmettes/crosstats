import React, { useContext, useEffect } from "react";
import AppContext from "../../services/App/appContext";
import { Card } from './Cards/Card';
import './Dashboard.css';

const Dashboard = props => {
    const { toggleAppLoading } = useContext(AppContext);
    const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    // toggleAppLoading(true);
    return (
        <section className="app-container pr-0 row position-relative">
            <article className="metrics hide-scrollbar p-32" style={{ overflowY: 'Scroll' }}>
                <h1 className="title h2" style={{ marginBottom: 32 }}>Tableau de bord</h1>
                <Card style={{ height: 400 }} component={<h2>Performances 0</h2>} />
                <div className="row p-32 px-0">
                    <div className="col-lg-6">
                        <Card style={{ height: 200, marginBottom: 16 }} component={<h2>Performances 1</h2>} />
                        <Card style={{ height: 200 }} component={<h2>Performances 2</h2>} />
                    </div>
                    <div className="col-lg-6">
                        <Card style={{ height: 416 }} component={<h2>Performances 3</h2>} />
                    </div>
                    <div className="col-12" style={{ paddingTop: 32 }}>
                        <Card style={{ height: 200, marginBottom: 16 }} component={<h2>Performances 1</h2>} />
                    </div>
                </div>
            </article>

            <aside className="right-section">
                <div style={{ height: 102 }}></div>
                <Card style={{ borderTopRightRadius: 0, borderBottomLeftRadius: 0 }} component={
                    <div>
                        <h2>Calendriers</h2>
                        <div className="hide-scrollbar" style={{ overflowY: 'Scroll', height: 25.5 * events.length }}>
                            {events.map((a) => <h3>Item {a}</h3>)}
                        </div>
                    </div>
                } />
            </aside>

        </section>
    );
};

export { Dashboard };