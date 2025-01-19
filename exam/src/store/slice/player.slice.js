
import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice ({
    name: 'player',
  initialState: {
    currentTrack: null,
    tracks: [
      { id: '1', title: "Track 1", name: 'Jump', artist: 'Kris Kross', duration: '3:15', format: 'MP3', fileSize: '1.48 MB', url: '/audio/Jump.mp3'},
      { id: '2', title: "Track 2", name: 'Song1', artist: 'SoundHelix', duration: '6:12', format: 'MP3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { id: '3', title: "Track 3", name: 'Song2', artist: 'SoundHelix', duration: '7:05', format: 'MP3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
      { id: '4', title: "Track 4", name: 'Song3', artist: 'SoundHelix', duration: '5:44', format: 'MP3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
      { id: '5', title: "Track 5", name: 'Рідний край', artist: 'Narodna', duration: '3:56', format: 'MP3', fileSize: '1.8 MB', url: '/audio/Рідний-край.mp3'},
      { id: '6', title: "Track 6", name: 'Хто ти', artist: 'Klavdia Petrivna', duration: '1.36', format: 'MP3', fileSize: '1.46 MB', url: '/audio/Хто-ти.mp3'},
      { id: '7', title: "Track 7", name: 'Za-terikonami', artist: 'Musli UA', duration: '2:50', format: 'MP3', fileSize: '1.32 MB', url: '/audio/za-terikonami.mp3'},
      { id: '8', title: "Track 8", name: 'Vasylina', artist: 'Dzidzo', duration: '3:14', format: 'MP3', fileSize: '1.48 MB', url: '/audio/Vasylina.mp3'},
      { id: '9', title: "Track 9", name: 'Додому', artist: 'Kalush', duration: '3:36', format: 'MP3', fileSize: '1.66 MB', url: '/audio/додому.mp3'},
      { id: '10', title: "Track 10", name: 'Real Slim Shady', artist: 'Eminem', duration: '4:44', format: 'MP3', fileSize: '2.17 MB', url: '/audio/Real Slim Shady.mp3'}
    ],
    history: []
  },

  reducers: {
    setTrack(state, action) {

      if (state.currentTrack?.id === action.payload.id) {
        return;
      }
      state.currentTrack = action.payload;

      state.history.push({
        ...action.payload,
        playedAt: new Date().toISOString()
      })
    },
  },
})
export const playerReducer = playerSlice.reducer
export const { setTrack } = playerSlice.actions;



