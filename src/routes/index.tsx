import { useState } from "react";
import { Users, Car, Wind, Utensils, Wifi, TreePine, Bath } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import villaExterior from "@/assets/villa-exterior.png";
import villaArches from "@/assets/villa-arches.jpg";
import malampuzhaDam from "@/assets/malampuzha-dam.jpg";
import kavaViewpoint from "@/assets/kava-viewpoint.jpg";
import palakkadFort from "@/assets/palakkad-fort.jpg";
import fantasyPark from "@/assets/fantasy-park.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLayout } from "@/components/site-layout";
import galleryData from "@/data/gallery.json";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};

const imageReveal = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
};

const slideUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 2, ease: [0.22, 1, 0.36, 1] }
};

const hover3D = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
  hover: {
    scale: 1.02,
    rotateX: 2,
    rotateY: 2,
    z: 20,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

const sectionReveal = {
  initial: { opacity: 0, y: 80, rotateX: 5, scale: 0.98 },
  whileInView: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] }
  },
  viewport: { once: true, margin: "-100px" }
};

const heroImageReveal = {
  initial: { scale: 1.2, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 3, ease: [0.22, 1, 0.36, 1] }
  }
};

const heroFadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const heroStagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1
    }
  }
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Batty's Villa — A Homestay in Malampuzha, Palakkad" },
      {
        name: "description",
        content:
          "Batty's Villa is a welcoming homestay in Malampuzha, Palakkad. Situated in the absolute center of natural beauty, it offers a peaceful retreat surrounded by lush landscapes.",
      },
      { property: "og:title", content: "Batty's Villa — Malampuzha, Palakkad" },
      {
        property: "og:description",
        content:
          "A welcoming homestay in Malampuzha, Palakkad — nestled in the very center of natural beauty.",
      },
      { property: "og:image", content: villaExterior },
      { name: "twitter:image", content: villaExterior },
    ],
  }),
  component: HomePage,
});


const amenities = [
  {
    title: "Family-Friendly Rooms",
    text: "Spacious, comfortable rooms ideal for families and groups.",
    icon: Users,
  },
  {
    title: "Free On-Site Parking",
    text: "Safe, convenient parking with easy access to the property.",
    icon: Car,
  },
  {
    title: "Air-Conditioned Rooms",
    text: "Stay cool and comfortable throughout your entire stay.",
    icon: Wind,
  },
  {
    title: "Room Service",
    text: "Comfort and convenience delivered right to your door.",
    icon: Utensils,
  },
  {
    title: "Free Wi-Fi",
    text: "Stay connected seamlessly throughout your stay.",
    icon: Wifi,
  },

  {
    title: "Scenic Outdoor Spaces",
    text: "Enjoy the beautiful mountain breeze from our private patios.",
    icon: TreePine,
  },
  {
    title: "In-Room Amenities & Toiletries",
    text: "Everything you need for a pleasant, easy stay.",
    icon: Bath,
  },
];
const landmarks = [
  {
    name: "Malampuzha Dam",
    text: "Malampuzha Dam is a beautiful destination where you can enjoy lush greenery, a colorful garden for relaxing walks, and an exciting hanging bridge over the water. You can also experience a thrilling ropeway ride with mountain views, a peaceful boat ride on the reservoir, and a visit to the interesting snake park.",
    image: malampuzhaDam,
  },
  {
    name: "Kava Viewpoint",
    text: "Kava is a peaceful paradise known for its stunning views where the lush green hills of the Western Ghats meet the calm blue waters of the reservoir. It is the perfect spot for nature lovers to enjoy a quiet sunset, take beautiful photographs, and experience the cool, misty breeze in a serene and untouched setting just a short drive from the Homestay.",
    image: kavaViewpoint,
  },
  {
    name: "Palakkad Fort",
    text: "Palakkad Fort is a famous old landmark made of strong stone, surrounded by a large and peaceful green park. It is a great place to take a slow walk, see the giant granite walls, and enjoy the quiet atmosphere under the big trees. It is very clean and calm, making it perfect for families to visit and enjoy the fresh air.",
    image: palakkadFort,
  },
  {
    name: "Fantasy Park",
    text: "Fantasy Park is a fun-filled water and amusement park perfect for a family day out. Located just minutes away, it offers exciting water slides, a giant wave pool, and many fun rides for children, all set against the beautiful background of the Malampuzha mountains.",
    image: fantasyPark,
  },
];

function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <SiteLayout>
      <span id="top" />

      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden perspective-1000">
        <motion.img
          initial="initial"
          animate="animate"
          variants={heroImageReveal}
          src={villaExterior}
          alt="Batty's Villa — modern white villa exterior with archways and palm trees"
          width={1920}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 bg-[#2b1d1a]/40"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2b1d1a]/80"
        />

        <motion.div
          initial="initial"
          animate="animate"
          variants={heroStagger}
          className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center"
        >
          <motion.span
            variants={heroFadeIn}
            className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/80"
          >
            Malampuzha · Palakkad
          </motion.span>
          <motion.h1
            variants={heroFadeIn}
            className="mt-6 font-display text-6xl leading-[1.05] text-white sm:text-7xl lg:text-8xl"
          >
            Batty&rsquo;s <span className="italic">Villa</span>
          </motion.h1>
          <motion.div
            variants={heroFadeIn}
            className="mt-8 flex flex-col items-center gap-4 text-center"
          >
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl">
              Leave the noise behind. Find your peace in the green.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              A warm welcome to our modern home in the middle of nature.
            </p>
          </motion.div>
          <motion.div variants={heroFadeIn} className="mt-10">
            <a
              href="https://wa.me/919633495920"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#2b1d1a] shadow-lg transition-all hover:scale-105 hover:bg-white/90 active:scale-95"
            >
              Enquire Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 lg:px-10 lg:py-36"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-[2rem] shadow-elegant"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={villaArches}
              alt="Whitewashed archways and tropical plants inside Batty's Villa"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
              About the Villa
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Welcome to Batty&rsquo;s Villa.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Batty&rsquo;s Villa is a welcoming homestay located in Malampuzha, Palakkad.
              Situated right in the center of natural beauty, this is truly nature&rsquo;s place.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Escape from the crowded city areas and retreat to a perfectly peaceful spot.
              Surrounded by majestic mountains and quiet outdoor spaces, every corner of our villa is designed to invite you to slow down, breathe, and reconnect with nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="bg-white scroll-mt-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-48">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
              Services & Comfort
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Everything you need for a comfortable stay
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-20 grid border-t border-l border-black/5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {amenities.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeIn}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group flex flex-col items-center border-r border-b border-black/5 p-10 sm:p-14 text-center transition-all duration-1000 hover:bg-[#712A34]/[0.02] relative z-0 perspective-1000"
                >
                  <motion.div variants={hover3D} className="flex flex-col items-center">
                    <Icon className="mb-4 sm:mb-6 h-8 w-8 sm:h-10 sm:w-10 text-[#712A34] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    <h3 className="font-display text-lg sm:text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-sand scroll-mt-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-[#712A34]">
              <span className="h-px w-8 bg-[#712A34]/30" />
              Our Spaces
              <span className="h-px w-8 bg-[#712A34]/30" />
            </span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Discover the <span className="italic text-[#712A34]">Beauty</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {[0, 1, 2].map((colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6">
                {galleryData
                  .filter((_, idx) => idx % 3 === colIndex)
                  .map((img) => (
                    <motion.figure
                      key={img.name}
                      variants={fadeIn}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.4 }
                      }}
                      className="relative overflow-hidden shadow-sm bg-muted"
                    >
                      <img
                        src={img.image}
                        alt={img.name}
                        loading="lazy"
                        className="w-full h-auto transition-opacity duration-300"
                      />
                    </motion.figure>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section id="landmarks" className="scroll-mt-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
              The Neighborhood
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Nearby Landmarks
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The best of Palakkad — mountain viewpoints, majestic dams, history, and family
              adventures — all within easy reach of the villa.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {landmarks.map((l) => (
              <motion.article
                key={l.name}
                variants={fadeIn}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group overflow-hidden rounded-3xl bg-background shadow-card transition-all duration-1000 hover:shadow-elegant cursor-default perspective-1000"
              >
                <motion.div variants={hover3D}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={l.image}
                      alt={l.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">
                      {l.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {l.text}
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
