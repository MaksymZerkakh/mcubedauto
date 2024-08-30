import Image from "next/image";

export default function Home() {
  return (
    <main class="max-w-[1200px] px-[32px] h-screen m-auto flex flex-col justify-between">
      <div class="flex flex-col justify-center flex-grow">
        <div>
          <div class="intro-header text-[18px] uppercase tracking-[4px] text-center max-w-[200px] md:max-w-full m-auto">Mobile Mechanic, We Come to You</div>
          <h1 class="text-[42px] lg:text-[64px] mb-[40px] uppercase text-center">Launching Soon</h1>
          <p class="text-white max-w-[640px] mx-auto text-center">Thank you for visiting! We're working hard to bring you something amazing. Stay tuned for updates and get ready for the launch of our exciting new website.</p>
          <h3 className="text-center pt-[20px] text-[24px]"><a href="tel:9289512941">(928) 951-2941</a></h3>
          <div className="text-center pt-[20px]"><a href="mailto:support@mcubedauto.com  ">support@mcubedauto.com </a></div>
        </div>
      </div>
      <div class="text-center">
        <p class="text-xs pb-5 text-white">@2024 mcubedauto . All rights reserved.</p>
      </div>
    </main>
  );
}
