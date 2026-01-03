import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import GameCard from '../components/GameCard';
import { fetchGames, fetchFavorites, addFavorite, removeFavorite } from '../services/api';

const Dashboard = () => {
    const [games, setGames] = useState([]);
    const [favorites, setFavorites] = useState(new Set());
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        loadData();
    }, [filter]);

    const loadData = async () => {
        try {
            const gamesRes = await fetchGames(filter);
          


            setGames(gamesRes.data);
       

            
        } catch (err) {
            console.error("Failed to load data", err);
        }
    };

 

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <FilterBar filter={filter} setFilter={setFilter} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map(game => (
                        <GameCard 
                            key={game.id} 
                            game={game} 
                            
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;