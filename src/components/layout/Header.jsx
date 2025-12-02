/**
 * Application header.
 * Displays app title and small description.
 */
function Header() {
  return (
    <header className="app-header">
      <h1 className="app-header__title">Weather App</h1>
      <p className="app-header__subtitle">
        Search any city and explore today&apos;s weather and the forecast.
      </p>
    </header>
  );
}

export default Header;