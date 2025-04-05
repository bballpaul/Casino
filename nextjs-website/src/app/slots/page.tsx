"use client";

import GamePageLayout from "../../components/GamePageLayout";


export default function Blackjack() {
  return (
    <GamePageLayout
      title="Slots"
      description="Try your luck with the slot machines! Spin and win big prizes."
      buttonText="Start Playing"
      buttonColor="bg-blue-500 hover:bg-blue-600"
      onButtonClick={() => console.log("Roulette started!")}
      >
        {/*<p className="text-sm text-gray-400 mt-4">Custom content for Roulette</p>*/}
    </GamePageLayout>
  );
}