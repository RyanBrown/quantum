import React from 'react';
import './styles.scss';
import CloseButton from '../CloseButton/CloseButton';
import TextInput from '../TextInput/TextInput';

export default function FilterBlock() {
    return (
        <div className='filter-block'>
            <CloseButton />
            <TextInput placeholder='placeholder text' />
            <TextInput placeholder='placeholder text' />
            <TextInput placeholder='placeholder text' />
        </div>
    );
}
