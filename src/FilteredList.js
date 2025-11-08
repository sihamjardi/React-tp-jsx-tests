function FilteredList({ items, render }) {
  const filtered = items.filter(item => item.length > 3); // exemple : longueur > 3
  return <div>{render(filtered)}</div>;
}

export default FilteredList;
