import React from 'react';
import Card from './Card';
import {IRobot} from '../interfaces';


const CardList: React.FunctionComponent<{ robots: IRobot[] }> = ({ robots }) => {
    return (
        <div>
            {
                robots.map(robot=> {
                    return <Card key={robot.id}
                                 id={robot.id}
                                 name={robot.name}
                                 email={robot.email}
                    />;
                })
            }
        </div>);
};

export default CardList;