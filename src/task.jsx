import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`;

export default class Task extends Component {
    render() {
        return (
            // <Draggable>
            //     <Container>
            //         {this.props.task.content }
            //     </Container>
            // </Draggable>
            <h1>Hello</h1>
        )
    }
}