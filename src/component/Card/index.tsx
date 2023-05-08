export function Card(props: React.PropsWithChildren<unknown>) {
  return <div className='h-full w-full'>{props.children}</div>;
}
