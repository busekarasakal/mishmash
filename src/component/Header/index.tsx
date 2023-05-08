import logo from '../../assets/creaition_logo.svg';

export function Header() {
  return (
    <div className='flex justify-start pb-4'>
      <a href='https://www.creaition.io/' target='_blank'>
        <img className='h-8 w-auto' src={logo} alt='' width='40%' />
      </a>
    </div>
  );
}
