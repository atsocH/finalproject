function renderMenu() {
    const menu = `
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="register-flats.html">Add Flats</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="favorites.html">Favorites</a></li>
        </ul>
      </nav>
    `;
  
    document.getElementById('menu').innerHTML = menu;
  }
  
  document.addEventListener('DOMContentLoaded', renderMenu);
