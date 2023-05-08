import { useSpring, animated } from '@react-spring/web';
import { Dispatch, SetStateAction, useState } from 'react';
import { Header } from './component/Header';
import { INPUTS, OUTPUTS } from './utils/assets.ts';
import { OutputList } from './component/OutputList';
import { Divider } from './component/Divider';
import { Input } from './component/Input';

function App() {
  const [springs, api] = useSpring(() => ({
    from: {
      height: '25%',
    },
  }));

  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [secondImageIndex, setSecondImageIndex] = useState(1);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [isMorphed, setIsMorphed] = useState(false);

  const canMorph = firstImageIndex !== secondImageIndex;
  const showOutputList = isMorphed && outputs.length > 0;

  const handleInput = (setterFunction: Dispatch<SetStateAction<number>>) => {
    setterFunction((current) => (current + 1) % INPUTS.length);
  };

  const handleMorph = () => {
    if (!canMorph) {
      return;
    }

    setOutputs([...OUTPUTS].sort(() => Math.random() - 0.5).slice(0, 3));
    setIsMorphed(true);

    api.start({
      to: {
        height: '0%',
      },
    });
  };

  return (
    <div className='h-full w-full bg-zinc-200 p-5 lg:h-screen'>
      <Header />
      <animated.div style={{ ...springs }} />
      <div className='flex flex-col justify-between gap-4 p-5 lg:flex-row'>
        <Input handleInput={() => handleInput(setFirstImageIndex)} selectedInput={INPUTS[firstImageIndex]} />
        <div className='flex items-center justify-center'>
          <button
            className={`
              h-10 w-24 text-xl
                ${canMorph ? 'transform transition duration-300 hover:scale-125' : 'transform text-gray-500 transition'}
            `}
            type='button'
            onClick={handleMorph}
            disabled={!canMorph}
          >
            [ morph ]
          </button>
        </div>
        <Input handleInput={() => handleInput(setSecondImageIndex)} selectedInput={INPUTS[secondImageIndex]} />
      </div>
      {showOutputList ? (
        <>
          <Divider text={'Results'} />
          <OutputList outputSourceList={outputs} key={outputs.toString()} />
        </>
      ) : null}
    </div>
  );
}

export default App;
