function toggleMusic() 
{
	var music = document.getElementById('music');
    music.volume = 0.01;
    
	if (music.paused) 
	{
	    music.play();
	} 
	else 
	{
		music.pause();
	}
}