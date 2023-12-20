var posts=["/post/AI-a-wave-that-must-be-joined.html","/post/What-Gemini-demo-video-is-a-edited-version.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };