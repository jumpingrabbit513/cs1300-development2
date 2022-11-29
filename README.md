# Development

### Link to Deployed Website
`https://jumpingrabbit513.github.io/cs1300-development2/`

### Goal and Value of the Application
This is a housing site for small desert creatures that might be seeking a new burrowing home. Listed in each housing
property are various pieces of information about the burrow property, including price, address, bedcount, furnishings,
and an image. Users can "favorite" properties that they're interested in, and the panel on the site keeps track of their
favorites' average price. 

### Usability Principles Considered
Usability - Properties are marked clearly with large images and significant margins that separate them. The price is marked
in large text, so users can be sure that they're looking at properties they can afford. Also, the flexbox item container
that houses all the properties adapts well to different screen sizes so that users can clearly see which buttons
correspond with which property. 

Learnability - Filters and sorting are marked clearly at the top, next to each other. The Navbar visual implementation
suggests correctly that only one filter option may be selected at a time. 

Memorability - Reset buttons on the filter and favorites list are marked in grey, while the "add to favorites" button 
is a colorful blue, which both help convey the idea of the action and help the user remember what they do without
having to read the text. 

### Organization of Components
The "Property.js" component located in /src/components represents a single LandDweller property, and includes all the parts
necessary for a single property card. The image, price, bed count, its furnished status, and address are all displayed on this card. 

All properties are stored in a dictionary at the top of App.js. These are then mapped to Property components, as is described below. 

### How Data is Passed Down Through Components
Price, furnished status, bed count, address, and property images are all passed down to a Property component from the map in
props, nested within "property". 

In addition, the functions "addToFavorites" and "removeFromFavorites" are passed down into the Property component, and they
are called when the corresponding buttons are clicked in each panel. 

### How the User Triggers State Changes
Filters: When a filter option is selected, a state in App.js updates to reflect the change. Then, a useEffect ensures that
the displayed list only contain items that qualify within all of the filter selections. Each filter has its own "filter" 
function that says whether a given item works with the current filter selection.

Favorites: A list of favorites is stored as a state in App.js. When a user clicks "add to favorites", the addToFavorites
function passed into the Property component is called, and the favorites state in App.js gets updated. To display the list
of current favorites, App.js maps each element in the favorites array to a little paragraph noting its address and price. 

