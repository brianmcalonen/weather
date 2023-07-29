import React, { useEffect, useRef } from "react";
import "../App.css";

const SearchBar = () => {
  const autocompleteInputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInputRef.current,
      { types: ["geocode"] }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      // This logs the selected place object to console. Replace this with your own handler.
      console.log(place);
      console.log(place.geometry.location.lat);
    });
  }, []);

  return (
    <div className="search-bar-container">
      <input
        ref={autocompleteInputRef}
        className="search-bar-input"
        type="text"
        placeholder="Search for location"
      />
    </div>
  );
};

export default SearchBar;
