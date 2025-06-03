import React from 'react';

interface JokeDisplayProps {
    joke?: string;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
    if (!joke) {
        return null;
    }

    return (
        <div className="mt-5 alert alert-success">
            <p data-testid="jokeText" className="text-dark font-weight-bold mb-2 mt-2">
                {joke}
            </p>
        </div>
    );
};

export default JokeDisplay;
