import React from 'react';
import { Heart } from 'lucide-react';

const GameCard = ({ game }) => {
    return (
        <div className="bg-[#151b23] border border-[#30363d] rounded-xl p-6 flex flex-col justify-between hover:border-gray-500 transition-all shadow-lg text-left group">
            <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-500 cursor-pointer transition-colors">
                        {game.name}
                    </h3>
                    <span className="bg-[#238636] text-white text-xs font-semibold px-2 py-1 rounded-full border border-[rgba(240,246,252,0.1)]">
                        {game.category}
                    </span>
                </div>

                {/* Sub-header */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#0b011c] text-purple-300 text-xs px-2 py-0.5 rounded-full border border-purple-800">
                        {game.league_or_provider}
                    </span>
                    <span className="text-gray-400 text-xs">
                        {game.start_time ? new Date(game.start_time).toLocaleDateString() : 'Live Now'}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {game.description}
                </p>

                {/* Tags */}
                <div className="mb-6">
                    
                    <div className="flex flex-wrap gap-2">
                        {game.tags && game.tags.map((tag, idx) => (
                            <span key={idx} className="bg-[#161b22] text-[#c9d1d9] text-xs px-3 py-1 rounded-2xl border border-[#30363d]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-[#238636] hover:bg-[#03330b] text-white font-medium py-2 rounded-md text-sm transition-colors">
                    View Details →
                </button>
                
            </div>
        </div>
    );
};

export default GameCard;