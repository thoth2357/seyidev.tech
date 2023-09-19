export function getTipOfTheDay() {
    // Generate the tip of the day.
    const tip = `Here is a tip for today: ${Math.floor(Math.random() * 100)}`;
    console.log(tip);
    // Return the tip of the day.
    return tip;
  }