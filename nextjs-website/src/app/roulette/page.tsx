"use client";

import GamePageLayout from "../../components/GamePageLayout";


export default function Blackjack() {
  return (
    <GamePageLayout
      title="Roulette"
      description="Spin the wheel and test your luck! Bet on your favorite numbers or colors."
      buttonText="Start Playing"
      buttonColor="bg-red-500 hover:bg-red-700"
      onButtonClick={() => console.log("Roulette started!")}
      >
        {/*<p className="text-sm text-gray-400 mt-4">Custom content for Roulette</p>*/}
    </GamePageLayout>
  );
}