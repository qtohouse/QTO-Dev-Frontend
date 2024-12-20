import { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Counter = () => {
    // Data moved into the component as an array
    const counterData = [
        { 
            title: "255",
            desc: "Satisfied Clients"
        },
        {
            title: "120 +",
            desc: "Project Completed"
        },
        {
            title: "100 %",
            desc: "Result Guaranteed"
        },
        {
            title: "20 +",
            desc: "EXPERT MEMBERS"
        }
    ];

    useEffect(() => {
        loadBackgroudImages();
    }, []);
    
    return (
        <div className="counter-area">
            <div className="container">
                <div className="row counter-item" data-background="/assets/images/home-3/counter-bg.png">
                    {counterData.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-single-box">
                                <div className="counter-content">
                                    <h4 className="counter">{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="counter-thumb">
                    <img src="/assets/images/home-3/counter-thu.png" alt="thumb" />
                </div>
            </div>
        </div>
    );
};

export default Counter;
