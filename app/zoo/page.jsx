"use client";
import React, { useState, useEffect } from "react";
import Animal from "./Animal";

const initialHealth = 100;
const numberOfAnimals = 5;

export default function Zoo() {
  const initialHealth = 100;
  const [time, setTime] = useState(0); // Track time in minutes
  const [animals, setAnimals] = useState({
    monkeys: new Array(5).fill(initialHealth),
    giraffes: new Array(5).fill(initialHealth),
    elephants: new Array(5).fill(initialHealth),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      // Decrease health every minute
      setAnimals((prevAnimals) => {
        const newAnimals = {};
        for (const [type, healthArray] of Object.entries(prevAnimals)) {
          newAnimals[type] = healthArray.map((health) => {
            const randomDecrease = Math.random() * 20; // 0 to 20% decrease
            return Math.max(health - randomDecrease, 0);
          });
        }
        return newAnimals;
      });
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(timer);
  }, []);

  const feedAnimals = (animalType) => {
    setAnimals((prevAnimals) => {
      const newAnimals = { ...prevAnimals };
      const feedValue = Math.random() * (25 - 10) + 10; // 10 to 25% increase
      newAnimals[animalType] = newAnimals[animalType].map((health) =>
        Math.min(health + health * (feedValue / 100), 100)
      );
      return newAnimals;
    });
  };

  return (
    <div>
      <h1>Zoo Simulator</h1>
      <p>Time: {time} minutes</p>
      {Object.entries(animals).map(([type, healthArray], index) => (
        <div key={index}>
          {healthArray.map((health, i) => (
            <Animal
              key={`${type}-${i}`}
              type={type}
              health={health}
              feedAnimal={() => feedAnimals(type)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
