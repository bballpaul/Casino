import Header from './Header';

interface GamePageLayoutProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

export default function GamePageLayout({
  title,
  description,
  buttonText,
  buttonColor = "bg-yellow-500",
  onButtonClick,
  children,
}: GamePageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-800 via-green-700 to-green-900 text-white">

      <main className="flex-grow flex flex-col items-center justify-center pb-30">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-lg mb-4">{description}</p>
        <div className="bg-gray-700 w-80 h-40 rounded-lg flex items-center justify-center mb-6">
          {children ? children : <span className="text-gray-400">Game Screenshot Placeholder</span>}
        </div>
        <button
          className={`${buttonColor} text-black font-bold py-2 px-4 rounded-lg shadow-md transition`}
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </main>
    </div>
  );
}