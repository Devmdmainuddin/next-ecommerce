import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className='flex justify-end'>
    <nav className='flex gap-3 w-full items-center'>
      {/* <Link href='/cart' className='header-button'>
        <UserIcon className='h-8 w-8' />
        <span className='font-bold'>Sign in</span>
      </Link> */}
      <Link href='/cart' className='header-button'>
       Hello, Sign in
       
      </Link>

      <Link href='/cart' className='header-button'>
        <ShoppingCartIcon className='h-8 w-8' />
        <span className='font-bold'>Cart</span>
      </Link>
    </nav>
  </div>
  )
}

export default Menu