import React from 'react';

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
            <div className='ui input'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.onChange}
                        value={this.state.value}
                        type='text'
                    />
                    <button
                        onClick={this.handleSubmit}
                        className='ui primary button'
                        type='submit'
                    >
                        Submit
        </button>
                </form>
            </div>
        )
    }
}