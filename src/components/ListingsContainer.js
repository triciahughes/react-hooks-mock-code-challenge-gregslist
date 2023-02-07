import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  const listingsCard = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
      />
    );
  });
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingsCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
