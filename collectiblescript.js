const birdsCollections = document.getElementById('birds-collection');

collectibles.forEach(function(collectible) {
  const collectibleItem = document.createElement('div');
  collectibleItem.setAttribute('class', 'collectible');

  const collectibleImage = document.createElement('img');
collectibleImage.setAttribute('src', collectible.imagePath);
  collectibleItem.appendChild(collectibleImage);
 
  const collectibleName = document.createElement('h2');
collectibleName.textContent = collectible.name;
  collectibleItem.appendChild(collectibleName);

  const collectibleDescription = document.createElement('p');
 collectibleDescription.textContent = collectible.description;
  collectibleItem.appendChild(collectibleDescription);

  birdsCollections.appendChild(collectibleItem);
});
