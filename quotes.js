document.addEventListener("DOMContentLoaded", function() {
  const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. -Albert Einstein",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "The best way to predict the future is to invent it. -Alan Kay",
    "Believe in yourself! Have faith in your abilities! -Norman Vincent Peale",
    "You can't build a reputation on what you are going to do. -Henry Ford",
    "In order to succeed, we must first believe that we can. -Nikos Kazantzakis",
    "If you can dream it, you can achieve it. -Zig Ziglar",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = quote;
});
