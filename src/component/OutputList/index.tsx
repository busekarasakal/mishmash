import { Output } from '../Output';

export function OutputList({ outputSourceList }: { outputSourceList: string[] }) {
  return (
    <div className='flex flex-col justify-around gap-8 pt-5 lg:flex-row'>
      {outputSourceList.map((outputSource, index) => (
        <Output key={`output-image=${index}`} imageSrc={outputSource} index={index} />
      ))}
    </div>
  );
}
