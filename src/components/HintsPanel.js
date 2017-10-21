import React, {Component} from 'react';
import HintCard from './HintCard'
import hints from '../asset/hints'

class HintsPanel extends Component {

    render() {
        const {hint1No, hint2No} = this.props

        if (!hint1No && !hint2No) {
            return (
                <div>
                    <HintCard title={'Your hint'}/>
                    <HintCard title={'Partner hint'}/>
                </div>
            )

        }
        return (
            <div>
                <HintCard title={hints[hint1No].title} text={hints[hint1No].text}/>
                <HintCard title={hints[hint2No].title} text={hints[hint2No].text}/>
            </div>
        );
    }
}

export default HintsPanel;
