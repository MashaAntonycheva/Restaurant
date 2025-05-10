import Header from './Header.js'
import VideoPlayerCollection from './VideoPlayer.js'
import Reviews from './Reviews.js'

new Header()
new VideoPlayerCollection()
new Reviews('review'); 

document.getElementById('dataToday').valueAsDate = new Date();


