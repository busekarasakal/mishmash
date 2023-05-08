import { useSpring, animated } from '@react-spring/web';

export function Divider({ text }: { text: string }) {
  const springs = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 200,
  });

  return (
    <animated.div style={{ ...springs }}>
      <div className='my-5 flex items-center'>
        <div className='flex-grow border-t border-black'></div>
        <span className='mx-4 flex-shrink text-black'>{text}</span>
        <div className='flex-grow border-t border-black'></div>
      </div>
    </animated.div>
  );
}
