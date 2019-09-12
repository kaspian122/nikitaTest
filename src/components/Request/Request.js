import React, { Component } from 'react';
import FirstForm from "../FormRequest/FirstForm";
import SecondForm from '../FormRequest/SecondForm';
import ThirdForm from "../FormRequest/ThirdForm";
import Form from '../Form/Form';

export default class Request extends Component {
    state = {
        page: 1
    };

    nextPage = () => {
        this.setState({page: this.state.page + 1})
    };

    prevPage = () => {
        this.setState({page: this.state.page - 1})
    };

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return(
            <div>
                {page === 1 && <FirstForm onSubmit={this.nextPage}/>}
                {page === 2 && <SecondForm prevPage={this.prevPage} onSubmit={this.nextPage}/>}
                {page === 3 && <ThirdForm prevPage={this.prevPage} onSubmit={onSubmit}/>}
            </div>
        )
    }
};