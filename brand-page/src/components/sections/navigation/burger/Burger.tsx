import {useState, useRef} from 'react';
import BurgerIcon from './BurgerIcon';
import useOnClickOutside from '../../../../utilities/useOnClickOutside';
import BurgerMenu from './BurgerMenu';


function Burger() {
  const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(burgerRef, () => setOpen(false));

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  )
}


export default Burger;
