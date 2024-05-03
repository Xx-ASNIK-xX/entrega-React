import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
  const clickEnMothers = () => {
    console.log('Hiciste click en Motherboards');
  };

  const clickEnMicros = () => {
    console.log('Hiciste click en Micros');
  };

  const clickEnGabinetes = () => {
    console.log('Hiciste click en Gabinetes');
  };

  return (
    <header className="allNav">
      <h1>Mi Tienda</h1>
      <nav className="barra">
        <ButtonComponent nombre="Motherboards" callback={clickEnMothers} />
        <ButtonComponent nombre="Micros" callback={clickEnMicros} />
        <ButtonComponent nombre="Gabinetes" callback={clickEnGabinetes} />
      </nav>
      <CartWidget />
    </header>
  );
}