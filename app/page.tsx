import Link from 'next/link';
import Image from 'next/image';
import hackathon from '../public/hackathon.jpg';
import friends from '../public/friends.jpeg';
import code from '../public/code.jpeg';
import mysetup from '../public/mysetup.jpeg';
import aialok from '../public/aialok.jpeg';
import firstflight from '../public/myfirstflight.jpeg';

export default function Page() {
  return (
    <section>
  <h1 className="font-medium text-2xl mb-8 tracking-tighter">
    Hi, I'm <span className="text-blue-400">Alok Gupta</span> 👊
  </h1>
  <p className="prose prose-neutral dark:prose-invert">
    I’m passionate about creating products that people <span className="text-pink-500">love</span> to use. My curiosity about how things really work drives me to explore and understand various technologies. I’m a huge fan of Ryan Dahl (creator of Node.js) and Dan Abramov (creator of Redux) and their contributions to open source. It’s amazing how open-source projects can impact millions, if not billions, of people. Right now, I'm contributing to the <span className="text-green-500">Google Summer of Code</span> at <Link className="text-orange-500" href="https://www.postman.com/">Postman</Link>. I’m also proud to be a part of the <Link className="text-blue-500" href="https://www.json-schema.org/">JSON Schema</Link> organization, where I contribute as a maintainer and developer on various projects.
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
        src={aialok}
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
        src={hackathon}
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
  <p className="prose prose-neutral dark:prose-invert">
    From a small village in India to studying at a top college, my journey has been incredibly exciting. As a child, I was passionate about technology even without a computer. Learning to code in my school's computer lab and creating simple webpages with HTML and CSS to impress my friends was where it all began. Getting my first laptop last year marked a significant step. I used to play space games on my father's keypad Nokia phone, dreaming of building my own game one day. Now, I'm actually pursuing that dream. <br />
    I've progressed from dreaming about building games to actually doing it. From creating websites in school to contributing to open source with the aim of impacting millions, it's been a truly transformative journey filled with excitement and joy. I'm grateful for how far I've come and hopeful that this thrilling adventure continues. My love for technology has brought me here.
    <br />
     <span className='text-blue-500'>Thank you! Happy coding!</span>
  </p>
</section>
  );
}
