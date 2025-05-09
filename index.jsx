
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-blue-900 text-white min-h-screen font-sans">
      <section className="py-24 text-center">
        <h1 className="text-4xl font-bold">Сильна мама — щаслива дитина</h1>
        <p className="mt-4 text-lg">
          Ця книга — не про відсутність батька. Вона про присутність сильної мами.
        </p>
        <Button className="mt-6" onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}>
          Придбати книгу
        </Button>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Про книгу</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Практичний гід для мам, які виховують дітей самостійно. Вона охоплює найважливіші теми
          виховання, емоційного розвитку та підтримки дітей.
        </p>
        <div className="w-full flex justify-center">
          <div className="bg-yellow-400 w-64 h-40 animate-pulse rounded-xl shadow-lg"></div>
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Що ви отримаєте</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardContent>
                <ul className="list-disc pl-4">
                  {[...Array(10)].map((_, j) => (
                    <li key={j}>Тема {i * 10 + j + 1}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Про автора</h2>
        <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full"></div>
        <p className="max-w-xl mx-auto">
          Маючи дві вищі освіти — журналістику й соціологію, я завжди мріяв допомагати людям через тексти.
          Після загибелі мого батька на війні я усвідомив, яку біль переживають діти без тата. Пройшовши 3 роки
          досвіду в міжнародних організаціях із захисту населення, зокрема дітей, я поєднав практичні знання з
          підходами провідних світових психологів. Так народилася ця книжка — щира, легка і змістовна. Вона — ваша підтримка.
        </p>
      </section>

      <section id="purchase" className="py-16 px-4 bg-blue-800 text-center">
        <h2 className="text-2xl font-semibold mb-4">Як придбати книгу</h2>
        <ol className="list-decimal max-w-lg mx-auto text-left mb-6 pl-6">
          <li>Оплатіть книгу на <strong>“Банку” Monobank</strong> за посиланням: <code>1234567</code></li>
          <li>Зробіть скріншот чека</li>
          <li>
            Надішліть його в Telegram: <a href="https://t.me/1234567" className="underline">@1234567</a> — вам відповість менеджер і надішле книгу
          </li>
        </ol>
        <Button>Перейти до оплати</Button>
      </section>

      <footer className="py-10 text-center">
        <p>Зв'язок: <a href="https://t.me/1234567" className="underline">Telegram</a> | <a href="#" className="underline">Instagram</a></p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} Сильна мама — щаслива дитина</p>
      </footer>
    </div>
  );
}
