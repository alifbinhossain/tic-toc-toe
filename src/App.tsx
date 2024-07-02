import TicTacToe from './components/tic-tac-toe';

const App = () => {
  return (
    <>
      <div className='container mx-auto py-8 md:py-20  h-full'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl text-indigo-600 font-medium text-center'>
          Tic-Tac-Toe
        </h1>
        <TicTacToe />
      </div>

      <footer>
        <div className='container mx-auto flex justify-center md:justify-end py-8'>
          <p>
            Developed by{' '}
            <a
              href='https://github.com/alifbinhossain'
              target='_blank'
              className='text-indigo-700 capitalize italic'
            >
              Alif Bin Hossain
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
