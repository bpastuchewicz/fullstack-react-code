import React from 'react';
import { Input, Button } from 'semantic-ui-react'

export class TextFieldSubmit extends React.Component {
    state = {
        value: '',
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div className='ui input tiny'>
                <form onSubmit={this.handleSubmit}>        
                    <div className="ui action input tiny">
                        <Input type="text" onChange={this.onChange}  value={this.state.value}/>
                            <Button className="ui icon button" onClick={this.handleSubmit}>
                                <i className="plus icon"></i>
                            </Button>                        
</div>                    
                </form>
            </div>
        )
    }
}