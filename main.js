function preload()
{
video = createVideo("video.mp4")
video.hide();
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
}

function draw()
{
image(video, 0,0,500,300);
}