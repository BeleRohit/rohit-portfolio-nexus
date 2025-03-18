
import React from 'react';

const TerminalBooksSection = () => {
  return (
    <div className="text-green-300">
      <h2 className="text-xl font-mono mb-4 text-yellow-400">== FAVORITE BOOKS ==</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-mono text-cyan-400 mb-2"># Fiction</h3>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>The Brothers Karamazov - Fyodor Dostoevsky</li>
          <li>Notes From Underground - Fyodor Dostoevsky</li>
          <li>Love in the Time of Cholera - Gabriel García Márquez</li>
          <li>Godan - Munshi Premchand</li>
          <li>The Idiot - Fyodor Dostoevsky</li>
          <li>The Fountainhead - Ayn Rand</li>
          <li>The Wind-Up Bird Chronicle - Haruki Murakami</li>
          <li>Men Without Women - Haruki Murakami</li>
          <li>Infinite Jest - David Foster Wallace</li>
          <li>War and Peace - Leo Tolstoy</li>
          <li>Demons - Fyodor Dostoevsky</li>
          <li>Crime and Punishment - Fyodor Dostoevsky</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-mono text-cyan-400 mb-2"># Non-Fiction</h3>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Emotional Intelligence - Daniel Goleman</li>
          <li>Creativity - Mihaly Csikszentmihalyi</li>
          <li>From Sex to Superconsciousness - Osho</li>
          <li>Courage - Osho</li>
          <li>The Psychology of Money - Morgan Housel</li>
          <li>The Art of War - Sun Tzu</li>
          <li>The Intelligent Investor - Benjamin Graham</li>
          <li>Mindset - Carol S. Dweck</li>
          <li>Deep Work - Cal Newport</li>
          <li>Ego Is the Enemy - Ryan Holiday</li>
          <li>Meditations - Marcus Aurelius</li>
          <li>A Brief History of Time - Stephen Hawking</li>
          <li>Sapiens: A Brief History of Humankind - Yuval Noah Harari</li>
          <li>The Subtle Art of Not Giving a F*ck - Mark Manson</li>
          <li>Rework - Jason Fried & David Heinemeier Hansson</li>
          <li>Karma - Sadhguru</li>
          <li>The Origins of Political Order - Francis Fukuyama</li>
          <li>Political Order and Political Decay - Francis Fukuyama</li>
          <li>The Better Angels of Our Nature - Steven Pinker</li>
          <li>Gödel, Escher, Bach: An Eternal Golden Braid - Douglas Hofstadter</li>
          <li>Why Am I So Clever - Friedrich Nietzsche</li>
        </ul>
      </div>
      
      <div className="mt-6 p-2 border border-green-500/30 rounded">
        <span className="text-yellow-400">TIP:</span> Type <span className="bg-gray-800 px-1 rounded">exit</span> to return to the regular website view.
      </div>
    </div>
  );
};

export default TerminalBooksSection;
