import React, { useContext, useEffect } from "react";
import AppContext from "../../services/App/appContext";
import { Card } from './Cards/Card';
import './Dashboard.css';

const Dashboard = props => {
    const { toggleAppLoading } = useContext(AppContext);
    const events = new Array(30)
    // toggleAppLoading(true);
    return (
        // style={{ overflowY: 'scroll' }} className="metrics hide-scrollbar"
        <section className="p-32 pr-0 row m-0" style={{ overflow: 'hidden', height: '100vh' }}>
            {/* style={{ overflow: 'scroll', height: 'calc(100vh - 32px)' }} */}
            <article className="metrics col-md-8 hide-scrollbar" >
                <Card style={{ height: 400 }} component={<h3>Performances 0</h3>} />
                <div className="row p-32 px-0">
                    <div className="col-md-5">
                        <Card style={{ height: 200, marginBottom: 16 }} component={<h3>Performances 1</h3>} />
                        <Card style={{ height: 200 }} component={<h3>Performances 2</h3>} />
                    </div>
                    <div className="col-md-7">
                        <Card style={{ height: 416 }} component={<h3>Performances 3</h3>} />
                    </div>
                </div>
            </article>

            <aside className="calendar col-md-4 p-0">
                <Card style={{ borderTopRightRadius: 0, borderBottomLeftRadius: 0 }} component={
                    <div>
                        <h4>
                            Calendriers
            </h4>
                        <div className="hide-scrollbar" style={{ overflowY: 'Scroll', height: 30 * 10 }}>
                            {events.map(() => { return (<h3>Calendriers</h3>) })}
                        </div>
                    </div>
                } />
            </aside>

        </section>
    );
};

export { Dashboard };