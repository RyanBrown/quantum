import React from 'react';
import './styles.scss';
import CloseButton from '../CloseButton/CloseButton';
import TextInput from '../TextInput/TextInput';
import DropDown from '../DropDown/DropDown';

export default function FilterBlock() {
    return (
        <div className='filter-block'>
            <CloseButton type='reset' />
            <DropDown label='Left Full Width' placement='left'>
                <DropDown.Item>User Email</DropDown.Item>
                <DropDown.Item>Screen Width</DropDown.Item>
                <DropDown.Item>Screen Height</DropDown.Item>
                <DropDown.Item># of Visits</DropDown.Item>
                <DropDown.Item>First</DropDown.Item>
                <DropDown.Item>Name</DropDown.Item>
                <DropDown.Item>Last Name</DropDown.Item>
                <DropDown.Item>Page Response time (ms)</DropDown.Item>
                <DropDown.Item>Domain</DropDown.Item>
                <DropDown.Item>Page Path</DropDown.Item>
            </DropDown>
            <TextInput placeholder='placeholder text' />
            <TextInput placeholder='placeholder text' />
        </div>
    );
}
