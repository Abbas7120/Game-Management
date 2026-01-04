import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import GameCard from '../components/GameCard';
import { fetchGames, fetchFavorites, addFavorite, removeFavorite } from '../services/api';

const Dashboard = () => {
    const [games, setGames] = useState([]);
  const [favorites, setFavorites] = useState([]);
    const [filter, setFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        loadData();
    }, [filter]);

    const loadData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            
            const [gamesRes, favRes] = await Promise.all([
                fetchGames(filter),
                fetchFavorites()
            ]);
            
            setGames(gamesRes.data);
              const favoriteIds = favRes.data.map(item => item.game_id || item.id);
            setFavorites(favoriteIds);

        } catch (err) {
            console.error("Failed to load data", err);
            setError("Failed to load games. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggleFavorite = async (gameId) => {
        try {
           
            if (favorites.includes(gameId)) {
                setFavorites(prev => prev.filter(id => id !== gameId));
                await removeFavorite(gameId);
            } else {
                setFavorites(prev => [...prev, gameId]);
                await addFavorite(gameId);
            }
        } catch (error) {
            console.error("Error toggling favorite:", error);
            
            loadData(); 
        }
    };

    if (isLoading) return <div className="min-h-screen bg-[#0d1117] text-white p-6 flex justify-center items-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-[#0d1117] text-white p-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <FilterBar filter={filter} setFilter={setFilter} />
                
                {error && <div className="text-red-400 text-center my-4">{error}</div>}

                {!isLoading && !error && games.length === 0 && (
                     <div className="text-gray-400 text-center my-10">No games found in this category.</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map(game => (
                        <GameCard 
                            key={game.id} 
                            game={game} 
                            isFavorite={favorites.includes(game.id)}
                            onToggle={handleToggleFavorite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;