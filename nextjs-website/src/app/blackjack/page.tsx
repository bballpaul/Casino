"use client";

import GamePageLayout from "../../components/GamePageLayout";


export default function Blackjack() {
  return (
    <GamePageLayout
      title="Blackjack"
      description="Welcome to the Blackjack table! Try to get as close to 21 as possible without going over."
      buttonText="Start Playing"
      buttonColor="bg-yellow-500 hover:bg-yellow-600"
      onButtonClick={() => console.log("Blackjack started!")}
      >
        {/*<p className="text-sm text-gray-400 mt-4">Custom content for Blackjack</p>*/}
    </GamePageLayout>
  );
}