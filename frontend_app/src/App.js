import React, { useMemo, useState } from 'react';
import './App.css';
import { songs as allSongs, genres, years } from './data/songs';

// Simple utility to paginate array
const paginate = (array, page, pageSize) => {
  const start = (page - 1) * pageSize;
  return array.slice(start, start + pageSize);
};

// Header Component
// PUBLIC_INTERFACE
function Header({ total, favoritesCount }) {
  /** Displays the app title and a small badge with song counts. */
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <div className="logo" aria-hidden="true" />
        <div className="title" aria-label="Song Catalogue Application Title">Song Catalogue</div>
        <div className="badge" aria-live="polite">
          {favoritesCount} favorites • {total} songs
        </div>
      </div>
    </header>
  );
}

// Sidebar Component
// PUBLIC_INTERFACE
function Sidebar({
  query,
  setQuery,
  genre,
  setGenre,
  year,
  setYear,
  onClear,
  onSubmit,
}) {
  /** Sidebar housing search and filter controls with accessible labels. */
  return (
    <aside className="sidebar" aria-label="Search and filter sidebar">
      <h3>Find songs</h3>

      <div className="field">
        <label htmlFor="search" className="label">Search (title or artist)</label>
        <input
          id="search"
          className="input"
          type="text"
          placeholder="e.g. Weeknd, Levitating..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="genre" className="label">Genre</label>
        <select
          id="genre"
          className="select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="year" className="label">Year</label>
        <select
          id="year"
          className="select"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">All</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <div className="actions">
        <button className="btn" onClick={onSubmit} aria-label="Apply filters">Apply</button>
        <button className="btn secondary" onClick={onClear} aria-label="Clear filters">Clear</button>
      </div>
    </aside>
  );
}

// Song Card Component
// PUBLIC_INTERFACE
function SongCard({ song, isFavorite, onToggleFavorite, onOpen }) {
  /** Displays a song preview with cover, meta info, and actions. */
  return (
    <article className="card" aria-label={`${song.title} by ${song.artist}`}>
      <img
        src={song.cover}
        alt={`${song.album} cover`}
        className="cover"
        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400?text=No+Cover'; }}
      />
      <div className="card-body">
        <div className="song-title">{song.title}</div>
        <div className="song-meta">{song.artist} • {song.album}</div>
        <div className="song-meta">{song.year} • <span className="pill">{song.genre}</span></div>
        <div className="card-actions">
          <button
            className={`icon-btn ${isFavorite ? 'active' : ''}`}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            onClick={() => onToggleFavorite(song.id)}
          >
            {isFavorite ? '★ Favorite' : '☆ Favorite'}
          </button>
          <button className="btn" onClick={() => onOpen(song)} aria-label={`View details of ${song.title}`}>
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

// Song List Component
// PUBLIC_INTERFACE
function SongList({ items, favorites, onToggleFavorite, onOpen, page, totalPages, onPage }) {
  /** Renders grid of SongCard with pagination and empty state. */
  if (items.length === 0) {
    return (
      <div role="status" className="empty" aria-live="polite">
        No songs found. Try adjusting your search or filters.
      </div>
    );
  }

  return (
    <>
      <section className="grid" aria-label="Song list">
        {items.map((s) => (
          <SongCard
            key={s.id}
            song={s}
            isFavorite={favorites.includes(s.id)}
            onToggleFavorite={onToggleFavorite}
            onOpen={onOpen}
          />
        ))}
      </section>
      {totalPages > 1 && (
        <nav className="pagination" aria-label="Pagination Navigation">
          {Array.from({ length: totalPages }).map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                className="page-btn"
                onClick={() => onPage(p)}
                aria-current={p === page ? 'page' : undefined}
                aria-label={`Go to page ${p}`}
              >
                {p}
              </button>
            );
          })}
        </nav>
      )}
    </>
  );
}

// Details Modal
// PUBLIC_INTERFACE
function SongDetails({ song, onClose }) {
  /** Panel modal showing full song details with keyboard and screen reader support. */
  if (!song) return null;
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="song-details-title"
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div id="song-details-title" className="modal-title">{song.title}</div>
          <button className="modal-close" onClick={onClose} aria-label="Close details">Close</button>
        </div>
        <div className="modal-body">
          <img
            src={song.cover}
            alt={`${song.album} cover large`}
            className="modal-cover"
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400?text=No+Cover'; }}
          />
          <div className="details">
            <div className="detail-row">
              <div className="detail-key">Artist</div>
              <div className="detail-val">{song.artist}</div>
            </div>
            <div className="detail-row">
              <div className="detail-key">Album</div>
              <div className="detail-val">{song.album}</div>
            </div>
            <div className="detail-row">
              <div className="detail-key">Year</div>
              <div className="detail-val">{song.year}</div>
            </div>
            <div className="detail-row">
              <div className="detail-key">Genre</div>
              <div className="detail-val">{song.genre}</div>
            </div>
            <div className="detail-row">
              <div className="detail-key">Duration</div>
              <div className="detail-val">{song.duration}</div>
            </div>
            <div className="detail-row">
              <div className="detail-key">About</div>
              <div className="detail-val">{song.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Root App
// PUBLIC_INTERFACE
function App() {
  /** Main application managing songs, filters, pagination, selection, and favorites. */
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(8);
  const [selectedSong, setSelectedSong] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Derived filtered songs
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allSongs.filter((s) => {
      const matchesQuery =
        q.length === 0 ||
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q);
      const matchesGenre = !genre || s.genre === genre;
      const matchesYear = !year || String(s.year) === String(year);
      return matchesQuery && matchesGenre && matchesYear;
    });
  }, [query, genre, year]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = paginate(filtered, currentPage, pageSize);

  const applyFilters = () => {
    setPage(1);
  };

  const clearFilters = () => {
    setQuery('');
    setGenre('');
    setYear('');
    setPage(1);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const openDetails = (song) => setSelectedSong(song);
  const closeDetails = () => setSelectedSong(null);

  return (
    <div className="app">
      <Header total={allSongs.length} favoritesCount={favorites.length} />

      <main className="main">
        <Sidebar
          query={query}
          setQuery={setQuery}
          genre={genre}
          setGenre={setGenre}
          year={year}
          setYear={setYear}
          onClear={clearFilters}
          onSubmit={applyFilters}
        />

        <section className="content" aria-label="Main content">
          <div className="toolbar">
            <div className="count" aria-live="polite">
              Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}{' '}
              {query ? `for "${query}"` : ''}
              {genre ? ` • ${genre}` : ''}
              {year ? ` • ${year}` : ''}
            </div>
          </div>

          <SongList
            items={pageItems}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpen={openDetails}
            page={currentPage}
            totalPages={totalPages}
            onPage={(p) => setPage(p)}
          />
        </section>
      </main>

      <SongDetails song={selectedSong} onClose={closeDetails} />
    </div>
  );
}

export default App;
