import { animated, useSpring } from '@react-spring/web';
import { Card } from '../Card';

export function Output({ imageSrc, index }: { imageSrc: string; index: number }) {
  const springs = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 400 * (index + 1),
  });

  return (
    <animated.div style={{ ...springs }} key={`output-${index}`}>
      <Card>
        <div className='flex justify-center'>
          <img className='h-64 w-64 lg:h-48 lg:w-48' src={imageSrc} alt={`morphed image ${index}`} />
        </div>
      </Card>
    </animated.div>
  );
}
