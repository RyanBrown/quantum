import React from 'react';
import Button from '../Button/Button';
import './styles.scss';

export default function ActionBar() {
    return (
        <div className='action-bar'>
            <Button id='id-button1' type='submit' variant='primary'>
                Primary Search
            </Button>
            <Button id='id-button2' type='reset' variant='primary'>
                Secondary Reset
            </Button>
        </div>
    );
}
