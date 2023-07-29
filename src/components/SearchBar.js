import React, { useEffect, useRef } from "react";
import "../App.css";

const SearchBar = ({ setLocation }) => {
  const autocompleteInputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInputRef.current,
      { types: ["geocode"] }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();

      // Set new location
      setLocation({
        latitude,
        longitude,
        error: null,
      });
    });
  }, [setLocation]);

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
