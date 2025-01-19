import {configureStore} from '@reduxjs/toolkit'
import {playerReducer} from './slice/player.slice';

export const MyStore = configureStore ({
    reducer: {
        player: playerReducer, 
      },
})