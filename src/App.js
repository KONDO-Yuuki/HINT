import React, {Component} from 'react';
import HintsPanel from './components/HintsPanel'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import hints from './asset/hints'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hint1No: 0,
            hint2No: 0
        }
    }

    setHints = () => {
        const randMax = hints.length
        const rand1 = Math.floor(Math.random() * (randMax));
        const rand2 = Math.floor(Math.random() * (randMax));

        this.setState({
            hint1No: rand1,
            hint2No: rand2
        })
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            H I N T
                        </Typography>
                    </Toolbar>
                </AppBar>
                <HintsPanel {...this.state}/>
                <Button raised color="primary" onClick={this.setHints}>
                    Create HINTS
                </Button>
            </div>
        );
    }
}

console.log('Thank you my best friends!')
export default App;
