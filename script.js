const dsImage = document.getElementById("dsImage");
dsImage.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=3uN8j-Coohg';
});

const movieImage = document.getElementById("movieImage");
movieImage.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=lHpHxLZReiI';
});

const dbImage = document.getElementById("dbImage");
dbImage.addEventListener('click', function() {
    window.location.href = 'https://www.crunchyroll.com/series/G8DHV7W21/dragon-ball';
});

const messiImage = document.getElementById("messiImage");
messiImage.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=Nwr4DAciyDs';
});

const lakersImage = document.getElementById("lakersImage");
lakersImage.addEventListener('click', function() {
    window.location.href = 'https://youtu.be/NKVCTOlFxIE?si=_xmIvtkKmuZcC14-&t=562';
});

document.addEventListener('DOMContentLoaded', function() {
    dbImage.style.width = '330px'; // Set the width to the desired size
    dbImage.style.height = '190px'; // Set the height to the desired size
  });
  const modeButton = document.getElementById("modeButton");
  modeButton.addEventListener('click', function() {
      // Check if the button text contains 'Dark Mode'
      if (modeButton.innerHTML.includes('Dark Mode')) {
          // Switch to dark mode
          document.body.style.backgroundColor = '#171717';
          document.body.style.color = '#ffffff';
          const elements = document.querySelectorAll('.subheader');
          elements.forEach(element => {
              element.style.color = '#ffffff';
          });
          // Update button text
          modeButton.innerHTML = 'Light Mode';
          let lightDarkheader = document.getElementById('Mode');
          lightDarkheader.innerHTML = 'Click for light mode';
      } else {
          // Switch to light mode
          document.body.style.backgroundColor = '#f5fffa';
          document.body.style.color = '#000000';
          const elements = document.querySelectorAll('.subheader');
          elements.forEach(element => {
              element.style.color = '#000000';
          });
          // Update button text
          modeButton.innerHTML = 'Dark Mode';
          let lightDarkheader = document.getElementById('Mode');
          lightDarkheader.innerHTML = 'Click for dark mode';
      }
  });

  