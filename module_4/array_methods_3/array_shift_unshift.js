// unshift() → inserts a new element at the start of the array and returns the number of all the elements in the array

const pc_parts = ['monitor', 'cpu', 'hard drive', 'ram memory']
const number_of_new_pc_parts = pc_parts.unshift('keyboard')
console.log(pc_parts)   // [ 'keyboard', 'monitor', 'cpu', 'hard drive', 'ram memory' ]
console.log(number_of_new_pc_parts) // 5

// shift() → deletes the first element from the arraya and returns the removed element

const colors = ['yellow', 'green', 'blue']
const removed_color = colors.shift()
console.log(colors) // [ 'green', 'blue' ]
console.log(removed_color)  // yellow

// Exercise: Managing a Playlist

const playlist = []

const ADD_SONG_ACTION = 'addSong'
const REMOVE_SONG_ACTION = 'removeSong'
const PREVIEW_PLAYLIST_ACTION = 'previewPlaylist'

function display_playlist(){
    console.log(`This is your current playlist: ${playlist}`)
}

function music_playlist(action, song){
    if(action === ADD_SONG_ACTION){
        playlist.unshift(song)
        display_playlist()
    } else if(action === REMOVE_SONG_ACTION){
        if(playlist.length === 0){
            console.log('There are no songs in the playlist')
            return
        } 
        const removed_song = playlist.shift()
        console.log(`Removed song: ${removed_song}`)
        display_playlist()
    } else {
        console.log('Invalid action, choose a valid option')
    }
}

music_playlist(ADD_SONG_ACTION, 'creep')  // This is your current playlist: creep
music_playlist(REMOVE_SONG_ACTION)  // // This is your current playlist:
music_playlist(REMOVE_SONG_ACTION)  // There are no songs in the playlist
music_playlist(ADD_SONG_ACTION, 'hallelujah')
music_playlist(ADD_SONG_ACTION, 'all star')