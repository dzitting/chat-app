import React from 'react';
import Sidebar from  '../components/Sidebar';
import Chat from '../components/Chat';
import Conversations from '../components/Conversations'

export default function HomePage({handleSubmit, results, handleChange}) {
    return (
        <div className='home-container'> 
            <div className='home-container__sidebar'>
                <Sidebar />
                <Chat />
                <Conversations handleSubmit={handleSubmit} results={results} handleChange={handleChange}/>
            </div>
        </div>
    );
}