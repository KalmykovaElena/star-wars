import React, {Component} from 'react';

class PersonDetails extends Component {
    render() {

        return (
            <div>
                <img className={'img-thumbnail planet-image float-start'}
                     src="https://starwars-visualguide.com/assets/img/characters/2.jpg" alt=""/>
                <h4>Name</h4>
                <ul className={'list-group list-group-flush detail'}>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Gender:</span>
                        <span></span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>By:</span>
                        <span></span>
                    </li>
                    <li className={'list-group-item'}>
                        <span className={'tern'}>Eye color:</span>
                        <span></span>
                    </li>
                </ul>

            </div>
        );
    }
}

export default PersonDetails;