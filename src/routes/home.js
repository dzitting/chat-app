import React from 'react';
import HomePage from '../components/HomePage';
import { users } from '../data/database';

export default function Home() {
    return (
        <HomePage users={users} />
    )
}