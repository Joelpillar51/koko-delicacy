import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  ChevronRight,
  Clock,
  MessageCircle,
  Send,
  Users,
  Award,
  BookOpen,
  FileText,
  ShoppingBag,
} from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import MenuSection from "@/components/menu-section"
import FeatureCard from "@/components/feature-card"
import HeroSection from "@/components/hero-section"
import SimplePrizeSection from "@/components/simple-prize-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/koko-logo.svg"
              alt="KOKO Delicacy Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#menu" className="text-sm font-medium hover:text-[#E8630A]">
              Menu
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-[#E8630A]">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-[#E8630A]">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#E8630A]">
              Testimonials
            </Link>
          </nav>
          <Link href="/payment">
            <Button className="hidden md:flex items-center gap-2 bg-[#E8630A] hover:bg-[#d05a09]">
              <Send size={16} />
              Join on Telegram
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Prize Section */}
        <SimplePrizeSection />

        {/* What You'll Learn Section */}
        <section id="menu" className="py-16 bg-[#FFF7ED]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-2 bg-[#E8630A] hover:bg-[#d05a09] text-white transform hover:scale-105 transition-transform duration-200">Full Menu Inside!</Badge>
              <h2 className="text-3xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">What You'll Learn to Cook</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our professionally guided cooking class covers over 15 mouth-watering dishes — all Nigerian favorites
                and everyday essentials that will impress your family and friends.
              </p>
            </div>

            <Tabs defaultValue="jollof" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="jollof" className="data-[state=active]:bg-[#E8630A] data-[state=active]:text-white">
                  Jollof Special
                </TabsTrigger>
                <TabsTrigger value="soups" className="data-[state=active]:bg-[#E8630A] data-[state=active]:text-white">
                  Swallow & Soup
                </TabsTrigger>
                <TabsTrigger
                  value="protein"
                  className="data-[state=active]:bg-[#E8630A] data-[state=active]:text-white"
                >
                  Protein
                </TabsTrigger>
                <TabsTrigger value="street" className="data-[state=active]:bg-[#E8630A] data-[state=active]:text-white">
                  Street Food
                </TabsTrigger>
                <TabsTrigger value="bonus" className="data-[state=active]:bg-[#E8630A] data-[state=active]:text-white">
                  Bonus
                </TabsTrigger>
              </TabsList>

              <TabsContent value="jollof">
                <MenuSection
                  title="Jollof Special Series"
                  description="Master the art of cooking Nigeria's most iconic dish in three distinct styles"
                  items={["Classic Party Jollof", "Firewood Jollof Rice", "Native Palm Oil Jollof"]}
                  image="/images/jollof-rice.jpg"
                />
              </TabsContent>

              <TabsContent value="soups">
                <MenuSection
                  title="Swallow & Soup Combos"
                  description="Learn to prepare perfect soups that pair beautifully with traditional swallows"
                  items={[
                    "Egusi Soup (Lumpy & Fried Style)",
                    "Oha Soup",
                    "Afang Soup",
                    "Bitterleaf Soup",
                    "Ogbono with Okra combo",
                    "White Soup (Nsala)",
                    "Efo Riro",
                  ]}
                  image="/images/egusi-soup.jpg"
                />
              </TabsContent>

              <TabsContent value="protein">
                <MenuSection
                  title="Protein Perfection"
                  description="Discover techniques for preparing delicious protein dishes that elevate any meal"
                  items={[
                    "Pepper Chicken & Turkey",
                    "Goat Meat Peppersoup",
                    "Banga Soup with Fresh Fish",
                    "Fried Stew Base (Red Stew, Ayamase, Designer Stew)",
                  ]}
                  image="/images/pepper-chicken.jpg"
                />
              </TabsContent>

              <TabsContent value="street">
                <MenuSection
                  title="Native & Street Food Delights"
                  description="Recreate popular Nigerian street foods and native delicacies in your home kitchen"
                  items={[
                    "Ofada Sauce (With Iru & Assorted)",
                    "Nkwobi & Isi Ewu",
                    "Moi Moi (Leaf & Foil Method)",
                    "Yam Porridge (Asaro)",
                    "Beans & Plantain Combo",
                    "Akara (Crispy & Soft Centered)",
                  ]}
                  image="/images/moi-moi.jpg"
                />
              </TabsContent>

              <TabsContent value="bonus">
                <MenuSection
                  title="Bonus Recipes"
                  description="Round out your Nigerian culinary skills with these essential drinks and snacks"
                  items={[
                    "Zobo & Chapman",
                    "Smoothies & Parfait Layering",
                    "Puff Puff (Party Style)",
                    "Meat Pie (Flaky & Rich)",
                    "Small Chops Platter",
                  ]}
                  image="/images/zobo-drink.jpg"
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Chef Spotlight Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/chef-portrait.jpg"
                  alt="Chef Portrait"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-xl object-cover h-[500px] transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Badge className="mb-2 bg-[#E8630A] hover:bg-[#d05a09] text-white">Meet Your Instructor</Badge>
                <h2 className="text-3xl font-bold mb-4">Learn from a Master Chef with solid 10+ Years Experience</h2>
                <p className="text-gray-600 mb-6">
                  Chef KOKO has mastered the art of Nigerian cuisine through years of professional experience in top
                  restaurants and hotels across West Africa. Her passion for teaching has helped thousands of students
                  transform their cooking skills.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#E8630A] h-5 w-5" />
                    <span>Trained over 5,000 students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#E8630A] h-5 w-5" />
                    <span>Featured on national TV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#E8630A] h-5 w-5" />
                    <span>Restaurant consultant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#E8630A] h-5 w-5" />
                    <span>Koko's delicacy author</span>
                  </div>
                </div>
                <Button className="bg-[#E8630A] hover:bg-[#d05a09] text-white">Learn More About Chef KOKO</Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section id="features" className="py-16 bg-gradient-to-b from-[#FFF7ED] to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-2 bg-[#E8630A] hover:bg-[#d05a09] text-white transform hover:scale-105 transition-transform duration-200">Course Benefits</Badge>
              <h2 className="text-3xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">What You Get</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to transform your cooking skills in just 30 days
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <FeatureCard
                icon={<MessageCircle className="h-10 w-10 text-[#E8630A]" />}
                title="30-Day Intensive Telegram Class"
                description="Daily interactive sessions with our expert chef"
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#E8630A]"
                  >
                    <path d="m22 8-6 4 6 4V8Z"></path>
                    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                  </svg>
                }
                title="Daily Video & Voice Instructions"
                description="Clear, step-by-step guidance you can follow along"
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-[#E8630A]" />}
                title="Step-by-Step Recipe Guides"
                description="Downloadable PDFs with detailed instructions"
              />
              <FeatureCard
                icon={<ShoppingBag className="h-10 w-10 text-[#E8630A]" />}
                title="Ingredient Lists"
                description="Complete shopping lists with local market alternatives"
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#E8630A]"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                }
                title="Live Q&A Sessions"
                description="Get personal feedback and answers to your questions"
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-[#E8630A]" />}
                title="Supportive Community"
                description="Join a group of passionate Nigerian food enthusiasts"
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-[#E8630A]" />}
                title="Certificate of Completion"
                description="Digital certificate to showcase your achievement"
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-[#E8630A]" />}
                title="Business Starter Tips"
                description="Learn how to turn your skills into a food business"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-2 bg-[#E8630A] hover:bg-[#d05a09] text-white transform hover:scale-105 transition-transform duration-200">Visual Feast</Badge>
              <h2 className="text-3xl font-bold mb-4 transform hover:scale-105 transition-transform duration-300">A Glimpse of What You'll Create</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These are actual dishes prepared by our previous students during the course
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/Jollof-Rice.jpg"
                    alt="Classic Nigerian Jollof Rice"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/egusi-soup.jpg"
                    alt="Traditional Egusi Soup"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/Chicken tomato Stew.jpg"
                    alt="Chicken Tomato Stew"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/moi-moi.jpg"
                    alt="Steamed Moi Moi"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/Ofada sauce.jpg"
                    alt="Authentic Ofada Sauce"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/Vegetable sauce.jpg"
                    alt="Fresh Vegetable Sauce"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/Ogbono.jpg"
                    alt="Traditional Ogbono Soup"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Image
                    src="/images/SEAFOOD-JOLLOF-RICE.jpg"
                    alt="Premium Seafood Jollof Rice"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-[#FFF7ED]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="bg-[#E8630A] p-8 text-white text-center">
                <Badge className="bg-white text-[#E8630A] hover:bg-gray-100 mb-4">Limited Time Offer</Badge>
                <h2 className="text-3xl font-bold mb-2">Only ₦10,000 for Full Access</h2>
                <p className="text-orange-100">First 50 signups get a FREE recipe eBook and bonus instructor access</p>
              </div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#E8630A]" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-gray-600">30 Days Intensive</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-[#E8630A]" />
                    <div>
                      <p className="font-medium">Platform</p>
                      <p className="text-sm text-gray-600">Telegram Group</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#E8630A]"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    <div>
                      <p className="font-medium">Language</p>
                      <p className="text-sm text-gray-600">English & Pidgin</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <p>Access to all 25+ recipes and cooking techniques</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <p>Lifetime access to all course materials</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <p>Personal feedback on your cooking progress</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <p>Certificate of completion to showcase your skills</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/payment">
                    <Button
                      size="lg"
                      className="bg-[#E8630A] hover:bg-[#d05a09] text-white px-8 py-6 text-lg w-full sm:w-auto"
                    >
                      Secure Your Spot Now
                    </Button>
                  </Link>
                  <p className="mt-4 text-sm text-gray-500">Secure payment via Bank Transfer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-[#E8630A] hover:bg-[#d05a09] text-white">Success Stories</Badge>
              <h2 className="text-3xl font-bold mb-4">Here's What Past Students Are Saying</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of satisfied students who have transformed their cooking skills
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* How to Join Section */}
        <section className="py-16 bg-[#FFF7ED]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-2 bg-[#E8630A] hover:bg-[#d05a09] text-white">Simple Process</Badge>
              <h2 className="text-3xl font-bold mb-4">How to Join</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Follow these simple steps to start your cooking journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Click the JOIN NOW button",
                  description: "Register your interest in the cooking class",
                },
                {
                  step: 2,
                  title: "Make your secure payment",
                  description: "Use our secure payment options",
                },
                {
                  step: 3,
                  title: "Get added to Telegram Group",
                  description: "You'll receive an invite link after payment",
                },
                {
                  step: 4,
                  title: "Get ready to cook like a pro",
                  description: "Prepare your kitchen for Day 1",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-lg relative z-10 h-full">
                    <div className="bg-[#E8630A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-[#E8630A]/30 -translate-y-1/2 z-0">
                      <ChevronRight className="text-[#E8630A] absolute top-1/2 right-0 -translate-y-1/2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-12 bg-[#E8630A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Limited spots — Registration closes in:</h2>
            <CountdownTimer />
            <Link href="/payment">
              <Button size="lg" className="mt-8 bg-white text-[#E8630A] hover:bg-gray-100 px-8 py-6 text-lg">
                JOIN NOW
              </Button>
            </Link>
            <p className="mt-4 text-sm text-orange-100">Hosted on Telegram | Starts: SOON!</p>
            <p className="text-sm text-orange-100">⏰ Duration: 30 Days | Language: English & Pidgin</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Whether you're a student, a wife, a husband, a foodie, or a side hustle warrior, you owe it to yourself
              to know how to cook well.
            </h2>
            <p className="text-xl font-medium text-[#E8630A] mb-8">Don't dull. Turn your kitchen to greatness.</p>
            <Link href="/payment">
              <Button
                size="lg"
                className="bg-[#E8630A] hover:bg-[#d05a09] text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto"
              >
                <Send size={20} />
                JOIN NOW ON TELEGRAM
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Image
                src="/images/koko-logo.svg"
                alt="KOKO Delicacy Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-lg font-bold">Koko's Delicacy</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <Button className="bg-[#0088cc] hover:bg-[#0077b5] flex items-center gap-2">
                <Send size={16} />
                Telegram
              </Button>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Koko's Delicacy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
