import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/constant'
import { CheckIcon } from 'lucide-react'

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full mb-44 bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased pt-11">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Начните бесплатно уже сегодня
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Автоматизируйте свою работу с Automatium
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <section className=' mt-32'>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Базовый
                <h2 className="text-6xl ">0₽</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Оцените возможности нашего программного обеспечения. Предупреждаем: вы не захотите уходить!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 бесплатные автоматизации
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 задач в месяц
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Двухэтапные действия
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Попробовать сейчас →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Начать сейчас
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan (Продвинутый план)
                <h2 className="text-6xl ">2900₽</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Оцените возможности нашего программного обеспечения. Предупреждаем: вы не захотите уходить!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 бесплатные автоматизации
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 задач в месяц
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Двухэтапные действия
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Попробовать сейчас →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Начать сейчас
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited (Безлимитный план)
                <h2 className="text-6xl ">9900₽</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Оцените возможности нашего программного обеспечения. Предупреждаем: вы не захотите уходить!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 бесплатные автоматизации
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 задач в месяц
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Двухэтапные действия
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Попробовать сейчас →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Начать сейчас
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  )
}
