import Link from 'next/link';
import Image from 'next/image';
import hackathon from '../public/hackathon.jpg';
import friends from '../public/friends.jpeg';
import code from '../public/code.jpeg';
import mysetup from '../public/mysetup.jpeg';
import aialok from '../public/aialok.jpeg';
import firstflight from '../public/myfirstflight.jpeg';
import myself from '../public/myself.jpeg';
import Footer from './components/footer';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Hi, I'm <span className="text-blue-400">Alok Gupta</span> 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I’m passionate about building and shipping products that people{' '}
        <span className="text-pink-500">❤️</span> to use. I am always curious
        about how things really work that drives me to explore and understand
        various technologies. I’m a huge fan of{' '}
        <Link
          target="_blank"
          className="text-blue-500"
          href=" https://github.com/ry"
        >
          Ryan Dahl (creator of Node.js){' '}
        </Link>{' '}
        and{' '}
        <Link className="text-blue-500" href="https://github.com/gaearon">
          Dan Abramov (co-author of Redux)
        </Link>{' '}
        and their contributions to open source. It’s amazing how open-source
        projects can impact millions, if not billions, of people. Right now, I'm
        contributing to the{' '}
        <span className="underline">Google Summer of Code</span> at{' '}
        <Link className="text-orange-500" href="https://www.postman.com/">
          Postman
        </Link>
        . I’m also part of the{' '}
        <Link className="text-orange-500" href="https://www.json-schema.org/">
          JSON Schema
        </Link>{' '}
        organization, where I contribute as a maintainer and developer on
        various projects.
      </p>

      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me coding at night in my hostel room"
            src={code}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me posing at a party"
            src={myself}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="My setup at the hostel"
            src={mysetup}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Coding with friends at a hackathon"
            src={friends}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Organizing a hackathon at my college"
            src={aialok}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="My first flight experience"
            src={firstflight}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <h1 className="font-medium text-2xl mb-4 tracking-tighter">
        <span className="text-blue-400">My life story</span>
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        From a small village in India to studying at a top college, my journey
        has been incredibly exciting. I still remember my childhood passion for
        technology, even without a computer. Learning to code in my school's
        computer lab, crafting simple webpages with just HTML and CSS to impress
        my friends, was where it all began. When I was child I used to play some
        space craft games in my father keypad nokia phone and thought of
        builiding that my own game one day, I can't believe now pursuing the
        dream of making my own game. The journey has had its share of ups and
        downs, but here I am in college, doing what I want to do — a moment that
        feels surreal. I've progressed from merely dreaming about building games
        to actually doing it. From creating websites in school to contributing
        to open source with the aim of impacting millions, it's been a truly
        transformative journey filled with excitement and joy. I'm grateful for
        how far I've come and hopeful that this thrilling adventure continues.
        The love for the technology is what takes me here.
        <br />
        <span className="text-pink-500">Thank you! Happy coding! ❤️</span>
        
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/aialok"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href=" https://codeforces.com/profile/ai.alok"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Codeforces</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/ai_alok"
          >
              <ArrowIcon />
            <p className="ml-2 h-7">Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aialok/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/ai.alok/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Instagram</p>
          </a>
        </li>
       
      </ul>
      <Footer />
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}