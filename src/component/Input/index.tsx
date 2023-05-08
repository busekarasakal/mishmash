import { Card } from '../Card';

export function Input({ handleInput, selectedInput }: { handleInput: () => void; selectedInput: string }) {
  return (
    <Card>
      <div className='flex justify-center'>
        <button onClick={handleInput}>
          <img src={selectedInput} alt='input image' className='h-64 w-64' />
        </button>
      </div>
    </Card>
  );
}
