
import React from "react";
import { useSelector } from "react-redux";

export function History() {
  const history = useSelector((state) => state.player.history);

  return (
    <div>

      <h2>History</h2>

      {history.length > 0 ? (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <p>
                <strong>{entry.title}</strong> - {entry.artist} - {entry.name} - 
                {new Date(entry.playedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tracks yet</p>
      )}

    </div>
  );
}

