import Image from 'next/image';

export default function AboutMePage() {
  return (
    <>
      <div className="max-w-full-content mx-auto pb-24">
        <div className="px-5">
          <div className="header-line my-8"></div>
          <h1 className="mb-7 mt-10 tracking-tighter">About Us</h1>
        </div>
      </div>
      <div className="bg-white w-full h-full pb-12">
        <div className="relative max-w-full-content mx-auto">
          <div
            className={`
            absolute
            top-[-100px]
            sm:right-0
            sm:w-[319px]
            h-[319px]
            overflow-hidden
            border-white
            border-8
            mx-5
            max-w-[calc(100%-50px)]`}
          >
            <Image
              width={500}
              height={500}
              src="/Ekonnect.png"
              alt="my pic"
              className="max-w-[calc(100%-50px)]"
            />
          </div>
          <section className="min-h-max mx-5">
            <p className="text-sm flex-1 leading-7 sm:w-[calc(100%-319px)] sm:pt-24 pt-48">
              My name is Allan Johnson and I am a personal coach. My goal is to
              assist people identify and overcome obstacles in their lives and
              to maximize their potential. Through my coaching, I help people
              set goals, build the confidence and skills they need to achieve
              success and develop a positive mindset and a sense of self-worth.
            </p>
            <p>&nbsp;</p>
            <p className="text-sm flex-1 leading-7">
              As the famous American author, salesman and motivational speaker
              Zig Ziglar once said: “Success is the doing, not the getting; in
              the trying, not the triumph. Success is a personal standard,
              reaching for the highest that is in us, becoming all that we can
              be. If we do our best, we are a success.
            </p>
            <div className="sm:flex pb-6">
              <section className="flex-1 pt-6">
                <h3 className="text-xl">Name</h3>
                <ul className="text-sm pt-6 list-disc list-inside leading-6">
                  <li>Adarsh Singh</li>
                  <li>Prajwal Kumar</li>
                  <li>Himanshu Saraswat</li>
                  <li>Joy Mridha</li>
                  <li>Yojith Kaustabh </li>
                  <li>Sushant Gadyal</li>
                  <li>Sujal Awargand</li>
                  <li>Abhishek Sahay</li>
                  <li>B.Sri Sasi Kaushik</li>
                </ul>
              </section>
              <section className="flex-1 pt-6">
                <h3 className="text-xl">Roll no.</h3>
                <ul className="text-sm pt-6 list-disc list-inside leading-6">
                  <li>S20220010004</li>
                  <li>S20220010178</li>
                  <li>S20220010082</li>
                  <li>S20220010092</li>
                  <li>S20220010201</li>
                  <li>S20220010218</li>
                  <li>S20220010213</li>
                  <li>S20220010003</li>
                  <li>S20220020265</li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
